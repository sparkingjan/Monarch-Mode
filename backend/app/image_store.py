import os
import sqlite3
from contextlib import contextmanager
from datetime import datetime, timezone
from pathlib import Path
from typing import Iterator

from app.config import get_settings


def _ensure_parent_dirs() -> None:
    settings = get_settings()
    image_dir = Path(settings.image_store_dir)
    db_path = Path(settings.image_store_db_path)
    try:
        image_dir.mkdir(parents=True, exist_ok=True)
        db_path.parent.mkdir(parents=True, exist_ok=True)
    except OSError as exc:
        # Vercel serverless runtime is read-only except /tmp.
        if exc.errno != 30 and "Read-only file system" not in str(exc):
            raise
        fallback_root = Path("/tmp/monarch-mode")
        image_dir = fallback_root / "images"
        db_path = fallback_root / "images.sqlite3"
        image_dir.mkdir(parents=True, exist_ok=True)
        db_path.parent.mkdir(parents=True, exist_ok=True)
        settings.image_store_dir = str(image_dir)
        settings.image_store_db_path = str(db_path)


def initialize_image_store() -> None:
    _ensure_parent_dirs()
    with sqlite_connection() as conn:
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS images (
                id TEXT PRIMARY KEY,
                uid TEXT NOT NULL,
                category TEXT NOT NULL,
                content_type TEXT NOT NULL,
                file_ext TEXT NOT NULL,
                file_path TEXT NOT NULL,
                byte_size INTEGER NOT NULL,
                created_at TEXT NOT NULL
            )
            """
        )
        conn.execute("CREATE INDEX IF NOT EXISTS idx_images_uid ON images(uid)")
        conn.execute("CREATE INDEX IF NOT EXISTS idx_images_uid_category ON images(uid, category)")
        conn.commit()


def utc_now_iso() -> str:
    return datetime.now(timezone.utc).isoformat()


@contextmanager
def sqlite_connection() -> Iterator[sqlite3.Connection]:
    settings = get_settings()
    _ensure_parent_dirs()
    conn = sqlite3.connect(settings.image_store_db_path)
    conn.row_factory = sqlite3.Row
    try:
        yield conn
    finally:
        conn.close()


def safe_remove(path: str) -> None:
    try:
        os.remove(path)
    except FileNotFoundError:
        return
    except Exception:
        return
