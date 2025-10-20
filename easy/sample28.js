function lastFourHint(stringInput){
  // 長さが6文字未満の時
  if (stringInput.length < 6){
      return "There is no Hint";
  }
  // 6文字以上の時
  else {
      let hint = stringInput.substring(stringInput.length-4);
      return "Hint is:" + hint;
  }
}