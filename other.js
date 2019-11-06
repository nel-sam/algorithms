fibonacciRecursive = (n) => {
  if (n < 2) {
    return n;
  }

  return fibonacciRecursive(n -1) + fibonacciRecursive (n - 2);
}

test = (result, expectedResult) => {
  if (result === expectedResult) {
    console.log('Pass');
  } else {
    console.log('Fail');
  }
}

test(fibonacciRecursive(4), 3);
test(fibonacciRecursive(6), 8);