from datetime import date, datetime, timezone
from typing import Optional

from fastapi import APIRouter, Depends, HTTPException
from firebase_admin import firestore

from app.config import get_settings
from app.deps import get_current_user
from app.firebase import get_firestore_client
from app.models import PublicUserRecord, UserProfileUpdate, UserProgressUpdate, UserRecord
from app.user_seed import ensure_visible_admin_records, is_visible_admin_email


router = APIRouter(prefix="/users", tags=["users"])


def _normalize_phone(value: Optional[str]) -> Optional[str]:
    if not value:
        return None
    raw = value.strip()
    if not raw:
        return None
    cleaned = "".join(ch for ch in raw if ch.isdigit() or ch == "+")
    if cleaned.startswith("00"):
        cleaned = "+" + cleaned[2:]
    if cleaned.startswith("+"):
        digits = "".join(ch for ch in cleaned[1:] if ch.isdigit())
        return f"+{digits}" if digits else None
    digits = "".join(ch for ch in cleaned if ch.isdigit())
    return f"+{digits}" if digits else None


def _user_doc_ref(uid: str):
    db = get_firestore_client()
    settings = get_settings()
    return db.collection(settings.firestore_collection_users).document(uid)


def _calculate_age_from_dob(raw_dob) -> Optional[int]:
    if not raw_dob:
        return None
    dob_date: Optional[date] = None
    if isinstance(raw_dob, date):
        dob_date = raw_dob
    elif isinstance(raw_dob, datetime):
        dob_date = raw_dob.date()
    elif isinstance(raw_dob, str):
        try:
            dob_date = date.fromisoformat(raw_dob)
        except ValueError:
            return None
    if dob_date is None:
        return None
    today = datetime.now(timezone.utc).date()
    age = today.year - dob_date.year
    if (today.month, today.day) < (dob_date.month, dob_date.day):
        age -= 1
    if age < 0 or age > 130:
        return None
    return age


def _default_user_payload(claims: dict) -> dict:
    now = datetime.now(timezone.utc)
    email = claims.get("email")
    return {
        "uid": claims["uid"],
        "email": email,
        "phone": claims.get("phone_number"),
        "gallery_urls": [],
        "name": claims.get("name") or "Player Hunter",
        "rank": "E-Rank",
        "level": 1,
        "xp": 0,
        "stats": {
            "strength": 0,
            "endurance": 0,
            "agility": 0,
            "discipline": 0,
            "aura": 0,
            "recovery": 0,
        },
        "survival_streak": 0,
        "height_cm": None,
        "weight_kg": None,
        "dob": None,
        "goal": "maintain",
        "is_admin": is_visible_admin_email(email),
        "premium_membership_active": False,
        "premium_membership_since": None,
        "premium_membership_until": None,
        "premium_last_payment_id": None,
        "name_change_free_used": False,
        "name_change_paid_credits": 0,
        "name_change_last_payment_id": None,
        "created_at": now,
        "updated_at": now,
    }


def _sanitize_goal(value) -> str:
    goal = str(value or "").strip().lower()
    return goal if goal in {"cut", "maintain", "bulk"} else "maintain"


def _as_int(value, fallback: int = 0) -> int:
    try:
        return int(value)
    except (TypeError, ValueError):
        return fallback


def _as_optional_int(value) -> Optional[int]:
    if value is None:
        return None
    try:
        return int(value)
    except (TypeError, ValueError):
        return None


def _as_optional_iso_date(value) -> Optional[str]:
    if value is None:
        return None
    if isinstance(value, datetime):
        value = value.date()
    if isinstance(value, date):
        return value.isoformat()
    if isinstance(value, str):
        raw = value.strip()
        if not raw:
            return None
        try:
            return date.fromisoformat(raw).isoformat()
        except ValueError:
            return None
    return None


