const nightModeToggle = document.querySelector(".night-mode");
nightModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

const title = document.getElementById("title");
let index = 0;
let text = "Welcome to my website";

function typeWriter() {
  if (index < text.length) {
    title.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }
}

window.onload = typeWriter;

const navLinks = document.querySelector(".nav-links");
const burgerMenu = document.querySelector(".burger-menu");
const closeMenu = document.querySelector(".close-menu");

burgerMenu.addEventListener("click", () => {
  navLinks.classList.toggle("nav-active");
  burgerMenu.classList.toggle("toggle");
});

closeMenu.addEventListener("click", () => {
  navLinks.classList.remove("nav-active");
  burgerMenu.classList.remove("toggle");
});
