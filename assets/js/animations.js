/* ============================================================
   animations.js — Scroll reveal, staggered cards, typed prompt
   ============================================================ */

/* ── Mobile nav hamburger ─────────────────────────────────── */
const navToggle = document.getElementById('nav-toggle');
const navMenu   = document.getElementById('nav-menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  // Close menu when a link is clicked
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ── Smooth scroll ─────────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* ── Section reveal observer ───────────────────────────────── */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

/* ── Staggered card / item reveal observer ─────────────────── */
const itemObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const delay = parseInt(entry.target.dataset.delay || 0);
      setTimeout(() => entry.target.classList.add('visible'), delay);
      itemObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal-item').forEach(el => itemObs.observe(el));

/* ── Typed hero prompt ─────────────────────────────────────── */
(function () {
  const el = document.querySelector('.hero-prompt');
  if (!el) return;

  const phrases = [
    'automatizando tus procesos repetitivos...',
    'desplegando agentes con IA...',
    'construyendo tu app web o móvil...',
    'listos para escalar tu operación.',
  ];

  let pIdx = 0, cIdx = 0, deleting = false;
  const PREFIX = '> ';

  function tick() {
    const phrase  = phrases[pIdx];
    const current = deleting ? phrase.slice(0, cIdx - 1) : phrase.slice(0, cIdx + 1);
    el.textContent = PREFIX + current;

    if (!deleting && cIdx === phrase.length) {
      deleting = true;
      setTimeout(tick, 1800);
      return;
    }
    if (deleting && cIdx === 0) {
      deleting = false;
      pIdx = (pIdx + 1) % phrases.length;
    }
    cIdx = deleting ? cIdx - 1 : cIdx + 1;
    setTimeout(tick, deleting ? 40 : 70);
  }

  tick();
})();
