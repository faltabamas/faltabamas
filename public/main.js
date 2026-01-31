const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuIcon = menuBtn.querySelector("i");

// Toggle menú móvil
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  menuIcon.className = navLinks.classList.contains("open")
    ? "ri-close-line"
    : "ri-menu-line";
});

// Cerrar menú al seleccionar link
navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuIcon.className = "ri-menu-line";
});

// ScrollReveal
const reveal = {
  distance: "50px",
  duration: 1000,
  easing: "ease",
};

ScrollReveal().reveal(".hero__content, .card, .stat", {
  ...reveal,
  origin: "bottom",
  interval: 200,
});

ScrollReveal().reveal(".showcase__img", {
  ...reveal,
  origin: "left",
});

ScrollReveal().reveal(".showcase__content", {
  ...reveal,
  origin: "right",
});
