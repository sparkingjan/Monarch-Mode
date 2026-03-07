(function () {
  function setupNav() {
    const button = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.top-nav');
    if (!button || !nav) return;

    const protectedPages = new Set([
      'quests.html',
      'diet.html',
      'fitness.html',
      'progress.html',
      'leaderboard.html',
      'profile.html',
      'edit-profile.html',
      'profile-setup.html'
    ]);
    const premiumPages = new Set([
      'diet.html',
      'fitness.html'
    ]);

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
      const token = localStorage.getItem('firebase-id-token');
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

    function hrefPage(href) {
      if (!href) return '';
      return href.split('?')[0].split('#')[0].split('/').pop();
    }

    button.addEventListener('click', function () {
      const open = nav.classList.toggle('is-open');
      button.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function (event) {
        const targetPage = hrefPage(link.getAttribute('href'));
        const isLoggedIn = Boolean(localStorage.getItem('firebase-id-token'));
        if (protectedPages.has(targetPage) && !isLoggedIn) {
          event.preventDefault();
          window.location.href = 'login.html';
          return;
        }
        if (premiumPages.has(targetPage) && !hasPremiumMembership()) {
          event.preventDefault();
          window.location.href = 'profile.html?premium=required';
          return;
        }

        if (window.innerWidth <= 768) {
          nav.classList.remove('is-open');
          button.setAttribute('aria-expanded', 'false');
        }
      });
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 768) {
        nav.classList.remove('is-open');
        button.setAttribute('aria-expanded', 'false');
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupNav);
  } else {
    setupNav();
  }
})();
