//nav scroll
document.getElementById("homelink").addEventListener("click", function (event) {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
document
  .getElementById("aboutlink")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  });

document
  .getElementById("serviceslink")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("Services").scrollIntoView({ behavior: "smooth" });
  });
document
  .getElementById("Projectslink")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document
      .getElementById("myprojects")
      .scrollIntoView({ behavior: "smooth" });
  });
document
  .getElementById("Testimonialslink")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document
      .getElementById("Testimonials")
      .scrollIntoView({ behavior: "smooth" });
  });
document
  .getElementById("contactlink")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("Contact").scrollIntoView({ behavior: "smooth" });
  });

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

//project filter
const buttons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".project-card");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;

    cards.forEach((card) => {
      if (filter === "all" || card.classList.contains(filter)) {
        card.classList.remove("hide");
      } else {
        card.classList.add("hide");
      }
    });
  });
});

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
///forms

const form = document.getElementById("contact-form");
const result = document.getElementById("result");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  if (!validateForm()) return;

  const formData = new FormData(form);

  try {
    const response = await fetch(
      "https://borjomi.loremipsum.ge/api/send-message",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();

    if (data.status === 1) {
      result.innerText = data.desc;
      result.style.color = "green";
      form.reset();
    } else {
      result.innerText = data.desc || "Something went wrong";
      result.style.color = "red";
    }
  } catch (error) {
    result.innerText = "Server error ❌";
    result.style.color = "red";
  }
});

function validateForm() {
  let valid = true;
  valid &= checkRequired("name", "Name is required");
  valid &= checkEmail();
  valid &= checkMessage();
  return !!valid;
}

function checkRequired(id, msg) {
  const input = document.getElementById(id);
  if (input.value.trim() === "") {
    setError(input, msg);
    return false;
  }
  setSuccess(input);
  return true;
}

function checkEmail() {
  const email = document.getElementById("email");
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email.value.trim())) {
    setError(email, "Invalid email");
    return false;
  }
  setSuccess(email);
  return true;
}

function checkMessage() {
  const msg = document.getElementById("message");
  if (msg.value.trim().length < 10) {
    setError(msg, "Min 10 characters");
    return false;
  }
  setSuccess(msg);
  return true;
}

function setError(input, message) {
  input.nextElementSibling.innerText = message;
  input.style.borderColor = "red";
}

function setSuccess(input) {
  input.nextElementSibling.innerText = "";
  input.style.borderColor = "green";
}

// burger

const burger = document.getElementById("burger");
const navigation = document.getElementById("navigation");

burger.addEventListener("click", () => {
  navigation.classList.toggle("active");

  //footer nav
});
document.getElementById("fhome").addEventListener("click", function (event) {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
document.getElementById("fabout").addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});

document
  .getElementById("fservices")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("Services").scrollIntoView({ behavior: "smooth" });
  });
document
  .getElementById("fprojects")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document
      .getElementById("myprojects")
      .scrollIntoView({ behavior: "smooth" });
  });
document
  .getElementById("ftestimonials")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document
      .getElementById("Testimonials")
      .scrollIntoView({ behavior: "smooth" });
  });
document
  .getElementById("fcontacts")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("Contact").scrollIntoView({ behavior: "smooth" });
  });
