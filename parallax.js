(function () {
  const hero = document.querySelector('.hero-section');
  if (!hero) return;
  const heroContent = hero.querySelector('.hero-content');
  const heroEyes = hero.querySelector('.hero-shadow-eyes');

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) return;

  const isTouch = window.matchMedia('(pointer: coarse)').matches;
  const isMobileViewport = window.matchMedia('(max-width: 768px)').matches;
  if (isTouch || isMobileViewport) {
    hero.style.setProperty('--hero-parallax-x', '0px');
    hero.style.setProperty('--hero-parallax-y', '0px');
    hero.style.setProperty('--hero-depth', '0px');
    if (heroContent) {
      heroContent.style.transform = 'none';
    }
    if (heroEyes) {
      heroEyes.style.transform = 'none';
      heroEyes.style.opacity = '0.42';
    }
    return;
  }

  let raf = 0;
  let lastFrameTime = 0;
  let tx = 0;
  let ty = 0;
  let x = 0;
  let y = 0;
  let scrollTarget = 0;
  let scrollCurrent = 0;
  let heroHeight = hero.offsetHeight;

  let maxX = isTouch ? 10 : 22;
  let maxY = isTouch ? 6 : 14;
  const frameInterval = 1000 / 60;

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function updateBounds() {
    heroHeight = hero.offsetHeight;
    if (window.innerWidth <= 768) {
      maxX = 10;
      maxY = 6;
      return;
    }
    maxX = isTouch ? 10 : 22;
    maxY = isTouch ? 6 : 14;
  }

  function onMove(clientX, clientY) {
    const rect = hero.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    const nx = (clientX - rect.left) / rect.width;
    const ny = (clientY - rect.top) / rect.height;

    tx = (nx - 0.5) * maxX;
    ty = (ny - 0.5) * maxY;
  }

  function onLenisScroll(event) {
    const detail = event && event.detail ? event.detail : null;
    if (!detail || typeof detail.scroll !== 'number') return;
    scrollTarget = detail.scroll;
  }

  function onNativeScroll() {
    if (window.__lenis) return;
    scrollTarget = window.scrollY || window.pageYOffset || 0;
  }

  function tick(now) {
    raf = requestAnimationFrame(tick);
    if (lastFrameTime && (now - lastFrameTime) < frameInterval) return;
    const delta = Math.min(48, now - (lastFrameTime || now));
    lastFrameTime = now;

    const follow = clamp((delta / 16) * 0.09, 0.08, 0.18);
    const scrollFollow = clamp((delta / 16) * 0.075, 0.06, 0.15);

    x += (tx - x) * follow;
    y += (ty - y) * follow;
    scrollCurrent += (scrollTarget - scrollCurrent) * scrollFollow;

    const scrollRange = Math.max(1, heroHeight - window.innerHeight + 320);
    const scrollProgress = clamp(scrollCurrent / scrollRange, 0, 1);
    const depthShift = -scrollProgress * 18;

    hero.style.setProperty('--hero-parallax-x', `${x.toFixed(2)}px`);
    hero.style.setProperty('--hero-parallax-y', `${(y - scrollProgress * 8).toFixed(2)}px`);
    hero.style.setProperty('--hero-depth', `${depthShift.toFixed(2)}px`);

    if (heroContent) {
      const contentX = (-x * 0.24).toFixed(2);
      const contentY = (-y * 0.18 - scrollProgress * 26).toFixed(2);
      heroContent.style.transform = `translate3d(${contentX}px, ${contentY}px, 0)`;
    }

    if (heroEyes) {
      const eyesX = (x * 0.42).toFixed(2);
      const eyesY = (y * 0.2).toFixed(2);
      const eyesOpacity = clamp(0.34 + Math.abs(x) / Math.max(1, maxX) * 0.2, 0.3, 0.6);
      heroEyes.style.transform = `translate3d(${eyesX}px, ${eyesY}px, 0)`;
      heroEyes.style.opacity = eyesOpacity.toFixed(3);
    }
  }

  if (!isTouch) {
    hero.addEventListener('mousemove', function (event) {
      onMove(event.clientX, event.clientY);
    }, { passive: true });
    hero.addEventListener('mouseleave', function () {
      tx = 0;
      ty = 0;
    });
  }

  hero.addEventListener('touchmove', function (event) {
    const touch = event.touches && event.touches[0];
    if (!touch) return;
    onMove(touch.clientX, touch.clientY);
  }, { passive: true });

  window.addEventListener('deviceorientation', function (event) {
    if (event.gamma == null || event.beta == null) return;
    tx = Math.max(-maxX, Math.min(maxX, event.gamma * 0.35));
    ty = Math.max(-maxY, Math.min(maxY, (event.beta - 45) * 0.22));
  }, { passive: true });

  window.addEventListener('scroll', onNativeScroll, { passive: true });
  window.addEventListener('lenis-scroll', onLenisScroll);
  window.addEventListener('resize', updateBounds, { passive: true });
  updateBounds();

  raf = requestAnimationFrame(tick);

  document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      cancelAnimationFrame(raf);
      raf = 0;
      return;
    }
    if (!raf) {
      lastFrameTime = 0;
      raf = requestAnimationFrame(tick);
    }
  });

  window.addEventListener('beforeunload', function () {
    cancelAnimationFrame(raf);
    window.removeEventListener('scroll', onNativeScroll);
    window.removeEventListener('lenis-scroll', onLenisScroll);
    window.removeEventListener('resize', updateBounds);
  });
})();
