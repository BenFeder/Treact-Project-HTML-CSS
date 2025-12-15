const toggleMenu = document.querySelector(".mob-btn");
const navLinks = document.querySelector(".mobile__nav--links");
const faMobileMenuIcon = document.querySelector(".mob-btn");

toggleMenu.addEventListener("click", () => {
  if (navLinks.classList.contains("hide")) {
    navLinks.classList.remove("hide");
    navLinks.classList.add("show");
    faMobileMenuIcon.classList.remove("fa-bars");
    faMobileMenuIcon.classList.add("fa-xmark");
  } else {
    navLinks.classList.remove("show");
    navLinks.classList.add("hide");
    faMobileMenuIcon.classList.remove("fa-xmark");
    faMobileMenuIcon.classList.add("fa-bars");
  }
});
