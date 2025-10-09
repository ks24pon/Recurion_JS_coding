function isLeapYear(year){
  // 例外として400で割り切れる場合、閏年
  if(year % 400 == 0) return true;
  // 100で割り切れる場合、閏年にしない
  else if(year % 100 == 0) return false;
  // 4で割り切れる
  else if(year % 4 == 0) return true;
  return false;
}