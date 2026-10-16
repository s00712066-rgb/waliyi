const body = document.body;

const hamburger = document.querySelector(".hamburger");
const sideNav = document.querySelector(".sideNav");
const cancel = document.querySelector(".cancel");

const sideLinks = document.querySelectorAll(".sideNav a");

const themeButtons = document.querySelectorAll(".theme-toggle");


// =========================
// MOBILE NAVIGATION
// =========================

hamburger.addEventListener("click", () => {
  sideNav.classList.add("active");
});


cancel.addEventListener("click", () => {
  sideNav.classList.remove("active");
});


sideLinks.forEach((link) => {

  link.addEventListener("click", () => {
    sideNav.classList.remove("active");
  });

});


// =========================
// DARK / LIGHT MODE
// =========================

function updateThemeButtons() {

  const darkMode = body.classList.contains("dark");

  themeButtons.forEach((button) => {

    if (darkMode) {
      button.textContent = "☀️ Light Mode";
    } else {
      button.textContent = "🌙 Dark Mode";
    }

  });

}


// =========================
// LOAD SAVED THEME
// =========================

const savedTheme = localStorage.getItem("vos-theme");

if (savedTheme === "dark") {

  body.classList.add("dark");

}

updateThemeButtons();


// =========================
// TOGGLE THEME
// =========================

themeButtons.forEach((button) => {

  button.addEventListener("click", () => {

    body.classList.toggle("dark");

    const darkMode = body.classList.contains("dark");

    if (darkMode) {

      localStorage.setItem("vos-theme", "dark");

    } else {

      localStorage.setItem("vos-theme", "light");

    }

    updateThemeButtons();

  });

});


// =========================
// ESCAPE KEY
// =========================

document.addEventListener("keydown", (event) => {

  if (event.key === "Escape") {

    sideNav.classList.remove("active");

  }

});