let input = prompt("What do you like to do?");
const todosArray = ["Get up", "Stand up", "Make sport", "Chill out"];

while (input !== "quit" && input !== "q") {
  if (input === "list") {
    let ind = 1;
    console.log("******************");
    todosArray.forEach((el, index) => {
      console.log(`${index}. ${el}`);
    });
    console.log("******************");
  }
  if (input === "new") {
    const newTodo = prompt("OK. What is the new to do:");
    todosArray.push(newTodo);
    console.log(`${newTodo} added to the list.`);
  }
  if (input === "del") {
    const inputIndex = parseInt(prompt("Enter the index you like to delete:"));
    if (!Number.isNaN(inputIndex)) {
      const deletedTodo = todosArray.splice(inputIndex, 1);
      console.log(`You deleted ${deletedTodo} from the list.`);
    } else {
      console.log("Unknown index. Enter a valid one:");
    }
  }
  input = prompt("What do you like to do?");
}

console.log("OK. Quit the app.");
