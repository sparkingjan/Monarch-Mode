from datetime import datetime, timezone

from firebase_admin import auth

from app.config import get_settings
from app.firebase import get_firestore_client


def is_visible_admin_email(email: str | None) -> bool:
    if not email or not isinstance(email, str):
        return False
    normalized = email.strip().lower()
    if not normalized:
        return False
    settings = get_settings()
    return normalized in set(settings.visible_admin_emails)


def _default_seed_payload(uid: str, email: str, name: str | None) -> dict:
    now = datetime.now(timezone.utc)
    return {
        "uid": uid,
        "email": email,
        "phone": None,
        "gallery_urls": [],
        "name": name or "Player Hunter",
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
        "goal": "maintain",
        "is_admin": is_visible_admin_email(email),
        "name_change_free_used": False,
        "name_change_paid_credits": 0,
        "name_change_last_payment_id": None,
        "created_at": now,
        "updated_at": now,
    }


def ensure_visible_admin_records() -> None:
    settings = get_settings()
    admin_emails = settings.visible_admin_emails
    if not admin_emails:
        return

    db = get_firestore_client()
    users_collection = db.collection(settings.firestore_collection_users)
    for email in admin_emails:
        try:
            fb_user = auth.get_user_by_email(email)
        except auth.UserNotFoundError:
            continue
        except Exception:
            continue

        doc_ref = users_collection.document(fb_user.uid)
        snapshot = doc_ref.get()
        if snapshot.exists:
            current = snapshot.to_dict() or {}
            if not bool(current.get("is_admin")):
                doc_ref.set(
                    {
                        "is_admin": True,
                        "email": (current.get("email") or fb_user.email or email).strip().lower(),
                        "updated_at": datetime.now(timezone.utc),
                    },
                    merge=True,
                )
            continue

        payload = _default_seed_payload(
            uid=fb_user.uid,
            email=(fb_user.email or email).strip().lower(),
            name=(fb_user.display_name or "").strip() or None,
        )
        doc_ref.set(payload, merge=True)
