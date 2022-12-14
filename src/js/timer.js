// let ringtone = new Audio("../audio/ringtone.mp3");
const hoursText = document.querySelector("#timerHours"),
  minutesText = document.querySelector("#timerMinutes"),
  secondsText = document.querySelector("#timerSeconds"),
  selectMenu = document.querySelectorAll("select"),
  timerStartBtn = document.querySelector(".timer .startBtn"),
  timerPauseBtn = document.querySelector(".timer .pauseBtn"),
  timerStopBtn = document.querySelector(".timer .stopBtn");

let hours = 0,
  minutes = 0,
  seconds = 0,
  timer,
  timerIsRunnig = false;

export function addTimerOptions() {
  for (let i = 23; i >= 0; i--) {
    i = i < 10 ? "0" + i : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
  }

  for (let i = 59; i >= 0; i--) {
    i = i < 10 ? "0" + i : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
  }

  for (let i = 59; i >= 0; i--) {
    i = i < 10 ? "0" + i : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
  }
}

export function startTimer() {
  if (timerIsRunnig) {
    timerStartBtn.classList.add("disabled");
    timerPauseBtn.classList.remove("disabled");
    timerStopBtn.classList.remove("disabled");
    selectMenu[0].classList.add("disabled");
    selectMenu[1].classList.add("disabled");
    selectMenu[2].classList.add("disabled");

    timer = setInterval(() => {
      if (seconds > 0) {
        seconds--;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        secondsText.innerText = seconds;
      } else {
        if (minutes > 0) {
          seconds = 59;
          secondsText.innerText = seconds;
          minutes--;
          minutes = minutes < 10 ? "0" + minutes : minutes;
          minutesText.innerText = minutes;
        } else {
          if (hours > 0) {
            hours--;
            hours = hours < 10 ? "0" + hours : hours;
            hoursText.innerText = hours;
            minutes = 59;
            seconds = 59;
            minutesText.innerText = minutes;
            secondsText.innerText = seconds;
          } else {
            stopTimer();
          }
        }
      }
    }, 1000);
  } else {
    let time = `${selectMenu[0].value}:${selectMenu[1].value}:${selectMenu[2].value}`;

    if (time === "00:00:00") {
      return alert("Selecione um tempo válido!");
    }

    timerStartBtn.classList.add("disabled");
    timerPauseBtn.classList.remove("disabled");
    timerStopBtn.classList.remove("disabled");
    selectMenu[0].classList.add("disabled");
    selectMenu[1].classList.add("disabled");
    selectMenu[2].classList.add("disabled");

    hours = selectMenu[0].value;
    minutes = selectMenu[1].value;
    seconds = selectMenu[2].value;

    hoursText.innerText = hours;
    minutesText.innerText = minutes;
    secondsText.innerText = seconds;

    timerIsRunnig = true;

    timer = setInterval(() => {
      if (seconds > 0) {
        seconds--;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        secondsText.innerText = seconds;
      } else {
        if (minutes > 0) {
          seconds = 59;
          secondsText.innerText = seconds;
          minutes--;
          minutes = minutes < 10 ? "0" + minutes : minutes;
          minutesText.innerText = minutes;
        } else {
          if (hours > 0) {
            hours--;
            hours = hours < 10 ? "0" + hours : hours;
            hoursText.innerText = hours;
            minutes = 59;
            seconds = 59;
            minutesText.innerText = minutes;
            secondsText.innerText = seconds;
          } else {
            stopTimer();
          }
        }
      }
    }, 1000);
  }
}

export function pauseTimer() {
  clearInterval(timer);
  timerPauseBtn.classList.add("disabled");
  timerStartBtn.classList.remove("disabled");
}

export function stopTimer() {
  clearInterval(timer);
  timerIsRunnig = false;

  hours = 0;
  minutes = 0;
  seconds = 0;

  timerStartBtn.classList.remove("disabled");
  timerPauseBtn.classList.add("disabled");
  timerStopBtn.classList.add("disabled");

  selectMenu[0].classList.remove("disabled");
  selectMenu[1].classList.remove("disabled");
  selectMenu[2].classList.remove("disabled");

  hoursText.innerText = "00";
  minutesText.innerText = "00";
  secondsText.innerText = "00";
}
