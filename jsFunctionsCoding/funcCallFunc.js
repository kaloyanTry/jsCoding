"use strict";
///////////////////////////////////////
// const cutFruit = function (fruit) {
//   return fruit * 4;
// };

// const fruitJuice = function (apple, orange) {
//   const appleJuice = cutFruit(apple);
//   const orangeJuice = cutFruit(orange);

//   const juice = `You got a juice made from ${appleJuice} apples and ${orangeJuice} oranges`;

//   return juice;
// };

// console.log(fruitJuice(4, 6));
////////////////////////////////////////
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const calcTeam1 = calcAverage(44, 23, 71);

const calcTeam2 = calcAverage(165, 154, 149);

const checkWinner = function (team1, team2) {
  if (team1 > team2) {
    console.log(`(Koalas win ${team1} vs ${team2})`);
  } else if (team2 > team1) {
    console.log(`(Dolphins win ${team2} vs ${team1})`);
  } else {
    console.log("No team wins.");
  }
};

checkWinner(calcTeam1, calcTeam2);

// const checkWinner2 =
//   calcTeam1 > calcTeam2
//     ? console.log(`(Koalas win ${calcTeam1} vs ${calcTeam2})`)
//     : console.log(`(Dolphins win ${calcTeam2} vs ${calcTeam1})`);
