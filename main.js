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
