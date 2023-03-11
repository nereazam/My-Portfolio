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

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const bars = document.querySelectorAll(".bar");

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("nav-open");
  navLinks.classList.toggle("nav-none");
  bars.forEach((bar) => bar.classList.toggle("nav-open"));
});

navLinks.addEventListener("click", () => {
  console.log("Clicked navLinks");
  navToggle.classList.remove("nav-open");
  navLinks.classList.add("nav-none");
  bars.forEach((bar) => bar.classList.remove("nav-open"));
});
