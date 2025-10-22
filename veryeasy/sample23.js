function fruitImgUrl(fruit){
  switch (fruit.toLowerCase()) {
      case "banana":
          return "url1";
      case "pineapple":
          return "url2";
      case "pear":
          return "url3";
      default:
          return "no image";
  }
}