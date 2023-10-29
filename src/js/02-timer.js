import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { convertMs } from "../helpers/02-time";

const timerDays = document.querySelector('[data-days]');
const timerHours = document.querySelector('[data-hours]');
const timerMin = document.querySelector('[data-minutes]');
const timerSec = document.querySelector('[data-seconds]');
const inputEl = document.querySelector('#datetime-picker');
const startEl = document.querySelector('[data-start]');

startEl.disabled = true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,

    onClose(selectedDates) {
        // console.log(selectedDates[0]);
      if (selectedDates[0] < Date.now()) {
        alert('Please choose a date in the future')
      } else {
        startEl.disabled = false;
      }
    },
  };

  startEl.addEventListener('click', onStart);
    
  function onStart() {
    startEl.disabled = true;
    inputEl.disabled = true;

    const IntId = setInterval(() => {
    const currentDate = Date.now();
    const selectetDate = new Date(inputEl.value);
    const difference = selectetDate - currentDate;

    if (difference < 1000) {
        clearInterval(IntId);
    }

        const timer = convertMs(difference);

        timerDays.textContent = timer.days.toString().padStart(2, 0);
        timerHours.textContent = timer.hours.toString().padStart(2, 0);
        timerMin.textContent = timer.minutes.toString().padStart(2, 0);
        timerSec.textContent = timer.seconds.toString().padStart(2, 0);
    }, 1000)
}

flatpickr(inputEl, options);



// import flatpickr from "flatpickr";
// import "flatpickr/dist/flatpickr.min.css";
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// const btnStart = document.querySelector('[data-start]');
// const days = document.querySelector('[data-days]');
// const hours = document.querySelector('[data-hours]');
// const minutes = document.querySelector('[data-minutes]');
// const seconds = document.querySelector('[data-seconds]');
// const input = document.querySelector('#datetime-input');
// // console.log(btnStart);
// // console.log(minutes);

// let countdownInterval; 
// btnStart.setAttribute("disabled", true);

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,

//   onClose(selectedDates) {
//     const selectedDate = selectedDates[0];

//     if (selectedDate > Date.now()) {
//       btStart.removeAttribute('disabled');
//     } else {
//       Notify.failure('Please choose a date in the future');
//     }
//   },
// };

// const calendar = flatpickr(inputTime, options);

// btnStart.addEventListener('click', () => {
//   const selectedDate = calendar.selectedDates[0];

//   if (selectedDate > Date.now()) {
//     const timeDiff = selectedDate - Date.now();
//     startCountdown(timeDiff);
//   } else {
//     Notify.failure('Please choose a date in the future');
//   }
// });

// function startCountdown(ms) {
//   if (countdownInterval) {
//     clearInterval(countdownInterval);
//   }

//   countdownInterval = setInterval(() => {
//     const { days, hours, minutes, seconds } = convertMs(ms);

//     timeDays.textContent = addLeadingZero(days);
//     timeHours.textContent = addLeadingZero(hours);
//     timeMinutes.textContent = addLeadingZero(minutes);
//     timeSeconds.textContent = addLeadingZero(seconds);

//     if (ms <= 0) {
//       clearInterval(countdownInterval);
//       alert("Countdown has finished!");
//     } else {
//       ms -= 1000; 
//     }
//   }, 1000);
// }

// function convertMs(ms) {
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   const days = Math.floor(ms / day);
//   const hours = Math.floor((ms % day) / hour);
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }

// function addLeadingZero(value) {
//   return value < 10 ? `0${value}` : value.toString();
// }
