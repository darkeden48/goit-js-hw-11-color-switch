const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

const body = document.querySelector("body");
const buttonStart = document.querySelector(".start");
const buttonStop = document.querySelector(".stop");

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let timerId=0;

const toStart = () => {
  buttonStart.setAttribute('disabled', true);
  timerId = setInterval(() => {
    body.style.backgroundColor=colors[randomIntegerFromInterval(0, colors.length-1)]
    console.log(body.style.backgroundColor)
  }, 1000);
};

const toStop = () => {
  clearInterval(timerId);
  buttonStart.removeAttribute('disabled');
};

buttonStart.addEventListener('click',toStart);
buttonStop.addEventListener('click',toStop);




 