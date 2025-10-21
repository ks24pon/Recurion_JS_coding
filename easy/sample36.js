function doYouFail(string){
  let total = 0;

  for(let i = 0; i < string.length; i++){
      if(string[i] == "A"){
          total++;
      }
      // Aが3回以上でfail
      if(total >= 3){
          return "fail";
      }
  }
  // 3回無い場合pass
  return "pass";
}