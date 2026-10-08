from fastapi import APIRouter, Header, HTTPException, Query
from app.config import get_settings
from app.firebase import get_firestore_client, verify_id_token
from app.models import LeaderboardResponse
from app.leaderboard_data import build_leaderboard
from app.user_seed import is_visible_admin_email

router = APIRouter(prefix="/leaderboard", tags=["leaderboard"])

@router.get("", response_model=LeaderboardResponse)
def get_leaderboard(limit: int = Query(default=50, ge=1, le=200),
                    authorization: str | None = Header(default=None, alias="Authorization")):
    try:
        current_uid = None
        if authorization and authorization.lower().startswith("bearer "):
            try:
                current_uid = verify_id_token(authorization.split(" ", 1)[1].strip()).get("uid")
            except Exception:
                pass
        db = get_firestore_client()
        settings = get_settings()
        # The same snapshot supplies global totals and stable XP/UID positions.
        records = []
        for doc in db.collection(settings.firestore_collection_users).stream(timeout=8):
            data = doc.to_dict() or {}
            records.append({**data, "uid": doc.id,
                            "is_admin": bool(data.get("is_admin")) or is_visible_admin_email(data.get("email"))})
        return LeaderboardResponse(**build_leaderboard(records, limit, current_uid))
    except Exception as exc:
        raise HTTPException(status_code=503, detail="Leaderboard data is unavailable.") from exc
