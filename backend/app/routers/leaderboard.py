from fastapi import APIRouter, HTTPException, Query

from app.config import get_settings
from app.firebase import get_firestore_client
from app.models import LeaderboardEntry, LeaderboardResponse
from app.user_seed import ensure_visible_admin_records, is_visible_admin_email


router = APIRouter(prefix="/leaderboard", tags=["leaderboard"])


@router.get("", response_model=LeaderboardResponse)
def get_leaderboard(limit: int = Query(default=50, ge=1, le=200)):
    try:
        ensure_visible_admin_records()
        db = get_firestore_client()
        settings = get_settings()
        query = (
            db.collection(settings.firestore_collection_users)
            .order_by("xp", direction="DESCENDING")
            .limit(limit)
            .stream()
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
        return LeaderboardResponse(total=len(entries), entries=entries)
    except Exception as exc:
        raise HTTPException(
            status_code=503,
            detail=f"Firestore unavailable: {exc}",
        ) from exc
