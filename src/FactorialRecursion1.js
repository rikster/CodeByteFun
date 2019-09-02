function FactorialRecursion1(num) {
  // our factorial function
  function factorial(n) {
    // terminate the recursion once we hit zero
    if (n === 0) {
      return 1;
    }

    // otherwise keep calling the function recursively
    else {
      return factorial(n - 1) * n;
    }
  }

  return factorial(num);
}

// console.log(FirstFactorial(4));

module.exports = FactorialRecursion1;
