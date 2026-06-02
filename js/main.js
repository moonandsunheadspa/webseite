/* ============================================================
   MOON & SUN HEAD SPA — Main JavaScript
   ============================================================ */

// ---- Fade-in on scroll ----
function initFadeIn() {
  const els = document.querySelectorAll('.fade-in');
  if (!els.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => observer.observe(el));
}

// ---- Cookie Banner ----
function initCookie() {
  const banner = document.getElementById('cookieBanner');
  if (!banner) return;
  if (localStorage.getItem('ms_cookie_consent')) {
    banner.classList.add('hidden');
    return;
  }
  const acceptBtn = document.getElementById('cookieAccept');
  const declineBtn = document.getElementById('cookieDecline');
  if (acceptBtn) acceptBtn.addEventListener('click', () => {
    localStorage.setItem('ms_cookie_consent', 'accepted');
    banner.classList.add('hidden');
  });
  if (declineBtn) declineBtn.addEventListener('click', () => {
    localStorage.setItem('ms_cookie_consent', 'declined');
    banner.classList.add('hidden');
  });
}

// ---- Mobile Nav ----
function initMobileNav() {
  // Retry bis der Header gerendert ist (für dynamisch geladene Header)
  function tryInit(attempts) {
    const hamburger = document.getElementById('hamburger');
    const overlay   = document.getElementById('mobileNavOverlay');
    const closeBtn  = document.getElementById('mobileNavClose');
    if (!hamburger || !overlay) {
      if (attempts > 0) setTimeout(() => tryInit(attempts - 1), 100);
      return;
    }
    hamburger.addEventListener('click', () => overlay.classList.add('open'));
    if (closeBtn) closeBtn.addEventListener('click', () => overlay.classList.remove('open'));
    overlay.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => overlay.classList.remove('open'));
    });
  }
  tryInit(20);
}

// ---- Cert Slider ----
function initCertSlider() {
  const track = document.getElementById('certTrack');
  const prevBtn = document.getElementById('certPrev');
  const nextBtn = document.getElementById('certNext');
  if (!track) return;

  const items = track.querySelectorAll('.cert-item');
  let current = 0;
  const visible = () => window.innerWidth <= 768 ? 1 : 3;

  function update() {
    const v = visible();
    const itemW = 100 / v;
    track.style.transform = `translateX(-${current * itemW}%)`;
  }

  if (prevBtn) prevBtn.addEventListener('click', () => {
    if (current > 0) { current--; update(); }
  });
  if (nextBtn) nextBtn.addEventListener('click', () => {
    const v = visible();
    if (current < items.length - v) { current++; update(); }
  });

  window.addEventListener('resize', () => { 
    if (current > items.length - visible()) current = 0;
    update(); 
  });
  update();
}

// ---- Hero scroll parallax (disabled) ----
function initHeroParallax() {
  // Parallax deaktiviert — kein Zusammenziehen beim Scrollen
}

// ---- Home transparent nav scroll ----
function initHomeNav() {
  const nav = document.getElementById('homeNav');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }, { passive: true });
}

// ---- Dropdown hover fix for touch ----
function initDropdowns() {
  const dropdowns = document.querySelectorAll('.nav-dropdown');
  dropdowns.forEach(dd => {
    dd.addEventListener('click', (e) => {
      const menu = dd.querySelector('.dropdown-menu');
      if (!menu) return;
      if (window.innerWidth <= 768) {
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
        e.stopPropagation();
      }
    });
  });
  document.addEventListener('click', () => {
    document.querySelectorAll('.dropdown-menu').forEach(m => m.style.display = '');
  });
}

// ---- Init all ----
document.addEventListener('DOMContentLoaded', () => {
  initFadeIn();
  initCookie();
  initMobileNav();
  initCertSlider();
  initHeroParallax();
  initHomeNav();
  initDropdowns();
});
