const refs = {
  form: document.querySelector('.form'),
  submitBtn: document.querySelector('button'),
};

function createPromise(position, delay) {
  return (newPromise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
    } else {
      reject(`❌ Rejected promise ${position} in ${delay}ms`);
    }
  }));
}

// Function to handle submit event

const handleSubmit = event => {
  event.preventDefault();

  const {
    elements: { delay, step, amount },
  } = event.currentTarget;

  console.log(delay.value);
  console.log(step.value);
  console.log(amount.value);

  const numberOfPromises = Number(amount.value);
  const firstDelay = Number(delay.value);
  const stepOfNextDelays = Number(step.value);

  let delayOfPromise;

  for (let i = 1; i <= numberOfPromises; i += 1) {
    if (i === 1) {
      delayOfPromise = firstDelay;
    } else {
      delayOfPromise = firstDelay + (i - 1) * stepOfNextDelays;
    }
    console.log(`${i} and ${delayOfPromise}`);

    createPromise(i, delayOfPromise)
      .then(value => {
        console.log(value);
      })
      .catch(error => {
        console.log(error);
      });
  }
};

refs.form.addEventListener('submit', handleSubmit);
