function StringToSentenceText1(str) {
  str = str.toLowerCase().split(" ");

  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }

  return str.join(" ");
}

// console.log(titleCase("I'm a little tea pot"));

module.exports = StringToSentenceText1;
