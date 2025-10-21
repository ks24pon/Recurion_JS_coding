function sumOfAllPrimes(n){
  let total = 0;

  for(let i = 2; i <= n; i++){
      if(isPrime(i)){
          total += i;
      }
  }
  return total;
}

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
}