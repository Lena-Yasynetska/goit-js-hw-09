const submitBtm = document.querySelector("button[type='submit']");
const amountInput = document.querySelector("input[name='amount']");
const stepInput = document.querySelector("input[name='step']");

const submitBtmText = submitBtm.textContent;
const delay = amountInput.textContent;

submitBtm.addEventListener("click", createPromise);

let i = 0;
let position = 0;

function createPromise(position, delay) {
  for (let i = 0; i <= submitBtmText; i++) {
     const shouldResolve = Math.random() > 0.3;
     return new Promise((resolve, reject) => {
         position += 1
         setTimeout(() => {
          if (shouldResolve) {
          resolve("Success! Value passed to resolve function");
          } else {
          reject("Error! Error passed to reject function");
          }
       }, delay)
      })
  }
};

createPromise(2, 1500)
   .then(({ position, delay }) => {
    console.log(`✅  Fulfilled promise ${position} in ${delay}ms`);
   })
   .catch(({ position, delay }) => {
    console.log(`❌  Rejected promise ${position} in ${delay}ms`);
   })