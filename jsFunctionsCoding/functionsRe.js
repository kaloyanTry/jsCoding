function calcAge(birthyear) {
  return 2022 - birthyear;
}

const consoleAge = calcAge(1978);
console.log(consoleAge);

const calcAgeDecl = function (birthyear) {
  return 2022 - birthyear;
};

const consoleAgeDecl = calcAgeDecl(1983);
console.log(consoleAgeDecl);

const calcAgeArrow = (birthyear) => 2022 - birthyear;
console.log(calcAgeArrow(2011));