def _sanitize_user_record(data: dict, claims: Optional[dict] = None) -> dict:
    sanitized = dict(data or {})
    defaults = _default_user_payload(claims or {"uid": sanitized.get("uid") or "", "email": sanitized.get("email")})
    for key, value in defaults.items():
        if sanitized.get(key) is None:
            sanitized[key] = value

    stats = sanitized.get("stats")
    if not isinstance(stats, dict):
        stats = {}
    default_stats = defaults["stats"]
    sanitized["stats"] = {
        "strength": int(stats.get("strength", default_stats["strength"]) or 0),
        "endurance": int(stats.get("endurance", default_stats["endurance"]) or 0),
        "agility": int(stats.get("agility", default_stats["agility"]) or 0),
        "discipline": int(stats.get("discipline", default_stats["discipline"]) or 0),
        "aura": int(stats.get("aura", default_stats["aura"]) or 0),
        "recovery": int(stats.get("recovery", default_stats["recovery"]) or 0),
    }
    gallery_urls = sanitized.get("gallery_urls")
    if not isinstance(gallery_urls, list):
        gallery_urls = []
    sanitized["gallery_urls"] = [str(item) for item in gallery_urls if str(item).strip()]
    sanitized["uid"] = str(sanitized.get("uid") or defaults.get("uid") or "")
    sanitized["email"] = (str(sanitized.get("email")).strip().lower() if sanitized.get("email") else None)
    sanitized["phone"] = _normalize_phone(sanitized.get("phone"))
    sanitized["name"] = str(sanitized.get("name") or defaults.get("name") or "Player Hunter").strip() or "Player Hunter"
    sanitized["rank"] = str(sanitized.get("rank") or defaults.get("rank") or "E-Rank").strip() or "E-Rank"
    sanitized["level"] = max(1, _as_int(sanitized.get("level"), 1))
    sanitized["xp"] = max(0, _as_int(sanitized.get("xp"), 0))
    sanitized["survival_streak"] = max(0, _as_int(sanitized.get("survival_streak"), 0))
    sanitized["height_cm"] = _as_optional_int(sanitized.get("height_cm"))
    sanitized["weight_kg"] = _as_optional_int(sanitized.get("weight_kg"))
    sanitized["dob"] = _as_optional_iso_date(sanitized.get("dob"))
    sanitized["goal"] = _sanitize_goal(sanitized.get("goal"))
    sanitized["is_admin"] = bool(sanitized.get("is_admin"))
    sanitized["premium_membership_active"] = bool(sanitized.get("premium_membership_active"))
    sanitized["premium_last_payment_id"] = (
        str(sanitized.get("premium_last_payment_id")).strip() if sanitized.get("premium_last_payment_id") else None
    )
    sanitized["name_change_free_used"] = bool(sanitized.get("name_change_free_used"))
    sanitized["name_change_paid_credits"] = max(0, _as_int(sanitized.get("name_change_paid_credits"), 0))
    sanitized["name_change_last_payment_id"] = (
        str(sanitized.get("name_change_last_payment_id")).strip() if sanitized.get("name_change_last_payment_id") else None
    )
    return sanitized


def _apply_premium_expiry(data: dict) -> bool:
    until = data.get("premium_membership_until")
    if not isinstance(until, datetime):
        return False
    now = datetime.now(timezone.utc)
    if until <= now and data.get("premium_membership_active"):
        data["premium_membership_active"] = False
        data["updated_at"] = now
        return True
    return False


@router.get("/me", response_model=UserRecord)
def get_me(claims: dict = Depends(get_current_user)):
    try:
        doc_ref = _user_doc_ref(claims["uid"])
        snapshot = doc_ref.get()
        if not snapshot.exists:
            payload = _default_user_payload(claims)
            doc_ref.set(payload)
            return UserRecord(**payload)
        data = _sanitize_user_record(snapshot.to_dict(), claims)
        premium_changed = _apply_premium_expiry(data)
        has_admin_upgrade = data and not bool(data.get("is_admin")) and is_visible_admin_email(data.get("email"))
        if has_admin_upgrade:
            data["is_admin"] = True
            data["updated_at"] = datetime.now(timezone.utc)
        if has_admin_upgrade or premium_changed:
            update_payload = {"updated_at": data["updated_at"]}
            if has_admin_upgrade:
                update_payload["is_admin"] = True
            if premium_changed:
                update_payload["premium_membership_active"] = data["premium_membership_active"]
            if "goal" in data:
                update_payload["goal"] = data["goal"]
            doc_ref.set(update_payload, merge=True)
        return UserRecord(**data)
    except Exception as exc:
        raise HTTPException(status_code=503, detail=f"Firestore unavailable: {exc}") from exc


