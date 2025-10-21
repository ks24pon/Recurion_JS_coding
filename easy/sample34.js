function divideBy3Count(n){
  let total = 0;
  while(n % 3 === 0 && n !== 0){
      n = n / 3;
      total++;
  }
  return total
}