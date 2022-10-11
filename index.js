const mobileBtn = document.getElementById('mobile-cta');
const nav = document.querySelector('nav');
const mobileBtnExit = document.getElementById('mobile-exit');
const portfolioBtn = document.getElementById('menu-portfolio');
const aboutBtn = document.getElementById('menu-about');
const contactBtn = document.getElementById('menu-contact');

mobileBtn.addEventListener('click', () => {
  nav.classList.add('menu-btn');
});

mobileBtnExit.addEventListener('click', () => {
  nav.classList.remove('menu-btn');
});

portfolioBtn.addEventListener('click', () => {
  nav.classList.remove('menu-btn');
});

aboutBtn.addEventListener('click', () => {
  nav.classList.remove('menu-btn');
});

contactBtn.addEventListener('click', () => {
  nav.classList.remove('menu-btn');
});
