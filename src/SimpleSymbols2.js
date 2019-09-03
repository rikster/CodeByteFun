// https://coderbyte.com/editor/Simple%20Symbols:JavaScript

function SimpleSymbols2(str) {
  if (/^[a-zA-Z]/.test(str) || /[a-zA-Z]$/.test(str)) {
    return false;
  } else if (/[^+][a-zA-Z]/.test(str) || /[a-zA-Z][^+]/.test(str)) {
    return false;
  } else  {
    return true;
  }
}

// console.log(SimpleSymbols("+d+=3=+s+"));
// console.log(SimpleSymbols("+d===+a+"));

module.exports = SimpleSymbols2;
