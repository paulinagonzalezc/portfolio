const mobileBtn = document.getElementById("mobile-cta");
nav = document.querySelector("nav");
mobileBtnExit = document.getElementById("mobile-exit");
portfolioBtn = document.getElementById("menu-portfolio");
aboutBtn = document.getElementById("menu-about");
contactBtn = document.getElementById("menu-contact");

mobileBtn.addEventListener("click", () => {
  nav.classList.add("menu-btn");
});

mobileBtnExit.addEventListener("click", () => {
  nav.classList.remove("menu-btn");
});

portfolioBtn.addEventListener("click", () => {
  nav.classList.remove("menu-btn");
});

aboutBtn.addEventListener("click", () => {
  nav.classList.remove("menu-btn");
});

contactBtn.addEventListener("click", () => {
  nav.classList.remove("menu-btn");
});
