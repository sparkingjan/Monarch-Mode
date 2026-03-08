from fastapi import APIRouter, Header, HTTPException, Query

from app.config import get_settings
from app.firebase import get_firestore_client, verify_id_token
from app.models import LeaderboardEntry, LeaderboardResponse
from app.user_seed import ensure_visible_admin_records, is_visible_admin_email


router = APIRouter(prefix="/leaderboard", tags=["leaderboard"])


@router.get("", response_model=LeaderboardResponse)
def get_leaderboard(
    limit: int = Query(default=50, ge=1, le=200),
    authorization: str | None = Header(default=None, alias="Authorization"),
):
    try:
        ensure_visible_admin_records()
        db = get_firestore_client()
        settings = get_settings()
        claims = None
        if authorization and authorization.lower().startswith("bearer "):
            token = authorization.split(" ", 1)[1].strip()
            if token:
                try:
                    claims = verify_id_token(token)
                except Exception:
                    claims = None
        query = (
            db.collection(settings.firestore_collection_users)
            .order_by("xp", direction="DESCENDING")
            .limit(limit)
            .stream(timeout=8)
        )
        entries = []
        for position, doc in enumerate(query, start=1):
            data = doc.to_dict()
            entries.append(
                LeaderboardEntry(
                    position=position,
                    uid=data.get("uid", doc.id),
                    name=data.get("name", "Player Hunter"),
                    rank=data.get("rank", "E-Rank"),
                    level=int(data.get("level", 1)),
                    xp=int(data.get("xp", 0)),
                    survival_streak=int(data.get("survival_streak", 0)),
                    is_admin=bool(data.get("is_admin")) or is_visible_admin_email(data.get("email")),
                )
            )
        current_user = None
        if claims:
            current_uid = claims.get("uid")
            if current_uid:
                current_user = next((entry for entry in entries if entry.uid == current_uid), None)
                if current_user is None:
                    current_doc = (
                        db.collection(settings.firestore_collection_users).document(current_uid).get()
                    )
                    if current_doc.exists:
                        current_data = current_doc.to_dict() or {}
                        current_xp = int(current_data.get("xp", 0))
                        all_users = db.collection(settings.firestore_collection_users).stream()
                        higher_count = 0
                        for user_doc in all_users:
                            user_data = user_doc.to_dict() or {}
                            user_xp = int(user_data.get("xp", 0))
                            if user_xp > current_xp:
                                higher_count += 1
                            elif user_xp == current_xp and user_doc.id < current_uid:
                                higher_count += 1
                        current_user = LeaderboardEntry(
                            position=higher_count + 1,
                            uid=current_data.get("uid", current_uid),
                            name=current_data.get("name", "Player Hunter"),
                            rank=current_data.get("rank", "E-Rank"),
                            level=int(current_data.get("level", 1)),
                            xp=current_xp,
                            survival_streak=int(current_data.get("survival_streak", 0)),
                            is_admin=bool(current_data.get("is_admin"))
                            or is_visible_admin_email(current_data.get("email")),
                        )
        return LeaderboardResponse(total=len(entries), entries=entries, current_user=current_user)
    except Exception as exc:
        raise HTTPException(
            status_code=503,
            detail=f"Firestore unavailable: {exc}",
        ) from exc
