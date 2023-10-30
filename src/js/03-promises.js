// import throttle  from "lodash.throttle";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const userDate = {};

const formEl = document.querySelector('.form');

formEl.addEventListener('input', throttle(onInput, 500));
formEl.addEventListener('submit', onSubmit);

//-------function for submit button----------
function onSubmit(event) {
event.preventDefault();

for (let i = 0; i < userDate.amount; i += 1){
const stepDelay = userDate.delay + userDate.step * i;

createPromise(i + 1, stepDelay)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
}
}
//-------------------------------------------
function createPromise(positionDate, delayDate) {
  return new Promise((resolve, reject) => {
    setTimeout((delay) => {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
  resolve({position: positionDate, delay: delayDate})
  } else {
    reject({position: positionDate, delay: delayDate})
  }
}, delayDate)
})
}

function onInput(event) {
if (event.target.name === 'delay') {
    userDate.delay = +(event.target.value);
}
if (event.target.name === 'step') {
  userDate.step = +(event.target.value);
}
if (event.target.name === 'amount') {
  userDate.amount = +(event.target.value);
}
}

// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// //import { throttle }  from "lodash";

// const formRef = document.querySelector('.form');

// formRef.addEventListener('submit', onSubmitForm);

// function onSubmitForm(event) {
// event.preventDefault();
// let firstDelay = Number(document.querySelector('.first-delay').value);
// let delayStep = Number(document.querySelector('.delay-step').value); 
// let qAmount = Number(document.querySelector('.amount').value);

// for (let i = 1; i <= qAmount; i += 1) {
//     createPromise(i, firstDelay)
//       .then(({ position, delay }) => {
//         Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
//       })
//       .catch(({ position, delay }) => {
//         Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
//       });
//     firstDelay += delayStep;
//   }
// }

// function createPromise(position, delay) {
//   return new Promise((resolve, reject) => {
//     const shouldResolve = Math.random() > 0.3;
//       setTimeout(() => {
//         if (shouldResolve) {
//               resolve({ position, delay });
//          } else {
//               reject({ position, delay });
//             }
//           }, delay);
//         });
// }
