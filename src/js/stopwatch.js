const hoursText = document.querySelector("#stopwatchHours"),
  minutesText = document.querySelector("#stopwatchMinutes"),
  secondsText = document.querySelector("#stopwatchSeconds"),
  stopwatchStartBtn = document.querySelector(".stopwatch .startBtn"),
  stopwatchPauseBtn = document.querySelector(".stopwatch .pauseBtn"),
  stopwatchStopBtn = document.querySelector(".stopwatch .stopBtn");

let hours = 0,
  minutes = 0,
  seconds = 0,
  stopwatch;

export function startStopwatch() {
  stopwatchStartBtn.classList.add("disabled");
  stopwatchPauseBtn.classList.remove("disabled");
  stopwatchStopBtn.classList.remove("disabled");
  stopwatch = setInterval(() => {
    if (seconds < 59) {
      seconds++;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      secondsText.innerText = seconds;
    } else {
      minutes++;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      minutesText.innerText = minutes;

      seconds = 1;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      secondsText.innerText = seconds;
    }
    if (minutes === 60) {
      hours++;
      hours = hours < 10 ? "0" + hours : hours;
      hoursText.innerText = hours;

      minutes = 0;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      minutesText.innerText = minutes;
    }
  }, 1000);
}

export function pauseStopwatch() {
  clearInterval(stopwatch);
  stopwatchPauseBtn.classList.add("disabled");
  stopwatchStartBtn.classList.remove("disabled");
}

export function stopStopwatch() {
  clearInterval(stopwatch);

  stopwatchStartBtn.classList.remove("disabled");
  stopwatchPauseBtn.classList.add("disabled");
  stopwatchStopBtn.classList.add("disabled");

  hours = 0;
  minutes = 0;
  seconds = 0;

  hoursText.innerText = "00";
  minutesText.innerText = "00";
  secondsText.innerText = "00";
}
