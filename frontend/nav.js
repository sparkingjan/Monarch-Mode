(function () {
  function setupNav() {
    const button = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.top-nav');
    if (!button || !nav) return;

    function setMenuOpen(open) {
      nav.classList.toggle('is-open', open);
      document.body.classList.toggle('nav-menu-open', open);
      button.setAttribute('aria-expanded', open ? 'true' : 'false');
    }

    // Ensure stale classes from bfcache/history restore do not block page taps.
    setMenuOpen(false);

    button.addEventListener('click', function () {
      const open = !nav.classList.contains('is-open');
      setMenuOpen(open);
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        if (window.innerWidth <= 1024) {
          setMenuOpen(false);
        }
      });
    });

    document.addEventListener('click', function (event) {
      if (window.innerWidth > 1024) return;
      if (!nav.classList.contains('is-open')) return;
      const target = event.target;
      if (button.contains(target) || nav.contains(target)) return;
      setMenuOpen(false);
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 1024) {
        setMenuOpen(false);
      }
    });

    window.addEventListener('pageshow', function () {
      if (window.innerWidth <= 1024) {
        setMenuOpen(false);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupNav);
  } else {
    setupNav();
  }
})();
