from datetime import date, datetime
from typing import Literal, Optional

from pydantic import BaseModel, ConfigDict, Field


GoalType = Literal["cut", "maintain", "bulk"]


class StatsPayload(BaseModel):
    strength: int = 0
    endurance: int = 0
    agility: int = 0
    discipline: int = 0
    aura: int = 0
    recovery: int = 0


class UserProfileUpdate(BaseModel):
    name: Optional[str] = Field(default=None, min_length=1, max_length=64)
    phone: Optional[str] = Field(default=None, min_length=7, max_length=32)
    gallery_urls: Optional[list[str]] = None
    height_cm: Optional[int] = Field(default=None, ge=120, le=230)
    weight_kg: Optional[int] = Field(default=None, ge=35, le=250)
    dob: Optional[date] = None
    goal: Optional[GoalType] = None


class UserProgressUpdate(BaseModel):
    xp: int = Field(ge=0)
    level: int = Field(ge=1)
    rank: str = Field(min_length=1, max_length=32)
    stats: StatsPayload
    survival_streak: int = Field(default=0, ge=0)


class UserRecord(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    uid: str
    email: Optional[str] = None
    phone: Optional[str] = None
    gallery_urls: list[str] = Field(default_factory=list)
    name: str = "Player Hunter"
    rank: str = "E-Rank"
    level: int = 1
    xp: int = 0
    stats: StatsPayload = StatsPayload()
    survival_streak: int = 0
    height_cm: Optional[int] = None
    weight_kg: Optional[int] = None
    dob: Optional[date] = None
    goal: GoalType = "maintain"
    is_admin: bool = False
    premium_membership_active: bool = False
    premium_membership_since: Optional[datetime] = None
    premium_membership_until: Optional[datetime] = None
    premium_last_payment_id: Optional[str] = None
    name_change_free_used: bool = False
    name_change_paid_credits: int = 0
    name_change_last_payment_id: Optional[str] = None
    updated_at: Optional[datetime] = None
    created_at: Optional[datetime] = None


class PublicUserRecord(BaseModel):
    uid: str
    gallery_urls: list[str] = Field(default_factory=list)
    name: str = "Player Hunter"
    rank: str = "E-Rank"
    level: int = 1
    xp: int = 0
    stats: StatsPayload = StatsPayload()
    survival_streak: int = 0
    height_cm: Optional[int] = None
    weight_kg: Optional[int] = None
    age: Optional[int] = None
    goal: GoalType = "maintain"
    is_admin: bool = False


class LeaderboardEntry(BaseModel):
    position: int
    uid: str
    name: str
    rank: str
    level: int
    xp: int
    survival_streak: int
    is_admin: bool = False


class LeaderboardResponse(BaseModel):
    total: int
    entries: list[LeaderboardEntry]


class ResolveEmailResponse(BaseModel):
    email: str


class RazorpayOrderResponse(BaseModel):
    key_id: str
    order_id: str
    amount: int
    currency: str
    name: str
    description: str
    prefill_name: str = "Player Hunter"
    prefill_email: Optional[str] = None
    prefill_contact: Optional[str] = None


class RazorpayVerifyPayload(BaseModel):
    razorpay_order_id: str = Field(min_length=1, max_length=128)
    razorpay_payment_id: str = Field(min_length=1, max_length=128)
    razorpay_signature: str = Field(min_length=1, max_length=256)


class PremiumMembershipStatus(BaseModel):
    premium_membership_active: bool
    premium_membership_since: Optional[datetime] = None
    premium_membership_until: Optional[datetime] = None
    premium_last_payment_id: Optional[str] = None


class NameChangeStatus(BaseModel):
    name_change_free_used: bool
    name_change_paid_credits: int
    name_change_last_payment_id: Optional[str] = None


class AiDietPlanRequest(BaseModel):
    height_cm: int = Field(ge=120, le=230)
    weight_kg: int = Field(ge=35, le=250)
    goal: GoalType


class AiDietMeal(BaseModel):
    key: str
    time: str
    food: str
    stat: str
    xp: int
    protein: int
    carbs: int
    calories: int


class AiNutritionPlan(BaseModel):
    calories: int
    protein: int
    carbs: int
    fat: int
    water_liters: float


class AiDietPlanResponse(BaseModel):
    meals: list[AiDietMeal]
    note: Optional[str] = None
    nutrition: AiNutritionPlan

