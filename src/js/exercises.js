const exercises = await fetch("../../exercises.json").then((response) =>
  response.json()
);
dayjs.locale("pt-br");
const dayjsPtbr = window.dayjs_locale_pt_br;
const todaysDayNumber = dayjs().day();
const weekDaysPtbr = dayjsPtbr.weekdays;
const todaysDay = weekDaysPtbr[3];
const dateToday = dayjs().format("DD/MM/YYYY");
let exercisesDays = [];

const dayInfo = document.querySelector(".day-info"),
  exercisesInfo = document.querySelector(".day-exercises");

exercises.map((day) => {
  exercisesDays.push(day.dayName);
});

export function checkExercisesDay() {
  if (exercisesDays.includes(todaysDay)) {
    showExercisesOfDay();
  } else {
    dayInfo.textContent = `Hoje é ${todaysDay}, não há exercícios para hoje, descanse.`;
  }
}

function showExercisesOfDay() {
  dayInfo.innerText = `Hoje é ${todaysDay}, ${dateToday}.`;
  exercises.map((day) => {
    if (day.dayName === todaysDay) {
      day.exercises.map((exercise) => {
        let newExercise = document.createElement("div");
        newExercise.classList.add("exercise");
        // newExercise.classList.add("slide");

        let exerciseName = document.createElement("h3");
        exerciseName.classList.add("exercise-name");
        exerciseName.textContent = exercise.name;

        if (exercise.description) {
          let exerciseDescription = document.createElement("p");
          exerciseDescription.classList.add("exercise-description");
          exerciseDescription.textContent = exercise.description;
          newExercise.appendChild(exerciseDescription);
        }

        newExercise.insertAdjacentElement("afterbegin", exerciseName);

        exercise.series.map((serie) => {
          let exerciseSerieInfo = document.createElement("ul");
          exerciseSerieInfo.classList.add("exercise-series");

          let exerciseSerieName = document.createElement("h4");
          exerciseSerieName.classList.add("exercise-series-title");
          exerciseSerieName.textContent = serie.name;

          let exerciseReps = document.createElement("li");
          exerciseReps.classList.add("exercise-series-reps");
          exerciseReps.textContent = `Repetições: ${serie.reps}`;

          let exerciseRestTime = document.createElement("li");
          exerciseRestTime.classList.add("exercise-series-restTime");
          exerciseRestTime.textContent = `Tempo de descanso: ${serie.restTime}`;

          exerciseSerieInfo.appendChild(exerciseSerieName);
          exerciseSerieInfo.appendChild(exerciseReps);
          exerciseSerieInfo.appendChild(exerciseRestTime);

          newExercise.appendChild(exerciseSerieInfo);
        });

        exercisesInfo.appendChild(newExercise);
      });
    }
  });
}
