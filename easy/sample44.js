// 満タンで何マイル走れるかを計算
function milesWithoutStop(fuelEconomy, tankCapacity){
  return fuelEconomy * tankCapacity;
}

// 速度を時速に変更
function getDistance(velocity){
  return velocity * 3600;
}

// メイン関数：走れる時間（満タンで空になるまで）
function hoursToEmpty(velocity, fuelEconomy, tankCapacity) {
  // 満タンで走れる距離（マイル）
  const fullTank = milesWithoutStop(fuelEconomy, tankCapacity);

  // 1時間あたりの移動距離（時速に変換）
  const distance = getDistance(velocity);

  // 走れる時間 = 走れる距離 ÷ 時速
  const hours = fullTank / distance;

  // 小数第2位以下を切り捨てて、小数第1位まで返す
  return Math.floor(hours * 10) / 10.0;
}