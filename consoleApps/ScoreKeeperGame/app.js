const displayPl1 = document.querySelector("#displayPl1");
const displayPl2 = document.querySelector("#displayPl2");
const btnPl1 = document.querySelector("#btnPl1");
const btnPl2 = document.querySelector("#btnPl2");
const btnReset = document.querySelector("#btnReset");
const selectScore = document.querySelector("#selectScore");

let scorePl1 = 0;
let scorePl2 = 0;
let winningScore = 5;
let isGameOver = false;

const reset = function () {
  isGameOver = false;
  scorePl1 = 0;
  scorePl2 = 0;
  displayPl1.textContent = 0;
  displayPl2.textContent = 0;
  displayPl1.classList.remove("winner", "looser");
  displayPl2.classList.remove("winner", "looser");
};

selectScore.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset();
});

btnPl1.addEventListener("click", function () {
  if (!isGameOver) {
    scorePl1 += 1;
    displayPl1.textContent = scorePl1;

    if (scorePl1 === winningScore) {
      isGameOver = true;
      displayPl1.classList.add("winner");
      displayPl2.classList.add("looser");
    }
  }
});

btnPl2.addEventListener("click", function () {
  if (!isGameOver) {
    scorePl2 += 1;
    displayPl2.textContent = scorePl2;

    if (scorePl2 === winningScore) {
      isGameOver = true;
      displayPl2.classList.add("winner");
      displayPl1.classList.add("looser");
    }
  }
});

btnReset.addEventListener("click", reset);
