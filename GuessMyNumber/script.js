'use strict';

let secretNumber = Math.trunc(Math.random() * 100) + 1;
let score = 0;
let highScore = 0;

const number = document.querySelector('.number');
let currentScore = document.querySelector('.score');
