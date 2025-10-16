function vacationRental(people,day){
  // 1日の宿泊料金
  let perDay;
  // 清掃費
  const CLEANING = 1.12;
  // 合計
  const TAX = 1.08;
  // 3泊以下：80ドル、4泊以上：60ドル、10泊以上：50ドル
  if (day <= 3) perDay = 80;
  else if (day < 10) perDay = 60;
  else perDay = 50;
  // 清掃費として宿泊料金12%加算、全体の金額に8%の税金がかかる
  return Math.floor(perDay * day * CLEANING * people * TAX);
}