const isLocalHost = ['localhost', '127.0.0.1'].includes(window.location.hostname);
const configuredProdBackend = "https://YOUR_RENDER_SERVICE.onrender.com/api/v1";
const hasCustomProdBackend = !configuredProdBackend.includes("YOUR_RENDER_SERVICE");
const sameOriginApi = window.location.origin && window.location.origin.startsWith("http")
  ? `${window.location.origin}/api/v1`
  : "";

window.MONARCH_CONFIG = window.MONARCH_CONFIG || {
  // Change this to your Vercel API URL after deploy.
  // Example: https://solo-leveling-api.vercel.app/api/v1
  backendBaseUrl: isLocalHost
    ? "http://127.0.0.1:8000/api/v1"
    : "https://monarch-mode.vercel.app/api/v1",
  backendHasExplicitProdUrl: hasCustomProdBackend,
  firebase: {
    apiKey: "AIzaSyBDeKJtu2WtSy0ezyYIbHM7V7FQ9BZocXg",
    authDomain: "solo-leveling-c38fb.firebaseapp.com",
    projectId: "solo-leveling-c38fb",
    storageBucket: "solo-leveling-c38fb.firebasestorage.app",
    messagingSenderId: "17935059805",
    appId: "1:17935059805:web:f5dc37e24df9827691f6b4",
    measurementId: "G-YZ3Z27FBJN",
    projectNumber: "17935059805"
  }
};
