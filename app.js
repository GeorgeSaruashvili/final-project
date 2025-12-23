//photo slider
const slides = document.querySelectorAll(".slide");
let current = 0;

setInterval(() => {
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
}, 5000);

//progress bar
const aboutSection = document.querySelector("#about");
const progressBars = document.querySelectorAll(".progress-bar");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        progressBars.forEach((bar) => {
          const value = bar.getAttribute("data-progress");
          bar.style.width = value + "%";
        });
        observer.unobserve(aboutSection);
      }
    });
  },
  {
    threshold: 0.4,
  }
);

observer.observe(aboutSection);

//testimonials pagination
const slideBox = document.querySelectorAll(".testimonial");
const dots = document.querySelectorAll(".dot");

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    const index = dot.dataset.index;

    slideBox.forEach((s) => s.classList.remove("active"));
    dots.forEach((d) => d.classList.remove("active"));

    slideBox[index].classList.add("active");
    dots[index].classList.add("active");
  });
});
