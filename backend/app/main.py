from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.config import get_settings
from app.routers.ai import router as ai_router
from app.routers.auth import router as auth_router
from app.routers.health import router as health_router
from app.routers.images import router as images_router
from app.routers.leaderboard import router as leaderboard_router
from app.routers.payments import router as payments_router
from app.routers.users import router as users_router
try:
    settings = get_settings()
except Exception:
    settings = None

app = FastAPI()

@app.get("/")
def root():
    return {"message": "API running"}

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins if settings else ["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health_router, prefix="/api/v1")
app.include_router(ai_router, prefix="/api/v1")
app.include_router(auth_router, prefix="/api/v1")
app.include_router(users_router, prefix="/api/v1")
app.include_router(images_router, prefix="/api/v1")
app.include_router(leaderboard_router, prefix="/api/v1")
app.include_router(payments_router, prefix="/api/v1")
