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

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

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
refs.startBtn.style.backgroundColor = 'crimson';

refs.startBtn.style.color = 'white';

const handleStartBtnClick = event => {
  refs.startBtn.style.backgroundColor = 'darkRed';
};

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

// flatpickr

const inputDate = flatpickr(refs.datePicker, options);
const selectedDate = inputDate.selectedDates[0];
const currentDate = new Date();

if (selectedDate < currentDate) {
  window.alert('Please choose a date in the future');
} else {
  refs.startBtn.addEventListener('click', handleStartBtnClick);
}

console.log(selectedDate);
console.log(currentDate);
console.log(selectedDate < currentDate);
