# goit-js-hw-11-color-switch

  const bodySite=document.querySelector('body');
  const buttonStart=document.querySelector('.start');
  const buttonStop=document.querySelector('.stop');
  
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

  let currentColor,
  newColor = "#FFFFFF";
  let timerId=0;


  buttonStart.addEventListener("click", changeColor);
    function changeColor() {
        buttonStart.setAttribute('disabled', true);
        currentColor = newColor;
    timerId = setInterval(() => {
    do {
        newColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
      } while (newColor === currentColor);
      bodySite.style.backgroundColor = newColor;
      currentColor = newColor;
    }, 1000);};


buttonStop.addEventListener("click", () => {
  buttonStart.removeAttribute('disabled');
    clearInterval(timerId);
    timerId=0;
  });