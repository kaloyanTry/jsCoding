const clock = () => {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  if (hours === 24) hours = 0;
  if (hours > 24) hours -= 24;

  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  let time = `${hours}:${minutes}:${seconds}`;

  document.querySelector('main').textContent = time;
  setTimeout(clock, 1000);
};
clock();
