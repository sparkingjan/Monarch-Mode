(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (window.matchMedia('(pointer: coarse)').matches) return;
  if (window.matchMedia('(max-width: 768px)').matches) return;
  if (typeof window.Lenis !== 'function') return;

  var root = document.documentElement;
  var rafId = 0;
  var lenis = new window.Lenis({
    lerp: 0.085,
    smoothWheel: true,
    smoothTouch: true,
    syncTouch: true,
    syncTouchLerp: 0.12,
    touchInertiaMultiplier: 28,
    wheelMultiplier: 0.82,
    touchMultiplier: 1.0,
    easing: function (t) {
      return 1 - Math.pow(1 - t, 4);
    }
  });

  function emitScrollState(event) {
    var progress = Number(event && event.progress) || 0;
    var velocity = Number(event && event.velocity) || 0;
    root.style.setProperty('--lenis-progress', String(Math.max(0, Math.min(1, progress))));
    root.style.setProperty('--lenis-velocity', String(velocity));
    window.dispatchEvent(new CustomEvent('lenis-scroll', { detail: event }));
  }

  function raf(time) {
    lenis.raf(time);
    rafId = requestAnimationFrame(raf);
  }

  lenis.on('scroll', emitScrollState);
  rafId = requestAnimationFrame(raf);
  window.__lenis = lenis;

  document.addEventListener('click', function (event) {
    var link = event.target.closest('a[href^="#"]');
    if (!link) return;
    var href = link.getAttribute('href');
    if (!href || href.length < 2) return;
    var target = document.querySelector(href);
    if (!target) return;

    event.preventDefault();
    lenis.scrollTo(target, { duration: 1.1, offset: -16 });
  });

  window.addEventListener('beforeunload', function () {
    cancelAnimationFrame(rafId);
    if (typeof lenis.destroy === 'function') {
      lenis.destroy();
    }
  });
})();
