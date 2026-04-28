let timerInterval; // ГЛОБАЛЬНАЯ переменная

function startTimer(seconds) {
  document.getElementById("menu").style.display = "none";
  document.getElementById("timer").style.display = "flex";

  let timeLeft = seconds;

  function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let secs = timeLeft % 60;

    document.getElementById("time").textContent =
      String(minutes).padStart(2, '0') + ":" +
      String(secs).padStart(2, '0');

    if (timeLeft > 0) {
      timeLeft--;
    } else {
      clearInterval(timerInterval);
      alert("Time's up!");
    }
  }

  updateTimer();
  timerInterval = setInterval(updateTimer, 1000);
}

function goBack() {
  clearInterval(timerInterval); // остановка таймера

  document.getElementById("timer").style.display = "none";
  document.getElementById("menu").style.display = "flex";
}