function isPalindromeInteger(n){
  // 数値を文字列に変換
  let strNum = n.toString();
  // 文字列反転
  let reversedStr =strNum.split("").reverse().join("");
  // 元の文字列と反転した文字列比較
  return strNum === reversedStr;
}