# Solo Leveling Backend (FastAPI + Firebase)

This backend provides:

- Firebase token-authenticated user endpoints
- Persistent user profile and progress in Firestore
- XP-based leaderboard endpoint

## 1) Prerequisites

- Python 3.10+
- Firebase project with:
  - Authentication enabled
  - Firestore database enabled
  - Service account JSON key downloaded

## 2) Setup

```bash
cd backend
python -m venv .venv
# Windows:
.venv\Scripts\activate
# macOS/Linux:
# source .venv/bin/activate

pip install -r requirements.txt
```

Copy env template and edit values:

```bash
cp .env.example .env
```

Set `FIREBASE_CREDENTIALS_PATH` in `.env` to your service account JSON path.
Set `ADMIN_VISIBLE_EMAILS` (comma-separated) for admin accounts that should always have a Firestore profile/leaderboard record.
Set Razorpay credentials for premium payments:

- `RAZORPAY_KEY_ID`
- `RAZORPAY_KEY_SECRET`
- `PREMIUM_MEMBERSHIP_PRICE_INR` (default `99`)
- `PREMIUM_MEMBERSHIP_VALIDITY_DAYS` (default `30`)

## 3) Run

```bash
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

API base URL: `http://localhost:8000/api/v1`

## Deploy (Render + Netlify)

### Backend on Render

1. Push this repo to GitHub.
2. In Render, create a new Blueprint service from repo root (`render.yaml` is included).
3. Set all required env vars in Render dashboard:
   - `ADMIN_VISIBLE_EMAILS`
   - `RAZORPAY_KEY_ID`
   - `RAZORPAY_KEY_SECRET`
   - `PREMIUM_MEMBERSHIP_PRICE_INR`
   - `PREMIUM_MEMBERSHIP_VALIDITY_DAYS`
   - `NAME_CHANGE_PRICE_INR`
   - `AI_PROVIDER`
   - `AI_API_KEY`
   - `AI_MODEL`
   - `AI_BASE_URL`
4. Add `firebase-service-account.json` inside `backend/` (or use a secret file path).
5. Set `APP_CORS_ORIGINS` to your Netlify domain(s), comma-separated.
6. Deploy and verify: `https://<render-service>.onrender.com/api/v1/health`

### Frontend on Netlify

1. In Netlify, create a site from this repo.
2. Build settings:
   - Build command: (leave empty)
   - Publish directory: `.`
3. After deploy, edit `web-config.js`:
   - Set `backendBaseUrl` production URL to your Render API URL (`/api/v1`).
4. Redeploy Netlify.

## Frontend Integration (already wired)

Frontend now reads runtime config from:

- `web-config.js`

Set these values:

- `backendBaseUrl` (default is `http://127.0.0.1:8000/api/v1`)
- Firebase web config:
  - `apiKey`
  - `authDomain`
  - `projectId`
  - `storageBucket`
  - `messagingSenderId`
  - `appId`

## 4) Auth Flow

Use Firebase client SDK on frontend to sign in users and obtain an ID token.
Send it in:

`Authorization: Bearer <firebase_id_token>`

## 5) Endpoints

- `GET /api/v1/health`
- `GET /api/v1/users/me` (auth required)
- `PUT /api/v1/users/me/profile` (auth required)
- `PUT /api/v1/users/me/progress` (auth required)
- `GET /api/v1/leaderboard?limit=50`
- `POST /api/v1/payments/razorpay/order` (auth required)
- `POST /api/v1/payments/razorpay/verify` (auth required)

## 6) Example Payloads

### Update profile

```json
{
  "name": "Ishraq",
  "height_cm": 190,
  "weight_kg": 69,
  "goal": "maintain"
}
```

### Update progress

```json
{
  "xp": 12850,
  "level": 3,
  "rank": "D-Rank",
  "survival_streak": 4,
  "stats": {
    "strength": 5,
    "endurance": 4,
    "agility": 3,
    "discipline": 4,
    "aura": 2,
    "recovery": 3
  }
}
```
