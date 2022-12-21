const exercises = await fetch("../../exercises.json").then((response) =>
  response.json()
);
dayjs.locale("pt-br");
const dayjsPtbr = window.dayjs_locale_pt_br;
const todaysDayNumber = dayjs().day();
const weekDaysPtbr = dayjsPtbr.weekdays;
const todaysDay = weekDaysPtbr[todaysDayNumber];
const dateToday = dayjs().format("DD/MM/YYYY");
let exercisesDays = [];

const dayInfo = document.querySelector(".day-info"),
  exercisesInfo = document.querySelector(".day-exercises"),
  utilities = document.querySelector(".utilities");

exercises.map((day) => {
  exercisesDays.push(day.dayName);
});

export function checkExercisesDay() {
  if (exercisesDays.includes(todaysDay)) {
    showExercisesOfDay();
  } else {
    showRestMensage();
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

function showRestMensage() {
  utilities.classList.add("disabled");
  dayInfo.textContent = `Hoje é ${todaysDay}, ${dateToday}.`;
  let h3 = document.createElement("h3");
  h3.classList.add("exercise-rest-title");
  h3.textContent = "Dia de descansar";

  let p1 = document.createElement("p");
  p1.classList.add("exercise-rest-message");
  p1.textContent = `Descansar é algo fundamental para a hipertrofia muscular. Durante um treinamento intenso, o músculo trabalhado sofre uma enorme sobrecarga e portanto acabam por causar micro lesões nas fibras musculares (são elas que causam a dor depois de algumas horas do fim do exercício).`;

  let p2 = document.createElement("p");
  p2.classList.add("exercise-rest-message");
  p2.textContent = `Para regenerar essas micro lesões e aumentar a resistência aos estímulos (por isso não se fica muito tempo com a mesma série, pois o corpo se adapta a estes estímulos), o corpo precisa lançar mão dos processos de supercompensação.`;

  let p3 = document.createElement("p");
  p3.classList.add("exercise-rest-message");
  p3.textContent = `Para que ocorra esta regeneração o corpo deve disponibilizar de nutrientes (glicose, aminoácidos, vitaminas e minerais) para a reconstrução muscular. Mas esta reconstrução só ocorre durante o descanso, e durante o sono.`;

  let div = document.createElement("div");
  div.classList.add("exercise-rest");
  div.appendChild(h3);
  div.appendChild(p1);
  div.appendChild(p2);
  div.appendChild(p3);

  exercisesInfo.appendChild(div);
}
