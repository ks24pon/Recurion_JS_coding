function hammingDistanceInString(string1,string2){
  let distance = 0;
  // 文字比較、異なればカウント
  for(let i = 0; i < string1.length; i++){
      if(string1[i] !== string2[i]){
          distance++;
      }
  }
  return distance;
}