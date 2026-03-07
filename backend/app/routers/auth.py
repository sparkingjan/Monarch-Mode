from fastapi import APIRouter, HTTPException, Query

from app.config import get_settings
from app.firebase import get_firestore_client
from app.models import ResolveEmailResponse


router = APIRouter(prefix="/auth", tags=["auth"])


def _normalize_phone(value: str) -> str:
    raw = (value or "").strip()
    cleaned = "".join(ch for ch in raw if ch.isdigit() or ch == "+")
    if cleaned.startswith("00"):
        cleaned = "+" + cleaned[2:]
    if cleaned.startswith("+"):
        digits = "".join(ch for ch in cleaned[1:] if ch.isdigit())
        return f"+{digits}" if digits else ""
    digits = "".join(ch for ch in cleaned if ch.isdigit())
    return f"+{digits}" if digits else ""


@router.get("/resolve-email", response_model=ResolveEmailResponse)
def resolve_email(identifier: str = Query(min_length=3, max_length=128)):
    identifier_value = identifier.strip()
    if "@" in identifier_value:
        return ResolveEmailResponse(email=identifier_value.lower())

    phone = _normalize_phone(identifier_value)
    if not phone:
        raise HTTPException(status_code=400, detail="Invalid phone or email identifier.")

    try:
        db = get_firestore_client()
        settings = get_settings()
        query = (
            db.collection(settings.firestore_collection_users)
            .where("phone", "==", phone)
            .limit(2)
            .stream()
        )
        matches = [doc.to_dict() for doc in query if doc.exists]
    except Exception as exc:
        raise HTTPException(status_code=503, detail=f"Firestore unavailable: {exc}") from exc

    if not matches:
        raise HTTPException(status_code=404, detail="No account found for this phone number.")
    if len(matches) > 1:
        raise HTTPException(status_code=409, detail="Duplicate phone records found. Use email login.")

    email = (matches[0].get("email") or "").strip().lower()
    if not email:
        raise HTTPException(status_code=422, detail="Phone exists but no email is linked.")
    return ResolveEmailResponse(email=email)
