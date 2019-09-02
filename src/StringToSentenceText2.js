function StringToSentenceText2(str) {
  str = str
    .toLowerCase()
    .split(" ")
    .map(word =>  word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return str;
}

// console.log(StringToSentenceText2("I'm a little tea pot"));

module.exports = StringToSentenceText2;
