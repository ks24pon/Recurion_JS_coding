function countWord(word){
  if(word.length != 0) return word.length;
  else return - 1;
}

console.log(countWord("hello"));
console.log(countWord("Good Morning"));
console.log(countWord(""));