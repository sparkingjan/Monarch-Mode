from fastapi import APIRouter

from app.config import get_settings
from app.firebase import get_firebase_app, get_firestore_client

router = APIRouter(prefix="/health", tags=["health"])


@router.get("")
def healthcheck():
    return {"ok": True}


@router.get("/firebase")
def firebase_healthcheck():
    settings = get_settings()
    result = {
        "ok": True,
        "firebase_ok": False,
        "firestore_ok": False,
        "firestore_collection_users": settings.firestore_collection_users,
    }
    try:
        app = get_firebase_app()
        result["firebase_ok"] = True
        result["firebase_project_id"] = app.project_id
    except Exception as exc:
        result["ok"] = False
        result["firebase_error"] = str(exc)[:300]
        return result

    try:
        db = get_firestore_client()
        # Lightweight read to validate credentials and Firestore access.
        db.collection(settings.firestore_collection_users).document("__healthcheck__").get(timeout=8)
        result["firestore_ok"] = True
        result["firestore_project_id"] = getattr(db, "project", None)
    except Exception as exc:
        result["ok"] = False
        result["firestore_error"] = str(exc)[:300]
    return result


@router.get("/firebase-auth")
def firebase_auth_healthcheck():
    result = {"ok": True, "firebase_ok": False}
    try:
        app = get_firebase_app()
        result["firebase_ok"] = True
        result["firebase_project_id"] = app.project_id
    except Exception as exc:
        result["ok"] = False
        result["firebase_error"] = str(exc)[:300]
    return result
