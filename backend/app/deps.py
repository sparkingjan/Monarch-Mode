from fastapi import Depends, Header, HTTPException, status

from app.firebase import verify_id_token


def get_bearer_token(authorization: str = Header(default="", alias="Authorization")) -> str:
    if not authorization or not authorization.lower().startswith("bearer "):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Missing or invalid Authorization header.",
        )
    return authorization.split(" ", 1)[1].strip()


def get_current_user(claims_token: str = Depends(get_bearer_token)) -> dict:
    try:
        claims = verify_id_token(claims_token)
    except Exception as exc:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail=f"Invalid Firebase token: {exc}",
        ) from exc
    return claims
