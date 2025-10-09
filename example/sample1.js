function isVowel(sound) {
  if(sound == "a" || sound == "i" || sound == "u" || sound == "e" || sound == "o") return true;
  return false;
}

console.log(isVowel("a"));
console.log(isVowel("e"));
console.log(isVowel("z"));
console.log(isVowel("k"));