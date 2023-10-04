import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const btnStart = document.querySelector('[data-start]');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');
const input = document.querySelector('#datetime-input');
// console.log(btnStart);
// console.log(minutes);

let countdownInterval; 
btnStart.setAttribute("disabled", true);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    const selectedDate = selectedDates[0];

    if (selectedDate > Date.now()) {
      btStart.removeAttribute('disabled');
    } else {
      Notify.failure('Please choose a date in the future');
    }
  },
};

const calendar = flatpickr(inputTime, options);

btnStart.addEventListener('click', () => {
  const selectedDate = calendar.selectedDates[0];

  if (selectedDate > Date.now()) {
    const timeDiff = selectedDate - Date.now();
    startCountdown(timeDiff);
  } else {
    Notify.failure('Please choose a date in the future');
  }
});

function startCountdown(ms) {
  if (countdownInterval) {
    clearInterval(countdownInterval);
  }

  countdownInterval = setInterval(() => {
    const { days, hours, minutes, seconds } = convertMs(ms);

    timeDays.textContent = addLeadingZero(days);
    timeHours.textContent = addLeadingZero(hours);
    timeMinutes.textContent = addLeadingZero(minutes);
    timeSeconds.textContent = addLeadingZero(seconds);

    if (ms <= 0) {
      clearInterval(countdownInterval);
      alert("Countdown has finished!");
    } else {
      ms -= 1000; 
    }
  }, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value < 10 ? `0${value}` : value.toString();
}
