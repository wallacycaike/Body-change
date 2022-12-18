const exercises = await fetch("../../exercises.json").then((response) =>
  response.json()
);
dayjs.locale("pt-br");
const dayjsPtbr = window.dayjs_locale_pt_br;
const todaysDayNumber = dayjs().day();
const weekDaysPtbr = dayjsPtbr.weekdays;
const todaysDay = weekDaysPtbr[3];
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
    showExercisesOfDay();
  } else {
    dayInfo.innerText = "Hoje não é dia de exercícios.";
  }
}

function showExercisesOfDay() {
  dayInfo.innerText = `Hoje é ${todaysDay}.`;
  exercises.map((day) => {
    if (day.dayName === todaysDay) {
      day.exercises.map((exercise) => {
        console.log(exercise.name);
        console.log(
          exercise.description ?? "Este exercício não contem descrição."
        );
        exercise.series.map((serie) => {
          console.log(`Repetições: ${serie.reps}`);
          console.log(`Tempo de descanso: ${serie.restTime}`);
        });
      });
    }
  });
}
