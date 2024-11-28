const navbar = document.querySelector(".nav");
console.log("navbar", navbar);
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
});

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelectorAll(".nav-links");

navToggle.addEventListener("click", () => {
  links.classList.toggle("show-links");
});
