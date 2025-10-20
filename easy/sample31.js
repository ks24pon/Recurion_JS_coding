// 重力加速度関数
function planetGravityMpss(planet,time){
  if(planet == "Earth"){
      return 9.8;
  } else if (planet == "Jupiter"){
      return 24.79;
  } else if(planet == "Mercury"){
      return 3.7;
  } else {
      return 0;
  }
}

// メートルからマイルへの変換
function metersToMiles(meters){
  return meters * 0.000621371;
}

// 落下距離を表す関数
function fallingDistance(planet,time){
  return Math.floor(metersToMiles(0.5 * planetGravityMpss(planet) * Math.pow(time, 2)));
}
