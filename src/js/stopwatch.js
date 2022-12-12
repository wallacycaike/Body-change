const hoursText = document.querySelector("#hours"),
  minutesText = document.querySelector("#minutes"),
  secondsText = document.querySelector("#seconds");

let hours = 0,
  minutes = 0,
  seconds = 0,
  timer;

export function start() {
  timer = setInterval(() => {
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

export function pause() {
  clearInterval(timer);
}

export function stop() {
  clearInterval(timer);

  hours = 0;
  minutes = 0;
  seconds = 0;

  hoursText.innerText = "00";
  minutesText.innerText = "00";
  secondsText.innerText = "00";
}
