"use strict";

// const user = {
//   firstName: "Gogo",
//   lastName: "Michael",
//   birthyear: 1988,
//   job: "doctor",
//   friends: ["Ivan", "Sashi", "Vikki", "Moni", "Dimo"],
//   hasDriveingLicense: true,

//   calcAge: function () {
//     console.log(this);
//     return 2022 - this.birthyear;
//   },
//   getSummary: function () {
//     return `${this.firstName} ${
//       this.lastName
//     } is ${this.calcAge()} years old and works as a ${this.job}, and has ${
//       this.hasDriveingLicense ? "a" : "no"
//     } driver's license.`;
//   },
// };

// console.log(user.calcAge());
// console.log(user.getSummary());

///////////////////////////////////
// Chalange 3:
// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,

//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,

//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// const result =
//   john.calcBMI() > mark.calcBMI()
//     ? console.log(
//         `${john.fullName}'s BMI (${john.calcBMI().toFixed(2)}) is higher than ${
//           mark.fullName
//         }'s (${mark.calcBMI().toFixed(2)})`
//       )
//     : console.log(
//         `${mark.fullName}'s BMI (${mark.calcBMI().toFixed(2)}) is higher than ${
//           john.fullName
//         }'s (${john.calcBMI().toFixed(2)})`
//       );

//////////////////////////////////
// Chalange 4:

const bills4 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips4 = [];
const totals4 = [];

const calcTip4 = function (bill) {
  return bill > -50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

bills4.forEach((bill) => {
  const tip = calcTip4(bill);
  tips4.push(tip);
  const total = tip + bill;
  totals4.push(total);
});
const reducer4 = (prev, curr) => prev + curr;
console.log(`The total bill is: ${totals4.reduce(reducer4).toFixed(2)}`);
console.log(
  `The agverage bill is: ${totals4.reduce(reducer4).toFixed() / totals4.length}`
);
