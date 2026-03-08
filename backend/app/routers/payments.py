import base64
import hashlib
import hmac
import json
from datetime import datetime, timedelta, timezone
from typing import Optional
from urllib import error, request

from fastapi import APIRouter, Depends, HTTPException

from app.config import get_settings
from app.deps import get_current_user
from app.firebase import get_firestore_client
from app.models import NameChangeStatus, PremiumMembershipStatus, RazorpayOrderResponse, RazorpayVerifyPayload


router = APIRouter(prefix="/payments", tags=["payments"])


def _user_doc_ref(uid: str):
    db = get_firestore_client()
    settings = get_settings()
    return db.collection(settings.firestore_collection_users).document(uid)


def _razorpay_request(path: str, method: str = "GET", payload: Optional[dict] = None) -> dict:
    settings = get_settings()
    if not settings.razorpay_key_id or not settings.razorpay_key_secret:
        raise HTTPException(status_code=503, detail="Razorpay is not configured on the server.")

    url = f"https://api.razorpay.com/v1/{path.lstrip('/')}"
    encoded = base64.b64encode(f"{settings.razorpay_key_id}:{settings.razorpay_key_secret}".encode("utf-8")).decode("utf-8")
    body = None
    headers = {
        "Authorization": f"Basic {encoded}",
        "Accept": "application/json",
    }
    if payload is not None:
        body = json.dumps(payload).encode("utf-8")
        headers["Content-Type"] = "application/json"

    req = request.Request(url=url, data=body, headers=headers, method=method)
    try:
        with request.urlopen(req, timeout=20) as response:
            raw = response.read().decode("utf-8")
            return json.loads(raw) if raw else {}
    except error.HTTPError as exc:
        raw = exc.read().decode("utf-8", errors="ignore")
        detail = "Razorpay request failed."
        try:
            parsed = json.loads(raw)
            detail = parsed.get("error", {}).get("description") or detail
        except Exception:
            if raw:
                detail = raw
        raise HTTPException(status_code=502, detail=detail) from exc
    except Exception as exc:
        raise HTTPException(status_code=502, detail=f"Unable to contact Razorpay: {exc}") from exc


@router.post("/razorpay/order", response_model=RazorpayOrderResponse)
def create_razorpay_order(claims: dict = Depends(get_current_user)):
    settings = get_settings()
    amount = max(1, int(settings.premium_membership_price_inr)) * 100
    now = datetime.now(timezone.utc)
    payload = {
        "amount": amount,
        "currency": settings.razorpay_currency,
        "receipt": f"premium-{claims['uid'][:10]}-{int(now.timestamp())}",
        "notes": {
            "uid": claims["uid"],
            "plan": "premium_membership_monthly",
        },
    }
    order = _razorpay_request("orders", method="POST", payload=payload)
    return RazorpayOrderResponse(
        key_id=settings.razorpay_key_id,
        order_id=order.get("id", ""),
        amount=int(order.get("amount") or amount),
        currency=str(order.get("currency") or settings.razorpay_currency),
        name=settings.premium_membership_plan_name,
        description=f"Premium membership - Rs {settings.premium_membership_price_inr}/month",
        prefill_name=claims.get("name") or "Player Hunter",
        prefill_email=claims.get("email"),
        prefill_contact=claims.get("phone_number"),
    )


@router.post("/razorpay/verify", response_model=PremiumMembershipStatus)
def verify_razorpay_payment(payload: RazorpayVerifyPayload, claims: dict = Depends(get_current_user)):
    settings = get_settings()
    if not settings.razorpay_key_secret:
        raise HTTPException(status_code=503, detail="Razorpay secret is missing on the server.")

    signature_body = f"{payload.razorpay_order_id}|{payload.razorpay_payment_id}".encode("utf-8")
    expected_signature = hmac.new(
        settings.razorpay_key_secret.encode("utf-8"),
        signature_body,
        hashlib.sha256,
    ).hexdigest()
    if not hmac.compare_digest(expected_signature, payload.razorpay_signature):
        raise HTTPException(status_code=400, detail="Payment signature verification failed.")

    payment = _razorpay_request(f"payments/{payload.razorpay_payment_id}", method="GET")
    payment_status = str(payment.get("status") or "").lower()
    if payment_status not in {"captured", "authorized"}:
        raise HTTPException(status_code=400, detail=f"Payment not successful (status: {payment_status or 'unknown'}).")

    if payment.get("order_id") != payload.razorpay_order_id:
        raise HTTPException(status_code=400, detail="Order mismatch detected during payment verification.")

    now = datetime.now(timezone.utc)
    doc_ref = _user_doc_ref(claims["uid"])
    snapshot = doc_ref.get()
    current = snapshot.to_dict() if snapshot.exists else {}
    current_until = current.get("premium_membership_until")
    if isinstance(current_until, datetime) and current_until > now:
        start = current_until
    else:
        start = now
    premium_until = start + timedelta(days=max(1, int(settings.premium_membership_validity_days)))
    update_data = {
        "premium_membership_active": True,
        "premium_membership_since": current.get("premium_membership_since") or now,
        "premium_membership_until": premium_until,
        "premium_last_payment_id": payload.razorpay_payment_id,
        "updated_at": now,
    }
    doc_ref.set(update_data, merge=True)
    return PremiumMembershipStatus(**update_data)


