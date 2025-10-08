function checkLastDigits(x,y,z) {
  // xとyの積を計算
  let product = x * y;

  // 積の最後の桁を取得
  let lastDigitOfProduct = product.toString().slice(-1);

  // zの最後の桁を取得
  let lastDigitOfZ = z.toString().slice(-1);

  // 最後の桁が等しいかどうかを比較
  return lastDigitOfProduct == lastDigitOfZ;
}