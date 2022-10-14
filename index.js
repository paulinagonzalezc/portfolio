const mobileBtn = document.getElementById('mobile-cta');
const nav = document.querySelector('nav');
const mobileBtnExit = document.getElementById('mobile-exit');
const portfolioBtn = document.getElementById('menu-portfolio');
const aboutBtn = document.getElementById('menu-about');
const contactBtn = document.getElementById('menu-contact');
const projectHolder = document.querySelector('.cards-container');
const email = document.getElementById('mail');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

const projects = [
  {
    index: 0,
    name: 'Multi-Post Stories0',
    title: 'Gain+Glory',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    image: './images/popup-image.png',
    technologies: ['ruby on rails', 'css', 'JavScript', 'html'],
    live: 'https://paulinagonzalezc.github.io/portfolio/',
    source: 'https://github.com/paulinagonzalezc/portfolio',
  },
  {
    index: 1,
    name: 'Multi-Post Stories1',
    title: 'Gain+Glory',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    image: './images/popup-image.png',
    technologies: ['ruby on rails', 'css', 'JavScript', 'html'],
    live: 'https://paulinagonzalezc.github.io/portfolio/',
    source: 'https://github.com/paulinagonzalezc/portfolio',
  },
  {
    index: 2,
    name: 'Multi-Post Stories',
    title: 'Gain+Glory',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    image: './images/popup-image.png',
    technologies: ['ruby on rails', 'css', 'JavScript', 'html'],
    live: 'https://paulinagonzalezc.github.io/portfolio/',
    source: 'https://github.com/paulinagonzalezc/portfolio',
  },
  {
    index: 3,
    name: 'Multi-Post Stories',
    title: 'Gain+Glory',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    image: './images/popup-image.png',
    technologies: ['ruby on rails', 'css', 'JavScript', 'html'],
    live: 'https://paulinagonzalezc.github.io/portfolio/',
    source: 'https://github.com/paulinagonzalezc/portfolio',
  },
  {
    index: 4,
    name: 'Multi-Post Stories',
    title: 'Gain+Glory',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    image: './images/popup-image.png',
    technologies: ['ruby on rails', 'css', 'JavScript', 'html'],
    live: 'https://paulinagonzalezc.github.io/portfolio/',
    source: 'https://github.com/paulinagonzalezc/portfolio',
  },
  {
    index: 5,
    name: 'Multi-Post Stories',
    title: 'Gain+Glory',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    image: './images/popup-image.png',
    technologies: ['ruby on rails', 'css', 'JavScript', 'html'],
    live: 'https://paulinagonzalezc.github.io/portfolio/',
    source: 'https://github.com/paulinagonzalezc/portfolio',
  },
];

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

const createCard = (project) => {
  const ul = document.createElement('ul');
  ul.className = 'languages';
  let liList = '';
  for (let i = 0; i < project.technologies.length; i += 1) {
    liList += `<li class="language">${project.technologies[i]}</li>`;
  }

  ul.innerHTML = liList;

  const tmp = document.createElement('div');
  tmp.appendChild(ul);
  const ulStirng = tmp.innerHTML;
  const card = `
          <div class="work-card">
            <div class="card-content">
              <h3 class="card-title1">${project.name}</h3>
              <h3 class="card-title2">${project.title}</h3>
              ${ulStirng}
              <div class="button-container">
                <button id="btn-project-${project.index}" data-modal-target="#modal" class="project-button">See Project</button>
              </div>
            </div>
          `;

  projectHolder.innerHTML += card;
};

const populatePage = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    createCard(arr[i]);
  }
};

populatePage(projects);

const openModalButtons = document.querySelectorAll('[data-modal-target]');
let closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

function setCloseModal() {
  closeModalButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const modal = button.closest('.modal');
      closeModal(modal);
    });
  });
}

openModalButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const modal = document.querySelector(button.dataset.modalTarget);
    const id = event.target.id.split('-')[2];
    const project = projects[id];
    modal.innerHTML = '';

    const html = `
    <div class="project-modal">
      <img
     id="close-project"
      class="close-project"
      src="./images/close-project.png"
      alt="close-project"
      data-close-button
    />
    <img
      id="project-image"
      class="popup-image"
      src="${project.image}"
      alt="project-image"
    />
    <h2 class="popup-title">${project.name}</h2>
    <ul class="project-languages">
    
    </ul>
    <p class="popup-description">
    ${project.description}
    </p>
    <div class="buttons-container">
    <a id="see-live" class="see-live" href="${project.live}">
    <span>See Live</span>
    <span class="see-live-span"
    ><img src="./images/seelive-icon.png" class="seelive-icon"
    /></span>
    </a>
    <a id="see-source" class="see-source" href="${project.source}">
    See Source 
    <span
    ><img
    src="./images/github-whiteicon.png"
    class="github-whiteicon"
    /></span>
    </a>
    </div>
    </div>
    `;
    modal.innerHTML += html;
    closeModalButtons = document.querySelectorAll('[data-close-button]');

    const ul = document.querySelector('.project-languages');
    ul.innerHTML = '';
    for (let i = 0; i < project.technologies.length; i += 1) {
      ul.innerHTML += `<li class="project-language">${project.technologies[i]}</li>`;
    }
    openModal(modal);
    setCloseModal();
  });
});

setCloseModal();

//Form
form.addEventListener('submit', (e) => {
  let message = '';

  function isLowerCase(input) {
    if ((input === String(input).toLowerCase()) === false) {
      message = '❗️ Please write your email in lowercase';
    }
  }
  isLowerCase(email.value);

  if (message.length > 0) {
    e.preventDefault();
    errorElement.innerText = message;
  }
});

//LOCAL STORAGE
const nameInput = document.querySelector('.name-input');
nameInput.value = JSON.parse(localStorage.getItem('form'))?.name || '';
//console.log(nameInput.value);
nameInput.addEventListener('input', (name) => {
  const objectForm = JSON.parse(localStorage.getItem('form')) || {
    name: '',
    email: '',
    message: '',
  };
  //console.log(objectForm);
  objectForm.name = name.target.value;
  localStorage.setItem('form', JSON.stringify(objectForm));
});

email.value = JSON.parse(localStorage.getItem('form'))?.email || '';
//console.log(email.value);
email.addEventListener('input', (email) => {
  const objectForm = JSON.parse(localStorage.getItem('form')) || {
    name: '',
    email: '',
    message: '',
  };
  objectForm.email = email.target.value;
  localStorage.setItem('form', JSON.stringify(objectForm));
});

const textInput = document.querySelector('.message-input');
//console.log(textInput);
textInput.value = JSON.parse(localStorage.getItem('form'))?.message || '';
//console.log(textInput.value);
textInput.addEventListener('input', (message) => {
  const objectForm = JSON.parse(localStorage.getItem('form')) || {
    name: '',
    email: '',
    message: '',
  };
  objectForm.message = message.target.value;
  //console.log(objectForm.message);
  localStorage.setItem('form', JSON.stringify(objectForm));
});
