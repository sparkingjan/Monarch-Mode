import json
from urllib import error, request

from fastapi import APIRouter, Depends, HTTPException

from app.config import get_settings
from app.deps import get_current_user
from app.models import (
    AiDietPlanRequest,
    AiDietPlanResponse,
)


router = APIRouter(prefix="/ai", tags=["ai"])

_MEAL_META = {
    "breakfast": {"time": "Breakfast", "stat": "recovery", "xp": 10},
    "lunch": {"time": "Lunch", "stat": "strength", "xp": 15},
    "hydration": {"time": "Hydration", "stat": "endurance", "xp": 5},
    "dinner": {"time": "Dinner", "stat": "recovery", "xp": 10},
    "before_bed": {"time": "Before Bed", "stat": "recovery", "xp": 5},
}
_MEAL_ORDER = ["breakfast", "lunch", "hydration", "dinner", "before_bed"]


def _clamp_int(value, default, low, high):
    try:
        numeric = int(round(float(value)))
    except Exception:
        numeric = default
    return max(low, min(high, numeric))


def _clamp_float(value, default, low, high):
    try:
        numeric = float(value)
    except Exception:
        numeric = default
    return max(low, min(high, numeric))


def _ai_chat_completion(payload: dict) -> dict:
    settings = get_settings()
    api_key = settings.resolved_ai_api_key
    if not api_key:
        raise HTTPException(
            status_code=503,
            detail="AI API key is not configured on the server. Set AI_API_KEY (or OPENAI_API_KEY).",
        )
    models_to_try = [settings.resolved_ai_model]
    if settings.resolved_ai_provider == "gemini" and settings.resolved_ai_model == "gemini-2.5-flash":
        models_to_try.extend(["gemini-2.0-flash", "gemini-1.5-flash"])

    last_http_error: HTTPException | None = None
    for idx, model_name in enumerate(models_to_try):
        attempt_payload = dict(payload)
        attempt_payload["model"] = model_name
        req = request.Request(
            url=f"{settings.resolved_ai_base_url}/chat/completions",
            method="POST",
            headers={
                "Content-Type": "application/json",
                "Authorization": f"Bearer {api_key}",
            },
            data=json.dumps(attempt_payload).encode("utf-8"),
        )
        try:
            with request.urlopen(req, timeout=30) as response:
                raw = response.read().decode("utf-8")
                return json.loads(raw) if raw else {}
        except error.HTTPError as exc:
            raw = exc.read().decode("utf-8", errors="ignore")
            detail = "AI provider request failed."
            try:
                parsed = json.loads(raw)
                detail = parsed.get("error", {}).get("message") or detail
            except Exception:
                if raw:
                    detail = raw.strip()[:500]
            status_code = exc.code if isinstance(exc.code, int) and 400 <= exc.code <= 599 else 502
            last_http_error = HTTPException(status_code=status_code, detail=detail)
            retryable_model_error = status_code in {403, 404} and idx < len(models_to_try) - 1
            if retryable_model_error:
                continue
            raise last_http_error from exc
        except Exception as exc:
            raise HTTPException(status_code=502, detail=f"Unable to contact AI provider: {exc}") from exc

    if last_http_error:
        raise last_http_error
    raise HTTPException(status_code=502, detail="AI provider request failed.")


def _sanitize_ai_plan(raw: dict) -> dict:
    raw_meals = raw.get("meals") if isinstance(raw, dict) else None
    mapped = {}
    if isinstance(raw_meals, list):
        for item in raw_meals:
            if not isinstance(item, dict):
                continue
            key = str(item.get("key") or "").strip().lower()
            if key in _MEAL_META:
                mapped[key] = item

    meals = []
    for key in _MEAL_ORDER:
        item = mapped.get(key) or {}
        meta = _MEAL_META[key]
        food_default = "3L+ water target" if key == "hydration" else "Balanced whole-food meal"
        meals.append(
            {
                "key": key,
                "time": meta["time"],
                "food": str(item.get("food") or food_default).strip()[:240],
                "stat": meta["stat"],
                "xp": meta["xp"],
                "protein": 0 if key == "hydration" else _clamp_int(item.get("protein"), 28, 5, 90),
                "carbs": 0 if key == "hydration" else _clamp_int(item.get("carbs"), 45, 5, 140),
                "calories": 0 if key == "hydration" else _clamp_int(item.get("calories"), 500, 80, 1400),
            }
        )

    note = raw.get("note") if isinstance(raw, dict) else None
    if not isinstance(note, str):
        note = None
    raw_nutrition = raw.get("nutrition") if isinstance(raw, dict) and isinstance(raw.get("nutrition"), dict) else {}
    meal_protein = sum(item["protein"] for item in meals)
    meal_carbs = sum(item["carbs"] for item in meals)
    meal_calories = sum(item["calories"] for item in meals)
    fat_default = _clamp_int((meal_calories - ((meal_protein * 4) + (meal_carbs * 4))) / 9, 60, 20, 160)
    nutrition = {
        "calories": _clamp_int(raw_nutrition.get("calories"), meal_calories or 2200, 1200, 5000),
        "protein": _clamp_int(raw_nutrition.get("protein"), meal_protein or 130, 60, 280),
        "carbs": _clamp_int(raw_nutrition.get("carbs"), meal_carbs or 240, 50, 700),
        "fat": _clamp_int(raw_nutrition.get("fat"), fat_default, 20, 180),
        "water_liters": round(_clamp_float(raw_nutrition.get("water_liters"), 3.0, 1.0, 8.0), 1),
    }
    return {"meals": meals, "note": note, "nutrition": nutrition}


@router.post("/diet-plan", response_model=AiDietPlanResponse)
def create_ai_diet_plan(payload: AiDietPlanRequest, claims: dict = Depends(get_current_user)):
    prompt = (
        "Create a practical 1-day Indian-friendly diet plan as strict JSON.\n"
        "Return an object with keys: meals (array), nutrition (object), note (string).\n"
        "meals must include exactly 5 items with keys in this order: "
        "breakfast, lunch, hydration, dinner, before_bed.\n"
        "Each meal object must include: key, food, protein, carbs, calories.\n"
        "Hydration meal must keep protein/carbs/calories as 0.\n"
        "nutrition object must include: calories, protein, carbs, fat, water_liters.\n"
        f"User profile: height_cm={payload.height_cm}, weight_kg={payload.weight_kg}, goal={payload.goal}.\n"
        "Keep meal foods specific and realistic, no markdown, output valid JSON only."
    )

    settings = get_settings()
    completion = _ai_chat_completion(
        {
            "model": settings.resolved_ai_model,
            "temperature": 0.4,
            "response_format": {"type": "json_object"},
            "messages": [
                {"role": "system", "content": "You are a nutrition coach that returns valid JSON only."},
                {"role": "user", "content": prompt},
            ],
        }
    )
    try:
        content = completion["choices"][0]["message"]["content"]
        parsed = json.loads(content) if isinstance(content, str) else {}
    except Exception as exc:
        raise HTTPException(status_code=502, detail=f"Invalid AI response format: {exc}") from exc

    return _sanitize_ai_plan(parsed)
