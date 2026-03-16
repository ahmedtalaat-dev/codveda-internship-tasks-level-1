// Navbar Hamburger
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  const icon = hamburger.querySelector("i");
  if (navLinks.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
});

// Slider Logic
const slidesContainer = document.getElementById("slides");
const slideElements = document.querySelectorAll(".slide");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

const firstClone = slideElements[0].cloneNode(true);
const lastClone = slideElements[slideElements.length - 1].cloneNode(true);

slidesContainer.appendChild(firstClone);
slidesContainer.insertBefore(lastClone, slideElements[0]);

let slides = document.querySelectorAll(".slide");
let currentIndex = 1;

slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;

function updateSlider() {
  slidesContainer.style.transition = "transform 0.5s ease";
  slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

nextBtn.addEventListener("click", () => {
  currentIndex++;
  updateSlider();
});

prevBtn.addEventListener("click", () => {
  currentIndex--;
  updateSlider();
});

slidesContainer.addEventListener("transitionend", () => {
  if (slides[currentIndex].isSameNode(firstClone)) {
    slidesContainer.style.transition = "none";
    currentIndex = 1;
    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  if (slides[currentIndex].isSameNode(lastClone)) {
    slidesContainer.style.transition = "none";
    currentIndex = slides.length - 2;
    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
});

setInterval(() => {
  currentIndex++;
  updateSlider();
}, 5000);
