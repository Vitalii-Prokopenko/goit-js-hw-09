const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

let intervalChangeColor = null;
let isColorSwitcherActive = false;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const handleStartClick = () => {
  if (isColorSwitcherActive) {
    return;
  }

  intervalChangeColor = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  isColorSwitcherActive = true;
};

const handleStopClick = () => {
  clearInterval(intervalChangeColor);
};

refs.startBtn.addEventListener('click', handleStartClick);
refs.stopBtn.addEventListener('click', handleStopClick);
