function perfectNumberList(n) {
  if (n < 6) {
      return "none";
  }

  let result = [];

  for (let i = 6; i <= n; i++) {
      let sumDivisors = 1;
      for (let j = 2; j <= Math.sqrt(i); j++) {
          if (i % j === 0) {
              sumDivisors += j;
              if (j !== i / j) {
                  sumDivisors += i / j;
              }
          }
      }
      if (sumDivisors === i) {
          result.push(i.toString());
      }
  }
  return result.length > 0 ? result.join("-") : "none";
}