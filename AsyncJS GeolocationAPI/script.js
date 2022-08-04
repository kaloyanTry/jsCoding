'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
 <article class="country">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

// Async... await WhereAmI App:
const inputText = document.getElementById('inputName');
const btnSubmit = document.getElementById('btnSubmit');
let inputName;

const getCountry = function () {
  btnSubmit.addEventListener('click', function (e) {
    e.preventDefault();
    inputName = inputText.value;

    const whereAmI = async function (country) {
      const res = await fetch(`https://restcountries.com/v2/name/${country}`);
      const data = await res.json();
      console.log(data);
      renderCountry(data[0]);
    };
    whereAmI(`${inputName}`);

    inputText.value = '';
  });
};

getCountry();
