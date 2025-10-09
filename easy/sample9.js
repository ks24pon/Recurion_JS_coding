function redirectionUrl(language){
  let url = "www.example.org/";

  if(language == "Japanese") return url += "ja";
  else if(language == "Spanish") return url += "es";
  else if(language == "English") return url += "en";
  else if(language == "Russian") return url += "ru";
  return url;
}