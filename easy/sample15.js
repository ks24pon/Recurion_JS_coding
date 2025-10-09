function getBootstrapClass(screenWidth){
  // xsサイズ
  if(screenWidth < 768) return "xs";
  // smサイズ(768~992)
  else if (screenWidth < 992) return "sm";
  // mdサイズ(992~1200)
  else if(screenWidth < 1200) return "md";
  // lgサイズ
  else return "lg";
}