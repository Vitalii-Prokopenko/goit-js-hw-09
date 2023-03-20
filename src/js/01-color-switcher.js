const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

let intervalChangeColor = null;
refs.stopBtn.setAttribute('disabled', '');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const handleStartClick = () => {
  refs.startBtn.setAttribute('disabled', '');
  refs.stopBtn.removeAttribute('disabled');
  intervalChangeColor = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
};

const handleStopClick = () => {
  clearInterval(intervalChangeColor);
  refs.startBtn.removeAttribute('disabled');
  refs.stopBtn.setAttribute('disabled', '');
};

refs.startBtn.addEventListener('click', handleStartClick);
refs.stopBtn.addEventListener('click', handleStopClick);
