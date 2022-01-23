"use strict";

// const friends = ["Maria", "Ivan", "Alex", "Nikko", "Misho"];
// console.log(`Firends: ${friends}`);

// const arrLength = friends.length;
// console.log(`The length of the frieands array is: ${arrLength}`);

// friends.push("Jason");
// console.log(`Now they are ${friends}`);

// friends.shift(); // remove the first
// friends.pop(); // remove the last
// console.log(`Now they are ${friends}`);

// friends.push("Britney");

// console.log(friends.includes("Jason"));
// console.log(friends.includes("Ivan"));

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const bills = [125, 555, 44];
const tips = [];

bills.forEach((bill) => {
  const tip = calcTip(bill);
  tips.push(tip);
  console.log(bill);
  console.log(tip);
});

const reducer = (prev, curr) => prev + curr;

const totalTips = tips.reduce(reducer);
const totalBills = bills.reduce(reducer);

console.log(totalTips);
console.log(totalBills);
console.log(`The total sum is = ${totalTips + totalBills}`);
