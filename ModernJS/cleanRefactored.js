"strict mode";

const budget = Object.freeze([
  { value: 250, description: "Sold old TV 📺", user: "jonas" },
  { value: -45, description: "Groceries 🥑", user: "jonas" },
  { value: 3500, description: "Monthly salary 👩‍💻", user: "jonas" },
  { value: 300, description: "Freelancing 👩‍💻", user: "jonas" },
  { value: -1100, description: "New iPhone 📱", user: "jonas" },
  { value: -20, description: "Candy 🍭", user: "matilda" },
  { value: -125, description: "Toys 🚂", user: "matilda" },
  { value: -1800, description: "New Laptop 💻", user: "jonas" },
]);

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

const getLimits = (limits, user) => limits?.[user] ?? 0;

const addExpense = function (
  state,
  limits,
  value,
  description,
  user = "jonas"
) {
  const formatedUser = user.toLowerCase();
  return value <= getLimits(limits, formatedUser)
    ? [...state, { value: -value, description, user: formatedUser }]
    : state;
};

const updatedBudget1 = addExpense(budget, spendingLimits, 10, "Pizza 🍕");
const updatedBudget2 = addExpense(
  budget,
  spendingLimits,
  100,
  "Going to movies 🍿",
  "Matilda"
);
const updatedBudget3 = addExpense(budget, spendingLimits, 200, "Stuff", "Jay");

const checkExpenses = function (state, limits) {
  state.map((entry) =>
    entry.value < -getLimits(limits, entry.user)
      ? { ...entry, flag: "limit" }
      : entry
  );
};

const finalBudget = checkExpenses(updatedBudget3, spendingLimits);
console.log(finalBudget);

const logBigExpenses = function (state, bigLimit) {
  const bigExpenses = sstate
    .filter((entry) => entry.value <= -bigLimit)
    .map((entry) => entry.description.slice(-2))
    .join(" / ");

  console.log(bigExpenses);
};

logBigExpenses(finalBudget, 500);
