import { startStopwatch, pauseStopwatch, stopStopwatch } from "./stopwatch.js";
import { addTimerOptions, startTimer, pauseTimer, stopTimer } from "./timer.js";

const stopwatchStartBtn = document.querySelector(".stopwatch .startBtn"),
  stopwatchPauseBtn = document.querySelector(".stopwatch .pauseBtn"),
  stopwatchStopBtn = document.querySelector(".stopwatch .stopBtn"),
  timerStartBtn = document.querySelector(".timer .startBtn"),
  timerPauseBtn = document.querySelector(".timer .pauseBtn"),
  timerStopBtn = document.querySelector(".timer .stopBtn");

// ---------- Stopwatch ----------
stopwatchStartBtn.addEventListener("click", () => {
  startStopwatch();
});

stopwatchPauseBtn.addEventListener("click", () => {
  pauseStopwatch();
});

stopwatchStopBtn.addEventListener("click", () => {
  stopStopwatch();
});

// ---------- Timer ----------
addTimerOptions();

timerStartBtn.addEventListener("click", () => {
  startTimer();
});

timerPauseBtn.addEventListener("click", () => {
  pauseTimer();
});

timerStopBtn.addEventListener("click", () => {
  stopTimer();
});

// ---------- Fullpage ----------

new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  scrollHorizontally: true,
  navigation: true,
  keyboardScrolling: true,
});
