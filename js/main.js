/* ACI Lab — main.js */

(function () {
  'use strict';

  /* ── Navbar: scrolled shadow + active link ── */
  const navbar  = document.getElementById('navbar');
  const navMenu = document.getElementById('navMenu');
  const sections = Array.from(document.querySelectorAll('section[id]'));
  const navLinks = Array.from(document.querySelectorAll('.nav-menu a'));

  function onScroll() {
    /* shadow */
    navbar.classList.toggle('scrolled', window.scrollY > 10);

    /* active nav link */
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 90) current = sec.id;
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });

    /* scroll-to-top button */
    scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  /* ── Mobile menu toggle ── */
  const navToggle = document.getElementById('navToggle');
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });

  /* Close menu when a link is clicked */
  navLinks.forEach(link => {
    link.addEventListener('click', () => navMenu.classList.remove('open'));
  });

  /* ── Scroll-to-top button ── */
  const scrollTopBtn = document.getElementById('scrollTop');
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ── Intersection Observer: reveal animations ── */
  const revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          /* stagger siblings in the same grid */
          const siblings = Array.from(entry.target.parentElement.children)
            .filter(el => el.classList.contains('reveal'));
          const idx = siblings.indexOf(entry.target);
          entry.target.style.transitionDelay = (idx * 80) + 'ms';
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealEls.forEach(el => observer.observe(el));
  } else {
    /* Fallback: show all immediately */
    revealEls.forEach(el => el.classList.add('visible'));
  }

  /* ── Smooth active state on initial load ── */
  onScroll();
})();
