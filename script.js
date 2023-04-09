const pomodoroLength = document.getElementById('pomodoro-length');
const breakLength = document.getElementById('break-length');
const startBtn = document.querySelector('.start-btn');
const resetBtn = document.querySelector('.reset-btn');
const timerLabel = document.querySelector('.timer-label');
const timeLeft = document.querySelector('.time-left');

let timerInterval;
let timeInSeconds;

startBtn.addEventListener('click', startTimer);
resetBtn.addEventListener('click', resetTimer);

function startTimer() {
  let pomodoroTime = parseInt(pomodoroLength.value);
  let breakTime = parseInt(breakLength.value);

  if (startBtn.innerHTML === 'Start') {
    startBtn.innerHTML = 'Pause';
    timerLabel.innerHTML = 'Pomodoro';
    timeInSeconds = pomodoroTime * 60;
    timerInterval = setInterval(updateTimer, 1000);
  } else {
    startBtn.innerHTML = 'Start';
    clearInterval(timerInterval);
  }

  function updateTimer() {
    let minutes = Math.floor(timeInSeconds / 60);
    let seconds = timeInSeconds % 60;
    timeLeft.innerHTML = `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    timeInSeconds--;

    if (timeInSeconds < 0) {
      clearInterval(timerInterval);
      timeInSeconds = breakTime * 60;
      timerLabel.innerHTML = 'Break';
      timerInterval = setInterval(updateTimer, 1000);
    }
  }
}

function resetTimer() {
  clearInterval(timerInterval);
  startBtn.innerHTML = 'Start';
  timerLabel.innerHTML = 'Pomodoro';
  timeLeft.innerHTML = '25:00';
  pomodoroLength.value = 25;
  breakLength.value = 5;
}
