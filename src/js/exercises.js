const exercises = await fetch("../../exercises.json").then((response) =>
  response.json()
);
dayjs.locale("pt-br");
const dayjsPtbr = window.dayjs_locale_pt_br;
const todaysDayNumber = dayjs().day();
const weekDaysPtbr = dayjsPtbr.weekdays;
const todaysDay = weekDaysPtbr[1];
let exercisesDays = [];

const dayInfo = document.querySelector(".day-info"),
  exercisesInfo = document.querySelector(".exercises-info");

export function test() {
  console.log(todaysDay);
  console.log(exercises);
}

exercises.map((day) => {
  exercisesDays.push(day.dayName);
});

export function checkExercisesDay() {
  if (exercisesDays.includes(todaysDay)) {
    showExercises();
  } else {
    dayInfo.innerText = "Hoje não é dia de exercícios.";
  }
}

function showExercises() {
  dayInfo.innerText = `Hoje é ${todaysDay}.`;
  exercises.map((day) => {
    for (let i = 0; i < day.exercises.length; i++) {
      console.log(day.exercises[i].name);
    }
  });
}
