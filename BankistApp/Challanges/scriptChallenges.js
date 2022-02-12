const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages.map(age => (age <= 2 ? age * 2 : 16 + age * 4));
//   console.log(humanAges);

//   // Filter humanAges > 18:
//   const adults = humanAges.filter(age => age >= 18);
//   console.log(adults);

//   // const averageAge = adults.reduce((acc, age) => acc + age, 0) / adults.length;
//   // return averageAge;
//   // Full reduce method use case:
//   const avrg = adults.reduce((acc, age, _i, arr) => acc + age / arr.length, 0);
//   return avrg;
// };
// const calc1 = calcAverageHumanAge(data1).toFixed(2);
// const calc2 = calcAverageHumanAge(data2).toFixed(2);

// console.log(calc1, calc2);

const calcAgesChaining = ages =>
  ages
    .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, _i, arr) => acc + age / arr.length, 0);

const calcChain1 = calcAgesChaining(data1);
const calcChain2 = calcAgesChaining(data2);
console.log(calcChain1, calcChain2);
