import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('.form'),
  submitBtn: document.querySelector('button'),
};

function createPromise(position, delay) {
  return (newPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  }));
}

// Function to markup messages html

function markupMessage(number, message, color) {
  const promiseMessage = document.createElement('div');
  markupOfPromiseMessage = `<div data-position="${number}">${message}</div>`;
  refs.form.insertAdjacentHTML('beforeend', markupOfPromiseMessage);
  const messageBox = document.querySelector(`div[data-position="${number}"`);

  messageBox.style.backgroundColor = color;
  messageBox.style.color = 'white';
  messageBox.style.width = '270px';
  messageBox.style.height = '25px';
  messageBox.style.borderRadius = '5px';
  messageBox.style.marginTop = '10px';
  messageBox.style.textAlign = 'center';
}

// Function to make messages with Notiflix

function makeNotification(isSuccess, message) {
  if (isSuccess) {
    Notify.success(message);
  } else {
    Notify.failure(message);
  }
}

// Function to handle submit event

const handleSubmit = event => {
  event.preventDefault();

  const {
    elements: { delay, step, amount },
  } = event.currentTarget;

  const numberOfPromises = Number(amount.value);
  const firstDelay = Number(delay.value);
  const stepOfNextDelays = Number(step.value);

  let delayOfPromise = 0;
  let markupOfPromiseMessage = '';

  for (let i = 1; i <= numberOfPromises; i += 1) {
    if (i === 1) {
      delayOfPromise = firstDelay;
    } else {
      delayOfPromise = firstDelay + (i - 1) * stepOfNextDelays;
    }

    createPromise(i, delayOfPromise)
      .then(value => {
        markupMessage(i, value, 'green');
        makeNotification(true, value);
      })
      .catch(error => {
        markupMessage(i, error, 'red');
        makeNotification(false, error);
      });
  }
};

refs.form.addEventListener('submit', handleSubmit);