@router.post("/razorpay/name-change/order", response_model=RazorpayOrderResponse)
def create_name_change_order(claims: dict = Depends(get_current_user)):
    settings = get_settings()
    amount = max(1, int(settings.name_change_price_inr)) * 100
    now = datetime.now(timezone.utc)
    payload = {
        "amount": amount,
        "currency": settings.razorpay_currency,
        "receipt": f"namechg-{claims['uid'][:10]}-{int(now.timestamp())}",
        "notes": {
            "uid": claims["uid"],
            "plan": "name_change_credit",
        },
    }
    order = _razorpay_request("orders", method="POST", payload=payload)
    return RazorpayOrderResponse(
        key_id=settings.razorpay_key_id,
        order_id=order.get("id", ""),
        amount=int(order.get("amount") or amount),
        currency=str(order.get("currency") or settings.razorpay_currency),
        name="Name Change Credit",
        description=f"Name change credit - Rs {settings.name_change_price_inr}",
        prefill_name=claims.get("name") or "Player Hunter",
        prefill_email=claims.get("email"),
        prefill_contact=claims.get("phone_number"),
    )


@router.post("/razorpay/name-change/verify", response_model=NameChangeStatus)
def verify_name_change_payment(payload: RazorpayVerifyPayload, claims: dict = Depends(get_current_user)):
    settings = get_settings()
    if not settings.razorpay_key_secret:
        raise HTTPException(status_code=503, detail="Razorpay secret is missing on the server.")

    signature_body = f"{payload.razorpay_order_id}|{payload.razorpay_payment_id}".encode("utf-8")
    expected_signature = hmac.new(
        settings.razorpay_key_secret.encode("utf-8"),
        signature_body,
        hashlib.sha256,
    ).hexdigest()
    if not hmac.compare_digest(expected_signature, payload.razorpay_signature):
        raise HTTPException(status_code=400, detail="Payment signature verification failed.")

    payment = _razorpay_request(f"payments/{payload.razorpay_payment_id}", method="GET")
    payment_status = str(payment.get("status") or "").lower()
    if payment_status not in {"captured", "authorized"}:
        raise HTTPException(status_code=400, detail=f"Payment not successful (status: {payment_status or 'unknown'}).")

    if payment.get("order_id") != payload.razorpay_order_id:
        raise HTTPException(status_code=400, detail="Order mismatch detected during payment verification.")

    doc_ref = _user_doc_ref(claims["uid"])
    snapshot = doc_ref.get()
    current = snapshot.to_dict() if snapshot.exists else {}
    if current.get("name_change_last_payment_id") == payload.razorpay_payment_id:
        return NameChangeStatus(
            name_change_free_used=bool(current.get("name_change_free_used")),
            name_change_paid_credits=max(0, int(current.get("name_change_paid_credits") or 0)),
            name_change_last_payment_id=current.get("name_change_last_payment_id"),
        )

    next_credits = max(0, int(current.get("name_change_paid_credits") or 0)) + 1
    update_data = {
        "name_change_paid_credits": next_credits,
        "name_change_last_payment_id": payload.razorpay_payment_id,
        "updated_at": datetime.now(timezone.utc),
    }
    doc_ref.set(update_data, merge=True)
    return NameChangeStatus(
        name_change_free_used=bool(current.get("name_change_free_used")),
        name_change_paid_credits=next_credits,
        name_change_last_payment_id=payload.razorpay_payment_id,
    )
