function whoIsWinner(hisCard){
  // 引き分けの場合draw
  if(hisCard == 10) return "draw";
  else if(hisCard < 10 && hisCard > 2) return "you win";
  return "you lose"
}