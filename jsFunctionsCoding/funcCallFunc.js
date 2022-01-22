const cutFruit = function (fruit) {
  return fruit * 4;
};

const fruitJuice = function (apple, orange) {
  const appleJuice = cutFruit(apple);
  const orangeJuice = cutFruit(orange);

  const juice = `You got a juice made from ${appleJuice} apples and ${orangeJuice} oranges`;

  return juice;
};

console.log(fruitJuice(4, 6));
