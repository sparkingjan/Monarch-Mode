const PROD_BACKEND_URL = "https://monarch-mode.vercel.app/api/v1";
const isLocalHost = ['localhost', '127.0.0.1'].includes(window.location.hostname);
const capacitorPlatform = (() => {
  try {
    return window.Capacitor?.getPlatform?.() || '';
  } catch (_) {
    return '';
  }
})();
const isCapacitorNative = (() => {
  try {
    if (window.location.protocol === 'capacitor:' || window.location.protocol === 'ionic:') return true;
    if (window.Capacitor?.isNativePlatform?.()) return true;
    return ['android', 'ios'].includes(String(capacitorPlatform).toLowerCase());
  } catch (_) {
    return false;
  }
})();
const forceLocalBackend = (() => {
  try {
    const query = new URLSearchParams(window.location.search || '');
    if (query.get('localBackend') === '1') return true;
    return localStorage.getItem('monarch-force-local-backend') === '1';
  } catch (_) {
    return false;
  }
})();
const resolvedBackendBaseUrl = (isLocalHost && !isCapacitorNative && forceLocalBackend)
  ? "http://127.0.0.1:8000/api/v1"
  : PROD_BACKEND_URL;

window.MONARCH_CONFIG = window.MONARCH_CONFIG || {
  // Use production backend by default (including Android WebView/Capacitor).
  // Local backend is used only when explicitly enabled for development.
  backendBaseUrl: resolvedBackendBaseUrl,
  backendHasExplicitProdUrl: true,
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
