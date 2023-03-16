import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  datePicker: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
  daysLeft: document.querySelector('span[data-days]'),
  hoursLeft: document.querySelector('span[data-hours]'),
  minutesLeft: document.querySelector('span[data-minutes]'),
  secondsLeft: document.querySelector('span[data-seconds]'),
  timerBox: document.querySelector('.timer'),
  timerFields: document.querySelectorAll('.field'),
};

// INLINE STYLES

// Inline styles for date picker

refs.datePicker.style.height = '40px';
refs.datePicker.style.borderRadius = '10px';
refs.datePicker.style.borderColor = 'teal';
refs.datePicker.style.color = 'blue';
refs.datePicker.style.textAlign = 'center';

// Inline styles for start button

refs.startBtn.style.border = 'none';
refs.startBtn.style.borderRadius = '10px';
refs.startBtn.style.width = '100px';
refs.startBtn.style.height = '40px';
refs.startBtn.style.backgroundColor = 'gray';
refs.startBtn.style.color = 'white';

// Inline styles for timer box

refs.timerBox.style.display = 'flex';
refs.timerBox.style.justifyContent = 'flex-start';
refs.timerBox.style.gap = '20px';
refs.timerBox.style.marginTop = '40px';

// Inline styles for timer fields

const fieldColors = ['#EE0034', '#FFB339', '#25CD44', '#8000FF'];
let fieldNumber = 0;

refs.timerFields.forEach(timerField => {
  timerField.style.display = 'flex';
  timerField.style.flexDirection = 'column';
  timerField.style.textAlign = 'center';
  timerField.firstElementChild.style.fontWeight = '600';
  timerField.firstElementChild.style.fontSize = '50px';
  timerField.lastElementChild.style.fontSize = '30px';
  timerField.style.color = fieldColors[fieldNumber];
  fieldNumber += 1;
});

// flatpickr options

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] < currentDate) {
      window.alert('Please choose a date in the future');
    } else {
      refs.startBtn.style.backgroundColor = 'crimson';
      refs.startBtn.addEventListener('click', handleStartBtnClick);
    }
  },
};

// function to convert milliseconds to days, hours, minutes and seconds

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// Function to handle start click

const handleStartBtnClick = event => {
  // console.log('hello');
  const selectedDate = inputDate.selectedDates[0];
  // console.log(selectedDate);
  const currentTime = Date.now();
  const deltaCountdown = convertMs(selectedDate - currentTime);
  // console.log(startCountdown);
  const timerId = setInterval(
    (countdown = timePeriod => {}),
    1000,
    deltaCountdown
  );
};

// flatpickr

const currentDate = new Date();
const inputDate = flatpickr(refs.datePicker, options);
