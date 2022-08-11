const btn = document.querySelector("button");

btn.addEventListener("click", function (ev) {
  console.log(ev);
});

const input = document.querySelector("input");
input.addEventListener("keydown", function (e) {
  console.log(e.key);
  console.log(e.code);
});
