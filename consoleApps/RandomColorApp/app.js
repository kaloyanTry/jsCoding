const btn = document.querySelector("button");
const h1 = document.querySelector("h1");

const makeRandomColor = () => {
  h1.style.color = "";

  const r = Math.trunc(Math.random() * 255);
  const g = Math.trunc(Math.random() * 255);
  const b = Math.trunc(Math.random() * 255);

  if (r <= 90 && g <= 90 && b <= 90) {
    h1.style.color = "#f2f4f4";
  }

  return `rgb(${r}, ${g}, ${b})`;
};

btn.addEventListener("click", function () {
  const newColour = makeRandomColor();
  document.body.style.backgroundColor = newColour;
  h1.innerHTML = newColour;
});
