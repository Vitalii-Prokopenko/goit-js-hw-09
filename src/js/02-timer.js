import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
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

console.log(refs.timerFields);
console.log(refs.timerBox.style);

// Inline styles for timer
// const timerStyles = {
//   display: 'grid',
//   gridTemplateColumns: 'repeat(4, 100px)',
//   gridAutoRows: '40px',
//   columnGap: '40px',
// };

// refs.timerBox.style = timerStyles;

refs.timerBox.style.display = 'flex';
refs.timerBox.style.justifyContent = 'flex-start';
refs.timerBox.style.gap = '20px';
refs.timerBox.style.marginTop = '40px';

refs.timerFields.forEach(timerField => {
  timerField.style.display = 'flex';
  timerField.style.flexDirection = 'column';
  timerField.style.textAlign = 'center';
  timerField.firstElementChild.style.fontWeight = '600';
  timerField.firstElementChild.style.fontSize = '50px';
  timerField.lastElementChild.style.fontSize = '30px';
});
