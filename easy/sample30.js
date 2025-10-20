function redirectionUrl(language){
  const BASE_URL = "www.example.org/";
  let languageCode;

  switch (language) {
      case "English":
          languageCode = "en";
          break;
      case "Japanese":
          languageCode = "ja";
          break;
      case "Spanish":
          languageCode = "es";
          break;
      case "Russian":
          languageCode = "ru";
          break;
      default:
          return BASE_URL;
  }
  return BASE_URL + languageCode;
}