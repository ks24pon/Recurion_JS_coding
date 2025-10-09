function isThereSchool(day,isHoliday){
  // 祝日or土日は学校なし
  if(day == "Saturday" || day == "Sunday" || isHoliday){
      return false;
  } else {
      return true;
  }
}