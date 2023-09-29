import { flatpickr } from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const btnStart = document.querySelector('[data-start]');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');
const input = document.querySelector('#datetime-input');
console.log(btnStart);
console.log(minutes);

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDats) {
       const selectedDate = selectedDates[0].getTime();
       const currentDate = Date.now();
       if (selectedDate <= currentDate) {
        alert('Please choose a date in the future');
        inputDate._flatpickr.setDate(new Date());
       } else {
        startBtn.disabled = false;
       }
    },
};
