function insertUnderscoreAt(s,i){
  if (i < s.length) {
      return s.substring(0,i) + "_" + s.substring(i)
  }
  else {
      return s;
  }
}