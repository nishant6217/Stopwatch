// fetching elements from html file using 
// we are using const because it can't be changed later once initialized
const tensItem = document.querySelector(".tens");
const secondsItem = document.querySelector(".seconds");
const minutesItem = document.querySelector(".minutes");
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const resetBtn = document.querySelector("#reset");


// initial values of seconds , tens , minutes of the stopwatch
// interval will be used for setting and craeting interval
let seconds = 0;
let tens = 0;
let minutes = 0;
let interval;


// function used for starting stopwatch .
function startWatch() {
  tens++;

  if (tens < 9) {
    tensItem.innerHTML = "0" + tens;
  }
  if (tens > 9) {
    tensItem.innerHTML = tens;
  }
  if (tens > 99) {
    seconds++;
    secondsItem.innerHTML = "0" + seconds;
    tens = 0;
    tensItem.innerHTML = "0" + tens;
  }
  if (seconds > 9) {
    secondsItem.innerHTML = seconds;
  }
  if (seconds > 59) {
    minutes++;
    minutesItem.innerHTML = "0" + minutes;
    seconds = 0;
    secondsItem.innerHTML = "0" + seconds;
  }
  if (minutes > 9) {
    minutesItem.innerHTML = minutes;
  }
}

// adding event listener to start button
startBtn.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(startWatch);
});

// adding event listener to stop button
stopBtn.addEventListener("click", () => {
  clearInterval(interval);
});

// adding event listener to reset button
resetBtn.addEventListener("click", () => {
  clearInterval(interval);
  tens = "00";
  seconds = "00";
  minutes = "00";
  tensItem.innerHTML = tens;
  secondsItem.innerHTML = seconds;
  minutesItem.innerHTML = minutes;
});
