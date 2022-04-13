const budget = [
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
];

const spendingLimits = {
  jonas: 1500,
  matilda: 100,
};

// const limit = spendingLimits[user] ? spendingLimits[user] : 0;
// optional chainings since 2020 and very popular practice now:
// const limit = spendingLimits?.[user] ?? 0; //here make function DRY
const getLimit = user => spendingLimits?.[user] ?? 0;

const addExpenses = function (value, description, user = 'jonas') {
  user = user.toLowerCase();

  if (value <= getLimit(user)) {
    budget.push({ value: -value, description, user });
  }
};
addExpenses(10, 'Pizza 🍕');
addExpenses(100, 'Going to movies 🍿', 'Matilda');
addExpenses(200, 'Stuff', 'Jay');
console.log(budget);

const checkExpenses = function () {
  for (let entry of budget)
    if (entry.value < -getLimit(getLimit(entry.user))) entry.flag = 'limit';
};
checkExpenses();

console.log(budget);

const logBigExpenses = function (bigLimit) {
  let output = '';
  for (var entry of budget)
    output +=
      entry.value <= -bigLimit ? `${entry.description.slice(-2)} + / ` : '';

  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};

console.log(budget);
logBigExpenses(1000);
