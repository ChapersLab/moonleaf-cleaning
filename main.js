// ==============================
// NAVBAR TOGGLE – MOONLEAF
// ==============================

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("nav-toggle");
  const menu = document.getElementById("nav-menu");
  const overlay = document.getElementById("nav-overlay");

  if (!toggle || !menu || !overlay) return;

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("active");
    toggle.classList.toggle("open");
    overlay.classList.toggle("active");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close on overlay click
  overlay.addEventListener("click", closeMenu);

  // Close on link click (mobile)
  menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  function closeMenu() {
    menu.classList.remove("active");
    overlay.classList.remove("active");
    toggle.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }
});

// ==============================
// Navbar – marcar item activo al click
// ==============================
const navLinks = document.querySelectorAll('.nav-menu a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // quitar clase active de todos
    navLinks.forEach(l => l.classList.remove('active'));

    // agregar clase active al que se clickeó
    link.classList.add('active');
  });
});


// Animación secuencial de h3 en HERO
const animatedTexts = document.querySelectorAll(".hero-animated-text h3");
let index = 0;

function showNextText() {
  animatedTexts.forEach((el, i) => {
    el.style.transform = "translateX(-100%)";
    el.style.opacity = "0";
  });

  animatedTexts[index].style.transform = "translateX(0)";
  animatedTexts[index].style.opacity = "1";

  index = (index + 1) % animatedTexts.length;
}

// Inicia animación
showNextText();
setInterval(showNextText, 4750);

// Scroll reveal with stagger support
const animatedElements = document.querySelectorAll('.animate-on-scroll');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2,
  rootMargin: '0px 0px -80px 0px'
});

animatedElements.forEach(el => observer.observe(el));


/* =========================
   START: TESTIMONIALS SCRIPT
========================= */

(function () {
  const track = document.querySelector('.testimonials-track');
  const cards = document.querySelectorAll('.testimonial-card');
  const prev = document.querySelector('.testimonials-nav--prev');
  const next = document.querySelector('.testimonials-nav--next');

  let index = 0;

  function cardsPerView() {
    if (window.innerWidth <= 640) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
  }

  function updateSlider() {
    const cardWidth = cards[0].offsetWidth + 24;
    track.style.transform = `translateX(-${index * cardWidth}px)`;
  }

  next.addEventListener('click', () => {
    if (index < cards.length - cardsPerView()) {
      index++;
      updateSlider();
    }
  });

  prev.addEventListener('click', () => {
    if (index > 0) {
      index--;
      updateSlider();
    }
  });

  window.addEventListener('resize', updateSlider);
})();

/* =========================
   END: TESTIMONIALS SCRIPT
========================= */