
// ================= SKILLS DATA =================
const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "C++",
  "Java",
  "PostgreSQL",
  "Video Editing",
  "Prompt Engineering"
  
];

const skillsContainer = document.getElementById("skillsContainer");

if (skillsContainer) {
  skills.forEach((skill) => {
    const skillDiv = document.createElement("div");
    skillDiv.className = "skill-item";
    skillDiv.textContent = skill;
    skillsContainer.appendChild(skillDiv);
  });
}

// ================= PROJECTS DATA =================
const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "A responsive and modern portfolio website built using HTML, CSS and JavaScript.",
    tags: "HTML, CSS, JavaScript"
  },
  {
    title: "Library Management System",
    description:
      "A Java-based project to manage books and users efficiently.",
    tags: "Java, MySQL"
  },
  {
    title: "AI Video Project",
    description:
      "Created AI generated videos using prompts and editing tools.",
    tags: "Prompt Engineering, CapCut, Premiere Pro"
  }

];

const projectsContainer = document.getElementById("projectsContainer");

if (projectsContainer) {
  projects.forEach((project) => {
    const card = document.createElement("div");
    card.className = "project-card";

    card.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <p class="tags"><strong>Tools:</strong> ${project.tags}</p>
    `;

    projectsContainer.appendChild(card);
  });
}

// ================= DARK MODE =================
const darkModeBtn = document.getElementById("darkModeBtn");

if (localStorage.getItem("darkMode") === "yes") {
  document.body.classList.add("dark");

  if (darkModeBtn) {
    darkModeBtn.innerHTML = "☀️ Light Mode";
  }
}

if (darkModeBtn) {
  darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      localStorage.setItem("darkMode", "yes");
      darkModeBtn.innerHTML = "☀️ Light Mode";
    } else {
      localStorage.setItem("darkMode", "no");
      darkModeBtn.innerHTML = "🌙 Dark Mode";
    }
  });
}

// ================= MOBILE MENU =================
const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");

if (menuIcon) {
  menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

// Close menu after click
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});

// ================= SMOOTH SCROLL =================
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// ================= CONTACT FORM =================
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
    const successMsg = document.getElementById("successMsg");

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMsg.textContent = "";

    let valid = true;

    if (name.value.trim() === "") {
      nameError.textContent = "Please enter your name.";
      valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.value.trim())) {
      emailError.textContent =
        "Please enter a valid email address.";
      valid = false;
    }

    if (message.value.trim().length < 10) {
      messageError.textContent =
        "Message must contain at least 10 characters.";
      valid = false;
    }

    if (valid) {
      successMsg.textContent =
        "✅ Thanks! Your message has been sent successfully.";

      contactForm.reset();
    }
  });
}

// ================= SCROLL ANIMATION =================
const sections = document.querySelectorAll(".section");

const revealSections = () => {
  sections.forEach((section) => {
    const sectionTop =
      section.getBoundingClientRect().top;

    const screenPosition =
      window.innerHeight - 100;

    if (sectionTop < screenPosition) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }
  });
};

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);

// ================= TYPING EFFECT =================
// const heroText = document.querySelector(".hero p");

// if (heroText) {
//   const text =
//     "First Year B.Tech CSE Student | Web Developer | Video Editor | Prompt Engineer";

//   let i = 0;
//   heroText.innerHTML = "";

//   function typeEffect() {
//     if (i < text.length) {
//       heroText.innerHTML += text.charAt(i);
//       i++;
//       setTimeout(typeEffect, 40);
//     }
//   }

//   window.addEventListener("load", typeEffect);
// }

// ================= ACTIVE NAVBAR LINK =================
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach((link) => {
    link.classList.remove("active");

    if (
      link.getAttribute("href") ===
      "#" + current
    ) {
      link.classList.add("active");
    }
  });
});

// ================= FOOTER YEAR =================
const footerYear =
  document.getElementById("footerYear");

if (footerYear) {
  footerYear.innerHTML =
    `© ${new Date().getFullYear()} Shivam Singh | Made with ❤️ using HTML, CSS and JavaScript`;
}

// ================= PRELOADER EFFECT =================
window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});

// ================= CONSOLE MESSAGE =================
console.log(
  "Welcome to Shivam Singh's Portfolio 🚀"
);

