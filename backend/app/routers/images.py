import base64
import re
import uuid
from pathlib import Path
from typing import Literal

from fastapi import APIRouter, Depends, HTTPException, Request
from fastapi.responses import FileResponse
from pydantic import BaseModel, Field

from app.config import get_settings
from app.deps import get_current_user
from app.image_store import initialize_image_store, sqlite_connection, utc_now_iso


router = APIRouter(prefix="/images", tags=["images"])
_DATA_URL_PATTERN = re.compile(r"^data:(image\/[a-zA-Z0-9.+-]+);base64,(.+)$")
_ALLOWED_TYPES = {
    "image/jpeg": "jpg",
    "image/jpg": "jpg",
    "image/png": "png",
    "image/webp": "webp",
    "image/gif": "gif",
}


class ImageUploadPayload(BaseModel):
    data_url: str = Field(min_length=32)
    category: Literal["gallery", "media"] = "media"


class ImageUploadResponse(BaseModel):
    id: str
    url: str
    category: str
    content_type: str
    byte_size: int


def _parse_data_url(data_url: str) -> tuple[str, bytes]:
    match = _DATA_URL_PATTERN.match(data_url.strip())
    if not match:
        raise HTTPException(status_code=400, detail="Invalid image data URL payload.")
    content_type = match.group(1).lower()
    if content_type not in _ALLOWED_TYPES:
        raise HTTPException(status_code=400, detail="Unsupported image type. Use JPG, PNG, WEBP, or GIF.")
    try:
        binary = base64.b64decode(match.group(2), validate=True)
    except Exception as exc:
        raise HTTPException(status_code=400, detail="Invalid base64 image payload.") from exc
    if not binary:
        raise HTTPException(status_code=400, detail="Image payload is empty.")
    settings = get_settings()
    if len(binary) > settings.image_store_max_bytes:
        raise HTTPException(status_code=413, detail=f"Image exceeds {settings.image_store_max_bytes} bytes limit.")
    return content_type, binary


def _category_limit(category: str) -> int:
    settings = get_settings()
    if category == "gallery":
        return max(1, settings.image_store_gallery_limit)
    return max(1, settings.image_store_gallery_limit)


@router.on_event("startup")
def _init_image_store() -> None:
    initialize_image_store()


@router.post("/upload", response_model=ImageUploadResponse)
def upload_image(
    payload: ImageUploadPayload,
    request: Request,
    claims: dict = Depends(get_current_user),
):
    uid = claims.get("uid")
    if not uid:
        raise HTTPException(status_code=401, detail="Missing authenticated user UID.")
    content_type, binary = _parse_data_url(payload.data_url)
    settings = get_settings()
    category = payload.category
    ext = _ALLOWED_TYPES[content_type]

    with sqlite_connection() as conn:
        current_count = conn.execute(
            "SELECT COUNT(1) AS total FROM images WHERE uid = ? AND category = ?",
            (uid, category),
        ).fetchone()["total"]
        if int(current_count) >= _category_limit(category):
            raise HTTPException(status_code=409, detail=f"{category} image limit reached.")

        image_id = uuid.uuid4().hex
        user_dir = Path(settings.image_store_dir) / uid / category
        user_dir.mkdir(parents=True, exist_ok=True)
        file_path = user_dir / f"{image_id}.{ext}"
        file_path.write_bytes(binary)

        conn.execute(
            """
            INSERT INTO images (id, uid, category, content_type, file_ext, file_path, byte_size, created_at)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            """,
            (image_id, uid, category, content_type, ext, str(file_path), len(binary), utc_now_iso()),
        )
        conn.commit()

    return ImageUploadResponse(
        id=image_id,
        url=str(request.url_for("get_image_by_id", image_id=image_id)),
        category=category,
        content_type=content_type,
        byte_size=len(binary),
    )


@router.get("/{image_id}", name="get_image_by_id")
def get_image_by_id(image_id: str):
    with sqlite_connection() as conn:
        row = conn.execute(
            "SELECT content_type, file_path FROM images WHERE id = ?",
            (image_id,),
        ).fetchone()
    if not row:
        raise HTTPException(status_code=404, detail="Image not found.")
    file_path = str(row["file_path"])
    if not Path(file_path).exists():
        raise HTTPException(status_code=404, detail="Image file missing.")
    return FileResponse(path=file_path, media_type=str(row["content_type"]))
