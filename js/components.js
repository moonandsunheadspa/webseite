/* ============================================================
   MOON & SUN — Shared Components (Footer + Cookie)
   ============================================================ */

function renderFooter(rootPath = '') {
  return `
<footer>
  <div class="footer-inner">
    <div class="footer-top">
      <div class="footer-col">
        <img src="${rootPath}images/logo-white.png" alt="Moon & Sun Head Spa Logo" class="footer-logo">
        <p>Unterwagramerstraße 47/2<br>3100 St. Pölten<br>Österreich</p>
        <p style="margin-top:0.8rem;">Kostenlose Parkplätze direkt vor dem Haus.</p>
        <div class="footer-social">
          <a href="https://www.instagram.com/moon_sunheadspa/" target="_blank" rel="noopener" aria-label="Instagram">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          <a href="https://www.facebook.com/Moonsunheadspa" target="_blank" rel="noopener" aria-label="Facebook">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Navigation</h4>
        <a href="${rootPath}index.html">Home</a>
        <a href="${rootPath}pages/angebote-astral-aura.html">Astral Aura Ritual</a>
        <a href="${rootPath}pages/angebote-together.html">Astral Aura Together</a>
        <a href="${rootPath}pages/angebote-nacken.html">Nacken & Schulter Rituale</a>
        <a href="${rootPath}pages/angebote-kobido.html">ASMR Kobido Lifting</a>
        <a href="${rootPath}pages/ueber-uns.html">Über uns</a>
        <a href="${rootPath}pages/bewertungen.html">Bewertungen</a>
        <a href="${rootPath}pages/preisliste.html">Preisliste</a>
        <a href="${rootPath}pages/gutscheine.html">Gutscheine</a>
        <a href="${rootPath}pages/schulungen.html">Schulungen</a>
        <a href="${rootPath}pages/rahmenbedingungen.html">Rahmenbedingungen</a>
      </div>
      <div class="footer-col">
        <h4>Kontakt & Info</h4>
        <p>+43 690 10085496</p>
        <a href="mailto:moon_sunheadspa@hotmail.com">moon_sunheadspa@hotmail.com</a>
        <p style="margin-top:1rem; font-size:0.75rem; color:#ffffff;">Zahlung: Barzahlung</p>
        <p style="font-size:0.75rem; color:#ffffff;">Gutscheine, auch digital per E-Mail</p>
        <a href="https://calendly.com/moon_sunheadspa" target="_blank" class="btn-footer" style="display:inline-flex; align-items:center; justify-content:center; text-align:center;">Termin buchen</a>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2025 Moon & Sun Head Spa · Aysun Arslan</p>
      <div class="footer-legal">
        <a href="${rootPath}pages/impressum.html">Impressum</a>
        <a href="${rootPath}pages/agb.html">AGB</a>
        <a href="${rootPath}pages/datenschutz.html">Datenschutz & Widerruf</a>
      </div>
    </div>
    <p class="footer-disclaimer">Alle Behandlungen dienen der Entspannung, Prävention und dem allgemeinen Wohlbefinden. Sie ersetzen keine medizinische oder therapeutische Behandlung. Das Astral Aura Ritual Head Spa® ist eine markengeschützte Behandlungsmethode.</p>
  </div>
</footer>

<!-- Cookie Banner -->
<div class="cookie-banner" id="cookieBanner">
  <div class="cookie-text">
    <p>Wir verwenden Cookies, um dir die bestmögliche Erfahrung auf unserer Website zu bieten. Mit deiner Zustimmung akzeptierst du die Verwendung von Cookies gemäß unserer <a href="${rootPath}pages/datenschutz.html">Datenschutzerklärung</a>.</p>
  </div>
  <div class="cookie-actions">
    <button class="cookie-accept" id="cookieAccept">Akzeptieren</button>
    <button class="cookie-decline" id="cookieDecline">Ablehnen</button>
  </div>
</div>
`;
}

function renderSubpageHeader(rootPath = '') {
  return `
<header class="subpage-header" id="mainHeader">
  <a href="${rootPath}index.html">
    <img src="${rootPath}images/logo-white.png" alt="Moon & Sun Head Spa" class="header-logo">
  </a>
  <nav class="subpage-nav">
    <a href="${rootPath}index.html">Home</a>
    <div class="nav-dropdown">
      <a href="#">Angebote</a>
      <div class="dropdown-menu">
        <a href="${rootPath}pages/angebote-astral-aura.html">Astral Aura Ritual Head Spa®</a>
        <a href="${rootPath}pages/angebote-together.html">Astral Aura Together</a>
        <a href="${rootPath}pages/angebote-nacken.html">ASMR Nacken- & Schulter-Rituale</a>
        <a href="${rootPath}pages/angebote-kobido.html">ASMR Kobido Lifting & Kosmetik</a>
      </div>
    </div>
    <a href="${rootPath}pages/ueber-uns.html">Über uns</a>
    <a href="${rootPath}pages/bewertungen.html">Bewertungen</a>
    <a href="${rootPath}pages/preisliste.html">Preisliste</a>
    <a href="${rootPath}pages/gutscheine.html">Gutscheine</a>
    <a href="${rootPath}pages/schulungen.html">Schulungen</a>
    <a href="${rootPath}pages/rahmenbedingungen.html">Rahmenbedingungen</a>
    <span class="phone-nav">+43 690 10085496</span>
    <a href="https://calendly.com/moon_sunheadspa" target="_blank" class="btn-nav">Termin buchen</a>
  </nav>
  <button class="hamburger" id="hamburger" aria-label="Menü öffnen">
    <span></span><span></span><span></span>
  </button>
</header>

<div class="mobile-nav-overlay" id="mobileNavOverlay">
  <button class="close-btn" id="mobileNavClose">✕</button>
  <a href="${rootPath}index.html">Home</a>
  <a href="${rootPath}pages/angebote-astral-aura.html">Astral Aura Ritual</a>
  <a href="${rootPath}pages/angebote-together.html">Astral Aura Together</a>
  <a href="${rootPath}pages/angebote-nacken.html">Nacken & Schulter</a>
  <a href="${rootPath}pages/angebote-kobido.html">Kobido Lifting</a>
  <a href="${rootPath}pages/ueber-uns.html">Über uns</a>
  <a href="${rootPath}pages/bewertungen.html">Bewertungen</a>
  <a href="${rootPath}pages/preisliste.html">Preisliste</a>
  <a href="${rootPath}pages/gutscheine.html">Gutscheine</a>
  <a href="${rootPath}pages/schulungen.html">Schulungen</a>
  <a href="${rootPath}pages/rahmenbedingungen.html">Rahmenbedingungen</a>
  <a href="https://calendly.com/moon_sunheadspa" target="_blank" class="mobile-book-btn btn-beige">Termin buchen</a>
</div>
`;
}
