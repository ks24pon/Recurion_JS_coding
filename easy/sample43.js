function calcWeightByExercise(exercise,minutes){
  let weight = 85.5;
  const metVal = {
      "running": 8,
      "walking": 3,
      "tennis": 5,
      "rope jump": 9
  }
  const met = metVal[exercise];
  // 消費カロリー(kcol)
  const caloriesPerMinute = met * 3.5 * weight / 200 * minutes;
  // 減少した体重(kg)
  const lostWeight = caloriesPerMinute / 7700;
  return Math.floor((weight - lostWeight) * 10) /10;
}