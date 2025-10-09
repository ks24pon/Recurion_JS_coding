function canProcessOrder(beef,chicken,salad,coffee,tea){
  if(beef === chicken) return false;
  else if(coffee === tea) return false;
  else return true;
}