function notDivisibleNumbers(x, y) {
  let result = [];
  for (let i = 1; i <= x; i++) {
      if(i % y !==0) {
          result.push(i);
      }
  }
  return result.join("-");
}