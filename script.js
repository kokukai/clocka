let timerInterval;
let time = 0;

function startTimer() {
  if (timerInterval) return; // Prevents multiple intervals

  timerInterval = setInterval(function () {
    time++;
    let minutes = Math.floor(time / 60).toString().padStart(2, '0');
    let seconds = (time % 60).toString().padStart(2, '0');
    document.getElementById("stopwatch").textContent = `${minutes}:${seconds}`;
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  time = 0;
  document.getElementById("stopwatch").textContent = "00:00";
}
