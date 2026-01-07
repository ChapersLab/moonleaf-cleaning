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