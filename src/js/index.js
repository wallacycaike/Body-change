import { checkExercisesDay } from "./exercises.js";
import { startStopwatch, pauseStopwatch, stopStopwatch } from "./stopwatch.js";
import { addTimerOptions, startTimer, pauseTimer, stopTimer } from "./timer.js";

const stopwatchStartBtn = document.querySelector(".stopwatch .startBtn"),
  stopwatchPauseBtn = document.querySelector(".stopwatch .pauseBtn"),
  stopwatchStopBtn = document.querySelector(".stopwatch .stopBtn");

const timerStartBtn = document.querySelector(".timer .startBtn"),
  timerPauseBtn = document.querySelector(".timer .pauseBtn"),
  timerStopBtn = document.querySelector(".timer .stopBtn");

// ---------- Exercises ----------
// new fullpage(".fullpage", {
//   //options here
//   // autoScrolling: true,
//   // scrollHorizontally: true,
//   controlArrowColor: "#000",
// });
checkExercisesDay();

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
