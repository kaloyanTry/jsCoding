'strict mode';

const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

// makes object immutable: Object.freeze:
const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

// const limit = spendingLimits[user] ? spendingLimits[user] : 0;
// optional chainings since 2020 and very popular practice now:
// const limit = spendingLimits?.[user] ?? 0; //here make function DRY
const getLimit = (limits, user) => spendingLimits?.[user] ?? 0;

// Pure function: contamproary fashion way of doing things in JS:
const addExpenses = function (
  state,
  limits,
  value,
  description,
  user = 'jonas'
) {
  const cleanUser = user.toLowerCase();
  // budget.push({ value: -value, description, user: cleanUser });
  // the new way of doing the same:
  return value <= getLimit(limits, cleanUser)
    ? [...state, { value: -value, description, user: cleanUser }]
    : state;
};

const budget1 = addExpenses(budget, spendingLimits, 10, 'Pizza 🍕');
const budget2 = addExpenses(
  budget1,
  spendingLimits,
  100,
  'Going to movies 🍿',
  'Matilda'
);
const budget3 = addExpenses(budget2, spendingLimits, 200, 'Stuff', 'Jay');

const checkExpenses = function (state, limits) {
  return state.map(entry => {
    return entry.value < -getLimit(limits, entry.user)
      ? { ...entry.value, flag: 'limit' }
      : entry;
  });
};
const finalBudget = checkExpenses(budget3, spendingLimits);
console.log(finalBudget);

const logBigExpenses = function (state, bigLimit) {
  const bigExpenses = state
    .filter(entry => entry.value <= -bigLimit)
    .map(entry => entry.description.slice(-2))
    .join(' / ');
  console.log(bigExpenses);
};

logBigExpenses(finalBudget, 500);
