import { pause, start, stop } from "./stopwatch.js";
import { cleave, startTimer } from "./timer.js";

const stopwatchStartBtn = document.querySelector(".stopwatch .startBtn"),
  stopwatchPauseBtn = document.querySelector(".stopwatch .pauseBtn"),
  stopwatchStopBtn = document.querySelector(".stopwatch .stopBtn"),
  timerStartBtn = document.querySelector(".timer .startBtn"),
  timerPauseBtn = document.querySelector(".timer .pauseBtn"),
  timerStopBtn = document.querySelector(".timer .stopBtn"),
  timerInupt = document.querySelector(".timer-input");

stopwatchStartBtn.addEventListener("click", () => {
  start();
  stopwatchStartBtn.classList.add("disabled");
  stopwatchPauseBtn.classList.remove("disabled");
  stopwatchStopBtn.classList.remove("disabled");
});

stopwatchPauseBtn.addEventListener("click", () => {
  pause();
  stopwatchPauseBtn.classList.add("disabled");
  stopwatchStartBtn.classList.remove("disabled");
});

stopwatchStopBtn.addEventListener("click", () => {
  stop();
  stopwatchStartBtn.classList.remove("disabled");
  stopwatchPauseBtn.classList.add("disabled");
  stopwatchStopBtn.classList.add("disabled");
});

timerStartBtn.addEventListener("click", () => {
  startTimer();
});
