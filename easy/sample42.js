function hoursToLose1KgByExercise(exercise) {
  const weight = 85.5;
  const caloriePerKg = 7700;
  const metValues = {
      "running": 8,
      "walking": 3,
      "tennis": 5,
      "rope jump": 9
  };
  const Met = metValues[exercise];
  const caloriesPerMinute = Met * 3.5 * weight / 200;
  const caloriesPerHour = caloriesPerMinute * 60;
  const hours = caloriePerKg / caloriesPerHour;

  return Math.floor(hours * 10) / 10;
}
