(function () {
  const path = (window.location.pathname || '').split('/').pop() || 'index.html';
  const token = localStorage.getItem('firebase-id-token');
  const publicPages = new Set(['index.html', 'login.html', 'signup.html']);
  const premiumPages = new Set(['diet.html', 'fitness.html']);

  function activeUidFromToken(rawToken) {
    if (typeof rawToken !== 'string' || !rawToken.trim()) return null;
    try {
      const segments = rawToken.split('.');
      if (segments.length < 2) return null;
      const base64 = segments[1].replace(/-/g, '+').replace(/_/g, '/');
      const normalized = base64.padEnd(base64.length + ((4 - (base64.length % 4)) % 4), '=');
      const payload = JSON.parse(atob(normalized));
      return typeof payload.user_id === 'string'
        ? payload.user_id
        : (typeof payload.uid === 'string' ? payload.uid : (typeof payload.sub === 'string' ? payload.sub : null));
    } catch (_) {
      return null;
    }
  }

  function hasPremiumMembership() {
    const uid = activeUidFromToken(token);
    const stateKey = uid ? `monarch-mode-state:${uid}` : 'monarch-mode-state';
    const stateRaw = localStorage.getItem(stateKey) || localStorage.getItem('monarch-mode-state');
    if (!stateRaw) return false;
    try {
      const state = JSON.parse(stateRaw);
      const active = Boolean(state?.meta?.premiumMembershipActive);
      if (!active) return false;
      const untilRaw = state?.meta?.premiumMembershipUntil;
      if (typeof untilRaw !== 'string' || !untilRaw.trim()) return active;
      const until = new Date(untilRaw);
      if (Number.isNaN(until.getTime())) return active;
      return until.getTime() > Date.now();
    } catch (_) {
      return false;
    }
  }

  if (!token && !publicPages.has(path)) {
    window.location.replace('login.html');
    return;
  }

  if (token && premiumPages.has(path) && !hasPremiumMembership()) {
    window.location.replace('profile.html?premium=required');
    return;
  }

  const profileLink = document.querySelector('.profile-link');
  if (profileLink) {
    if (token) {
      profileLink.setAttribute('href', 'profile.html');
      profileLink.setAttribute('aria-label', 'Open profile');
    } else {
      profileLink.setAttribute('href', 'login.html');
      profileLink.setAttribute('aria-label', 'Open login');
    }
  }
})();
