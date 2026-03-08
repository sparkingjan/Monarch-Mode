from functools import lru_cache
from typing import List

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=(".env", "backend/.env"),
        env_file_encoding="utf-8",
        case_sensitive=False,
    )

    app_name: str = "Solo Leveling API"
    app_env: str = "development"
    app_host: str = "0.0.0.0"
    app_port: int = 8000
    app_cors_origins: str = "http://127.0.0.1:5500,http://localhost:5500,http://localhost:3000"
    firebase_credentials_path: str = "./firebase-service-account.json"
    firestore_collection_users: str = "users"
    admin_visible_emails: str = "ishraqrather19@gmail.com"
    razorpay_key_id: str = ""
    razorpay_key_secret: str = ""
    razorpay_currency: str = "INR"
    premium_membership_price_inr: int = 99
    premium_membership_validity_days: int = 30
    premium_membership_plan_name: str = "Monarch Mode Premium"
    name_change_price_inr: int = 100
    ai_provider: str = "openai"
    ai_api_key: str = ""
    ai_model: str = ""
    ai_base_url: str = ""
    openai_api_key: str = ""
    openai_model: str = "gpt-4.1-mini"
    image_store_dir: str = "backend/data/images"
    image_store_db_path: str = "backend/data/images.sqlite3"
    image_store_max_bytes: int = 8 * 1024 * 1024
    image_store_gallery_limit: int = 9

    @property
    def cors_origins(self) -> List[str]:
        if isinstance(self.app_cors_origins, str):
            return [origin.strip() for origin in self.app_cors_origins.split(",") if origin.strip()]
        return list(self.app_cors_origins)

    @property
    def visible_admin_emails(self) -> List[str]:
        if isinstance(self.admin_visible_emails, str):
            return [email.strip().lower() for email in self.admin_visible_emails.split(",") if email.strip()]
        return [str(email).strip().lower() for email in self.admin_visible_emails if str(email).strip()]

    @property
    def resolved_ai_provider(self) -> str:
        provider = (self.ai_provider or "").strip().lower()
        if provider in {"openai", "grok", "gemini"}:
            return provider
        return "openai"

    @property
    def resolved_ai_api_key(self) -> str:
        if self.ai_api_key and self.ai_api_key.strip():
            return self.ai_api_key.strip()
        return (self.openai_api_key or "").strip()

    @property
    def resolved_ai_model(self) -> str:
        if self.ai_model and self.ai_model.strip():
            return self.ai_model.strip()
        key = self.resolved_ai_api_key
        if self.resolved_ai_provider == "gemini" or key.startswith("AIza"):
            return "gemini-2.5-flash"
        if self.resolved_ai_provider == "grok" or key.startswith("gsk_"):
            return "grok-3-latest"
        if self.openai_model and self.openai_model.strip():
            return self.openai_model.strip()
        return "gpt-4.1-mini"

    @property
    def resolved_ai_base_url(self) -> str:
        if self.ai_base_url and self.ai_base_url.strip():
            return self.ai_base_url.strip().rstrip("/")
        key = self.resolved_ai_api_key
        if self.resolved_ai_provider == "gemini" or key.startswith("AIza"):
            return "https://generativelanguage.googleapis.com/v1beta/openai"
        if self.resolved_ai_provider == "grok" or key.startswith("gsk_"):
            return "https://api.x.ai/v1"
        return "https://api.openai.com/v1"


@lru_cache
def get_settings() -> Settings:
    try:
        return Settings()
    except Exception:
        # Keep the API bootable even if host env vars are malformed.
        return Settings(_env_file=None)
