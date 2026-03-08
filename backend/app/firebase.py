import os
import json
from functools import lru_cache
from pathlib import Path

import firebase_admin
from firebase_admin import auth, credentials, firestore

from app.config import get_settings


@lru_cache
def get_firebase_app():
    settings = get_settings()
    if firebase_admin._apps:
        return firebase_admin.get_app()
    raw_json = (os.getenv("FIREBASE_SERVICE_ACCOUNT_JSON") or "").strip()
    if raw_json:
        try:
            service_account_info = json.loads(raw_json)
            cred = credentials.Certificate(service_account_info)
            return firebase_admin.initialize_app(cred)
        except Exception:
            pass
    raw_path = settings.firebase_credentials_path
    candidate = Path(raw_path)
    if not candidate.is_absolute():
        backend_root = Path(__file__).resolve().parents[1]
        alt = backend_root / candidate
        if alt.exists():
            candidate = alt
    if raw_path and os.path.exists(str(candidate)):
        cred = credentials.Certificate(str(candidate))
        return firebase_admin.initialize_app(cred)
    # Fall back to application default credentials (useful when already linked/authenticated locally).
    return firebase_admin.initialize_app()


@lru_cache
def get_firestore_client():
    get_firebase_app()
    # Avoid gRPC transport issues on serverless platforms; prefer HTTP transport when supported.
    os.environ.setdefault("GOOGLE_CLOUD_DISABLE_GRPC", "1")
    return firestore.client()


def verify_id_token(id_token: str) -> dict:
    get_firebase_app()
    return auth.verify_id_token(id_token)
