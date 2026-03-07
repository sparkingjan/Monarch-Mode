const isLocalHost = ['localhost', '127.0.0.1'].includes(window.location.hostname);
window.MONARCH_CONFIG = window.MONARCH_CONFIG || {
  // Change this to your Render URL after deploy.
  // Example: https://solo-leveling-api.onrender.com/api/v1
  backendBaseUrl: isLocalHost
    ? "http://127.0.0.1:8000/api/v1"
    : "https://monarch-mode.vercel.app/api",
  firebase: {
    apiKey: "AIzaSyBDeKJtu2WtSy0ezyYIbHM7V7FQ9BZocXg",
    authDomain: "solo-leveling-c38fb.firebaseapp.com",
    projectId: "solo-leveling-c38fb",
    storageBucket: "solo-leveling-c38fb.firebasestorage.app",
    messagingSenderId: "17935059805",
    appId: "1:17935059805:web:f5dc37e24df9827691f6b4"
  }
};
