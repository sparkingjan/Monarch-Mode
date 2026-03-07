# Solo Leveling Project Structure

This repository is organized into clear frontend and backend boundaries.

## Structure

```text
Solo Leveling/
|- frontend/                # Static web app (GitHub Pages artifact)
|  |- *.html                # Pages (index, login, quests, profile, etc.)
|  |- app.js                # Main frontend logic
|  |- nav.js                # Navigation behavior
|  |- auth-guard.js         # Route/auth checks
|  |- parallax.js           # Visual effects
|  |- lenis-init.js         # Smooth scroll init
|  |- styles.css            # Shared styles
|  |- web-config.js         # Frontend runtime config
|  \- assets/
|     |- media/             # GIFs and UI media
|     |- downloads/         # Installer/downloadable files
|     \- models/            # 3D/model assets
|
|- backend/                 # FastAPI service (Vercel project root)
|  |- app/                  # API app code
|  |- api/index.py          # Vercel serverless entrypoint
|  |- scripts/              # Backend maintenance scripts
|  |- requirements.txt
|  |- vercel.json           # Vercel routing/runtime config
|  \- README.md
|
|- .firebaserc
\- .gitignore
```

## Deployment mapping

- GitHub Pages deploys `frontend/` via `.github/workflows/deploy-pages.yml`.
- Vercel deploys backend from `backend/` using `backend/vercel.json`.
