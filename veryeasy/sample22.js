function fruitImgUrl(fruit){
  // bananaの時にurl1、pineappleの時にurl2、pearの時にurl3、それ以外の時にno image
  if(fruit == "banana" || fruit == "BANANA") return "url1";
  else if(fruit == "pineapple" || fruit == "PINEAPPLE") return "url2";
  else if(fruit == "pear" || fruit == "PEAR") return "url3";
  else return "no image";
}