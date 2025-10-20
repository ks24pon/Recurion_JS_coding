function isValidEmail(email){
  // @の後のインデックス
  let atIndex = email.indexOf("@");

  // @の後のアドレス
  let domain = email.substring(atIndex+1, email.length);

  if (atIndex > 0 && email.indexOf(" ") == -1 && domain.indexOf("@") == -1 && domain.indexOf(".") != -1) return true;
  else return false;
}
