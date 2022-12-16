// Testes do JSON

const exercises = require("../../exercises.json");

exercises.map((day) => {
  console.table(`Dia da semana: ${day.dayName}, Exercícios: ${day.exercises}`);
});
