const modal = document.getElementById("modal");
const btn = document.getElementById("loginBtn");
const close = document.querySelector(".close");

btn.onclick = () => modal.classList.add("active");
close.onclick = () => modal.classList.remove("active");
window.onclick = (e) => {
  if (e.target == modal) modal.classList.remove("active");
};

const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-menu");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Accesibilidad con teclado
toggle.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    nav.classList.toggle("active");
  }
});