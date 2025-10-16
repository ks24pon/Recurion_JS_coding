function getAtLocation(email){
  let num = email.indexOf("@");
  if (num != -1) return num + 1;
  return -1;
}