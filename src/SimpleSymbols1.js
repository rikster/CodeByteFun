// https://coderbyte.com/editor/Simple%20Symbols:JavaScript

function SimpleSymbols1(str) {
  const strArray = str.split("");
  let foundArray = [];
  let success = false;

  for (let i = 0; i < strArray.length; i++) {
    // fail if 1st char is a letter
    if (isLetter(strArray[i]) && i === 0) {
      foundArray.push(false);
    }
    if (isLetter(strArray[i])) {
      // pass if there is a + on both side, else fail
      if (strArray[i - 1] === "+" && strArray[i + 1] === "+") {
        foundArray.push(true);
      } else {
        foundArray.push(false);
      }
    }
  }

  // if  one fails they all fail
  for (let j = 0; j < foundArray.length; j++) {
    if (foundArray[j] === false) return false;
  }

  // or return pass
  return true;

  function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i); ///^[A-Za-z]+$/;
  }
}

// console.log(SimpleSymbols("+d+=3=+s+"));
// console.log(SimpleSymbols("+d===+a+"));

module.exports = SimpleSymbols1;
