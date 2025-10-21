function fizzBuzz(n){
  // 配列を使用して文字列を結合
  let list = [];
  
  for(let i = 1; i <= n; i++) {
      // 3と5の両方で割り切れる場合
      if(i % 3 === 0 && i % 5 === 0){
          list.push("FizzBuzz");
      }
      // 5で割り切れる場合
      else if(i % 5 === 0) {
          list.push("Buzz");
      }
      // 3で割り切れる場合
      else if(i % 3 === 0){
          list.push("Fizz");
      } else {
          list.push(i.toString());
      }
  }
  // 配列を文字列に変換し、ハイフンで結合
  let answer = list.join("-");
  return answer;
}