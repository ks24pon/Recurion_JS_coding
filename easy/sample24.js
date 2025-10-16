function howMuchIsYourDebt(year){
  // 年利20%
  const interest = 1.2
  // 元金
  const initialDebt = 10000

  return Math.floor(initialDebt * Math.pow(interest,year));
}