'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

let displayNumber = document.querySelector('.number');
let displayScore = document.querySelector('.score');
let displayHighScore = document.querySelector('.highscore');

let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('🙃 No number. Enter a number');
  }

  if (guess === secretNumber) {
    displayMessage('😃 Bravo! Correct number');
    displayNumber.textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'rgb(0, 127, 0)';

    if (score > highScore) {
      highScore = score;
    }

    displayHighScore.textContent = highScore;
  }

  if (guess !== secretNumber) {
    if (score > 13) {
      displayMessage(guess > secretNumber ? '++ Too high' : '-- Too low');
      score--;
      displayScore.textContent = score;
    }

    if (score <= 13) {
      displayMessage('You lost the game. Try again');
      document.querySelector('body').style.backgroundColor =
        'rgb(128, 128, 128)';
      displayNumber.textContent = secretNumber;
      displayHighScore.textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayNumber.textContent = '?';
  displayScore.textContent = score;
  document.querySelector('.guess').value = '';
  displayMessage.textContent('Start guessing here...');
  document.querySelector('body').style.backgroundColor = 'rgb(0, 0, 255)';
});
