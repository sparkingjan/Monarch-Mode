from fastapi import Depends, Header, HTTPException, status

from app.config import get_settings
from app.firebase import get_firestore_client
from app.firebase import verify_id_token


def get_bearer_token(authorization: str = Header(default="", alias="Authorization")) -> str:
    if not authorization or not authorization.lower().startswith("bearer "):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Missing or invalid Authorization header.",
        )
    return authorization.split(" ", 1)[1].strip()


def _header_truthy(value: str) -> bool:
    normalized = (value or "").strip().lower()
    return normalized in {"1", "true", "yes", "y", "on"}


def get_current_user(
    claims_token: str = Depends(get_bearer_token),
    x_monarch_session: str = Header(default="", alias="X-Monarch-Session"),
    x_monarch_claim_session: str = Header(default="", alias="X-Monarch-Claim-Session"),
) -> dict:
    try:
        claims = verify_id_token(claims_token)
    except Exception as exc:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail=f"Invalid Firebase token: {exc}",
        ) from exc
    uid = claims.get("uid")
    if not uid:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid Firebase token: missing uid.",
        )
    try:
        db = get_firestore_client()
        settings = get_settings()
        doc = db.collection(settings.firestore_collection_users).document(uid).get(timeout=8)
    except Exception as exc:
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail=f"Session check unavailable: {exc}",
        ) from exc

    if not doc.exists:
        return claims

    data = doc.to_dict() or {}
    active_session = (data.get("current_session_id") or "").strip()
    provided_session = (x_monarch_session or "").strip()
    is_claim_request = _header_truthy(x_monarch_claim_session)
    if active_session and active_session != provided_session and not is_claim_request:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Session expired. Please login again on this device.",
        )
    return claims
