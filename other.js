fibonacciRecursive = (n) => {
  if (n < 2) {
    return n;
  }

  return fibonacciRecursive(n -1) + fibonacciRecursive (n - 2);
}

fizzBuzz = (n) => {
  let result = '';

  for (i = 1; i <= n; i++) {
    if (i % 3 === 0) {
      result += 'Fizz';
    }

    if (i % 5 === 0) {
      result += 'Buzz';
    }
  }

  return result;
}

reverseString = (str) => {
  let reversed = '';

  for (let character of str) {
    reversed = character + reversed;
  }

  return reversed;
}

function reverseWithReducer(str) {
  return str.split('')
        .reduce((reversed, character) => character + reversed, '');
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
test(fizzBuzz(15), 'FizzBuzzFizzFizzBuzzFizzFizzBuzz');
test(reverseString('abcd'), 'dcba');