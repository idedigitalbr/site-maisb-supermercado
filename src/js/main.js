/* ==========================================================================
   SUPERMERCADO MAIS B — MAIN JS (v11)
   ========================================================================== */
document.addEventListener('DOMContentLoaded', function () {

  /* ── Hero Swiper ── */
  if (typeof Swiper !== 'undefined' && document.querySelector('.hero-swiper')) {
    new Swiper('.hero-swiper', {
      loop: true,
      autoplay: { delay: 4500, disableOnInteraction: false },
      pagination: { el: '.hero-swiper .swiper-pagination', clickable: true },
      navigation: { nextEl: '.hero-swiper .swiper-button-next', prevEl: '.hero-swiper .swiper-button-prev' },
      effect: 'fade',
      fadeEffect: { crossFade: true }
    });
  }

  /* ── Depoimentos Swiper ── */
  if (typeof Swiper !== 'undefined' && document.querySelector('.depo-swiper')) {
    new Swiper('.depo-swiper', {
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 16,
      autoplay: { delay: 5000, disableOnInteraction: false },
      navigation: { nextEl: '.depo-next', prevEl: '.depo-prev' },
    });
  }

  /* ── Banners Promocionais Swiper ── */
  if (typeof Swiper !== 'undefined' && document.querySelector('.banners-swiper')) {
    new Swiper('.banners-swiper', {
      loop: true,
      autoplay: { delay: 3500, disableOnInteraction: false },
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: { el: '.banners-swiper .swiper-pagination', clickable: true },
      navigation: {
        nextEl: '.banners-swiper .swiper-button-next',
        prevEl: '.banners-swiper .swiper-button-prev',
      },
      breakpoints: {
        768: { slidesPerView: 1, spaceBetween: 24 }
      }
    });
  }

  /* ── FAQ Accordion ── */
  document.querySelectorAll('.faq-q').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.faq-item');
      var wasOpen = item.classList.contains('open');

      // Close all
      document.querySelectorAll('.faq-item').forEach(function (i) {
        i.classList.remove('open');
      });

      // Toggle current
      if (!wasOpen) {
        item.classList.add('open');
      }
    });
  });

  /* ── Mobile Menu Toggle ── */
  var toggle = document.getElementById('mobile-toggle');
  var navL = document.getElementById('nav-left');
  var navR = document.getElementById('nav-right');

  if (toggle && navL && navR) {
    toggle.addEventListener('click', function () {
      var isOpen = navL.classList.contains('open');
      if (isOpen) {
        navL.classList.remove('open');
        navR.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      } else {
        navL.classList.add('open');
        navR.classList.add('open');
        toggle.setAttribute('aria-expanded', 'true');
      }
    });

    // Close menu on link click
    document.querySelectorAll('.nav-link, .btn-cta-red, .btn-topbar-cta, .topbar-links a').forEach(function (link) {
      link.addEventListener('click', function () {
        navL.classList.remove('open');
        navR.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ── Header Scroll & ScrollSpy One Page ── */
  var header = document.querySelector('.site-header');
  if (header) {
    var lastY = 0;
    window.addEventListener('scroll', function () {
      var y = window.scrollY;
      if (y > 60) {
        header.style.boxShadow = '0 4px 24px rgba(0,0,0,.6)';
      } else {
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,.5)';
      }
      lastY = y;
    }, { passive: true });
  }

  // Active Link ScrollSpy
  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.nav-link[href^="#"]');

  if (sections.length && navLinks.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.getAttribute('id');
          navLinks.forEach(function (link) {
            if (link.getAttribute('href') === '#' + id) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, { threshold: 0.35 });

    sections.forEach(function (sec) {
      observer.observe(sec);
    });
  }

});

