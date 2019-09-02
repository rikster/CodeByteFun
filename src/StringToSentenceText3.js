/**
 * @return {string}
 */
function StringToSentenceText3(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(word => word.replace(word[0], word[0].toUpperCase()))
    .join(" ");
}

// console.log(StringToSentenceText3("I'm a little tea pot"));

module.exports = StringToSentenceText3;
