const promptMaxNumber = parseInt(prompt("Enter the max number: "));
let guessNumber = parseInt(prompt("Enter your guess number: "));

const randomNumber = Math.trunc(Math.random() * promptMaxNumber) + 1;
let numberOfGuesses = 0;

while (numberOfGuesses < 10) {
  if (isNaN(guessNumber) || guessNumber < 0 || guessNumber > promptMaxNumber) {
    guessNumber = parseInt(prompt("Enter a valid number"));
  }

  console.log(`Your guess number is: ${guessNumber}`);

  numberOfGuesses++;

  if (guessNumber === randomNumber) break;

  if (guessNumber > randomNumber) {
    guessNumber = parseInt(prompt("Enter a lower guess number: "));
  }

  if (guessNumber < randomNumber) {
    guessNumber = parseInt(prompt("Enter a higher guess number: "));
  }
}

if (guessNumber === randomNumber) {
  console.log(
    `You guess the number: ${randomNumber} in ${numberOfGuesses} attempts.`
  );
} else {
  console.log(
    `You did NOT guess the number ${randomNumber} in ${numberOfGuesses} attempts.`
  );
  console.log(`The random number is: ${randomNumber}`);
}