@router.get("/{uid}/public", response_model=PublicUserRecord)
def get_public_profile(uid: str):
    try:
        snapshot = _user_doc_ref(uid).get()
        if not snapshot.exists:
            ensure_visible_admin_records()
            snapshot = _user_doc_ref(uid).get()
        if not snapshot.exists:
            raise HTTPException(status_code=404, detail="User not found")
        data = snapshot.to_dict() or {}
        return PublicUserRecord(
            uid=data.get("uid", uid),
            gallery_urls=data.get("gallery_urls") or data.get("galleryUrls") or [],
            name=data.get("name", "Player Hunter"),
            rank=data.get("rank", "E-Rank"),
            level=int(data.get("level", 1)),
            xp=int(data.get("xp", 0)),
            stats=data.get("stats", {}),
            survival_streak=int(data.get("survival_streak", 0)),
            height_cm=data.get("height_cm"),
            weight_kg=data.get("weight_kg"),
            age=_calculate_age_from_dob(data.get("dob")),
            goal=data.get("goal", "maintain"),
            is_admin=bool(data.get("is_admin")) or is_visible_admin_email(data.get("email")),
        )
    except HTTPException:
        raise
    except Exception as exc:
        raise HTTPException(status_code=503, detail=f"Firestore unavailable: {exc}") from exc


@router.put("/me/profile", response_model=UserRecord)
def update_me_profile(payload: UserProfileUpdate, claims: dict = Depends(get_current_user)):
    try:
        doc_ref = _user_doc_ref(claims["uid"])
        snapshot = doc_ref.get()
        current = _default_user_payload(claims) if not snapshot.exists else snapshot.to_dict()

        update_data = payload.model_dump(exclude_none=True)
        if "dob" in update_data and update_data["dob"] is not None:
            update_data["dob"] = update_data["dob"].isoformat()
        incoming_name = update_data.get("name")
        if isinstance(incoming_name, str):
            normalized_name = incoming_name.strip()
            if normalized_name:
                current_name = str(current.get("name") or "Player Hunter").strip()
                if normalized_name != current_name:
                    free_used = bool(current.get("name_change_free_used"))
                    paid_credits = int(current.get("name_change_paid_credits") or 0)
                    if not free_used:
                        current["name_change_free_used"] = True
                    elif paid_credits > 0:
                        current["name_change_paid_credits"] = paid_credits - 1
                    else:
                        raise HTTPException(
                            status_code=402,
                            detail="Name change payment required. First change is free, then Rs 100 per change.",
                        )
                    update_data["name"] = normalized_name
            else:
                update_data.pop("name", None)
        # Keep cleanup of old deprecated media fields.
        update_data["avatar_url"] = firestore.DELETE_FIELD
        update_data["avatarUrl"] = firestore.DELETE_FIELD
        update_data["banner_url"] = firestore.DELETE_FIELD
        update_data["bannerUrl"] = firestore.DELETE_FIELD
        update_data["avatar_type"] = firestore.DELETE_FIELD
        update_data["banner_type"] = firestore.DELETE_FIELD
        if "phone" in update_data:
            update_data["phone"] = _normalize_phone(update_data["phone"])
        current.update(update_data)
        current["is_admin"] = bool(current.get("is_admin")) or is_visible_admin_email(current.get("email"))
        current["updated_at"] = datetime.now(timezone.utc)

        if not snapshot.exists:
            current["created_at"] = current["updated_at"]

        doc_ref.set(current, merge=True)
        return UserRecord(**current)
    except Exception as exc:
        raise HTTPException(status_code=503, detail=f"Firestore unavailable: {exc}") from exc


@router.put("/me/progress", response_model=UserRecord)
def update_me_progress(payload: UserProgressUpdate, claims: dict = Depends(get_current_user)):
    try:
        doc_ref = _user_doc_ref(claims["uid"])
        snapshot = doc_ref.get()
        current = _default_user_payload(claims) if not snapshot.exists else snapshot.to_dict()

        progress_data = payload.model_dump()
        current.update(progress_data)
        current["updated_at"] = datetime.now(timezone.utc)
        if not snapshot.exists:
            current["created_at"] = current["updated_at"]

        doc_ref.set(current, merge=True)
        return UserRecord(**current)
    except Exception as exc:
        raise HTTPException(status_code=503, detail=f"Firestore unavailable: {exc}") from exc
