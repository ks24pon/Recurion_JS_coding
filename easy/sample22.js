function replaceWithChar(s,letter){
  // 正規表現マッチ
  const regex = new RegExp(letter, "g");
  return s.replace(regex, "");
}