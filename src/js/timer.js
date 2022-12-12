// let ringtone = new Audio("../audio/ringtone.mp3");
const timerInupt = document.querySelector(".timer-input");

export let cleave = new Cleave(".timer-input", {
  time: true,
  timePattern: ["h", "m", "s"],
});

timerInupt.addEventListener("keydown", (ev) => {
  if (ev.key === "Enter") {
    startTimer();
  }
});

let timerTime;
export function startTimer() {
  timerTime = timerInupt.value;
  if (timerTime) {
    console.log(timerTime);
  }
  if (!timerTime) {
    console.log("Insira um tempo!");
  }
}
