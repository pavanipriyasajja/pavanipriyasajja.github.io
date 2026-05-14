/* ============================================================
   nav.js  |  Mobile nav toggle — included on every page
   ============================================================ */
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');
  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      const open = navLinks.classList.toggle('open');
      this.setAttribute('aria-expanded', open);
    });
  }
});
