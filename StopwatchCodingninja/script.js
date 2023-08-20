const display = document.querySelector('.display');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

let timer;
let startTime;
let elapsedTime = 0;
let running = false;

function startTimer() {
  if (!running) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(updateDisplay, 10);
    running = true;
    startButton.textContent = 'Pause';
  } else {
    clearInterval(timer);
    running = false;
    startButton.textContent = 'Resume';
  }
}

function stopTimer() {
  if (running) {
    clearInterval(timer);
    running = false;
    startButton.textContent = 'Start';
  }
}

function resetTimer() {
  clearInterval(timer);
  running = false;
  elapsedTime = 0;
  display.textContent = '00:00:00';
  startButton.textContent = 'Start';
}

function updateDisplay() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  const formattedTime = formatTime(elapsedTime);
  display.textContent = formattedTime;
}

function formatTime(milliseconds) {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return `${padTime(hours)}:${padTime(minutes)}:${padTime(seconds)}`;
}

function padTime(value) {
  return value.toString().padStart(2, '0');
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
