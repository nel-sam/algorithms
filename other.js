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

function palindrome(str) {
  let low = 0;
  let high = str.length - 1;

  while (low < high) {
    if (str[low] != str[high]) {
      return false;
    }

    low++;
    high--;
  }

  return true;
}

function palindromeWithEvery(str) {
  return str.split('')
        .every((char, i) => char === str[str.length - 1 - i]);
}

function reverseInt(n) {
  const revStr = n.toString()
                  .replace('-','')
                  .split('')
                  .reverse()
                  .join('');

  const reversed = parseInt(revStr);
  return Math.sign(n) * reversed;
}

function maxChar(str) {
  let charHash = {};
  let maxChar = '';
  let maxCount = 0;

  for (let character of str) {
    charHash[character] = charHash[character] + 1 || 1;

    if (charHash[character] > maxCount) {
     maxCount = charHash[character];
     maxChar = character;
    }
  }

  return maxChar;
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
test(palindrome('abxl22lxba'), true);
test(palindrome('asD'), false);
test(reverseInt(15), 51);
test(reverseInt(-500), -5);
test(maxChar('abcccccccd'), 'c');