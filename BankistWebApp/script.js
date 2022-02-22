'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

////////////////////////////////////////////////////////////////////
// Selecting DOM elements:
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

const header = document.querySelector('.header');
// Select section => Node list:
const allSections = document.querySelectorAll('.section');

// Select => HtmlCollection = live collection:
const allButtons = document.getElementsByTagName('button');
//console.log(document.getElementsByClassName('btn'));

////////////////////////////////////////////////////////////////////////
// Creating and inserting elements:
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'We are using cookies. <button class="btn btn--close-cookie">Got it!</button>';

header.append(message);

////////////////////////////////////////////////////////////////////////
// Deleting elements:
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

// Adding Styles:
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// Attributes:
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.getAttribute('src')); //Same, but relative path
// console.log(logo.className);

// // Set/add new attribute: company with value: Bankist:
// logo.setAttribute('company', 'Bankist');

// // Data attributes example:
// console.log(logo.dataset.versionNumber);

// // Classes:
// logo.classList.add('c');
// logo.classList.remove('c');
// logo.classList.toggle('c');
// logo.classList.contains('c');

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  section1.scrollIntoView({ behavior: 'smooth' });
});
