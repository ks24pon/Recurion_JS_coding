function interestsPaid(initialLoan,didPayOnTime){
  // $2.5の手数料
  const SERVICE_FEE = 2.5;
  // 期限外の支払い15%の利子
  const LATE_RATE = 1.15;
  // 支払われた場合2%の利子
  const DEFAULT_RATE = 1.02;
  // 合計金額
  let total = initialLoan;

  //　支払いが期限内かどうかに応じて適切な利率
  const interestRate = didPayOnTime ? DEFAULT_RATE : LATE_RATE;
  const totalWithInterest = initialLoan * interestRate;

  //利子を加えた金額に手数料足したもの
  return totalWithInterest + SERVICE_FEE;
}

