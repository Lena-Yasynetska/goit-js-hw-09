const body = document.querySelector("body");
const start = document.querySelector("[data-start]");
const stop = document.querySelector("[data-stop");

console.log(stop);
body.addEventListener("click", colorChange);

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

function colorChange(e) {
    if (e.target = start) {
        return start.setAttribute('disable', 'true');
    }
    if (e.target = stop) {
        return stop.setAttribute('disable', 'true');
    }
}