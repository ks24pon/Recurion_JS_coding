function isSwapBigger(n){
  let result = 10*(n%10) + Math.floor(n/10)
  return n <= result;
}