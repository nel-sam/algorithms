const fibonacciRecursive = (n) => {
  if (n < 2) {
    return n;
  }

  return fibonacciRecursive(n -1) + fibonacciRecursive (n - 2);
}

const fizzBuzz = (n) => {
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

const fizzBuzz2 = (n) => {
  for (i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

const reverseString = (str) => {
  let reversed = '';

  for (let character of str) {
    reversed = character + reversed;
  }

  return reversed;
}

const reverseWithReducer = (str) => {
  return str.split('')
        .reduce((reversed, character) => character + reversed, '');
}

const palindrome = (str) => {
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

const palindromeWithEvery = (str) => {
  return str.split('')
        .every((char, i) => char === str[str.length - 1 - i]);
}

const reverseInt = (n) => {
  const revStr = n.toString()
                  .replace('-','')
                  .split('')
                  .reverse()
                  .join('');

  const reversed = parseInt(revStr);
  return Math.sign(n) * reversed;
}

const maxChar = (str) => {
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

const chunk = (array, size) => {
  const chunked = [];

  for (let element of array) {
    const last = chunked[chunked.length - 1];

    // If it hasn't been created (first time in the loop)
    // or it's full, do a new one
    if (!last || last.length >= size) {
      chunked.push([element]);
    } else {
      last.push(element);
    }
  }

  return chunked;
}

const chunkWithSlice = (array, size) => {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    const segment = array.slice(index, index + size);
    chunked.push(segment);
    index += size;
  }

  return chunked;
}

const anagrams = (stringA, stringB) => {
  const pattern = /[^\w]/gi;
  stringA = stringA.replace(pattern, '').toLowerCase();
  stringB = stringB.replace(pattern, '').toLowerCase();

  if (stringA.length !== stringB.length) {
    return false;
  }

  for(const character of stringA) {
    if(stringA.split(character).length !== stringB.split(character).length) {
      return false;
    }
  }

  return true;
}

const anagramsWithSorting = (stringA, stringB) => {
  const pattern = /[^\w]/gi;
  stringA = stringA.replace(pattern, '').toLowerCase().split('').sort().join('');
  stringB = stringB.replace(pattern, '').toLowerCase().split('').sort().join('');

  return stringA === stringB;
}

const test = require('./test');
test(fibonacciRecursive(4), 3);
test(fibonacciRecursive(6), 8);
test(fizzBuzz(15), 'FizzBuzzFizzFizzBuzzFizzFizzBuzz');
test(reverseString('abcd'), 'dcba');
test(palindrome('abxl22lxba'), true);
test(palindrome('asD'), false);
test(reverseInt(15), 51);
test(reverseInt(-500), -5);
test(maxChar('abcccccccd'), 'c');
test(chunk([1, 2, 3, 4, 5], 10).join(''), [ [ 1, 2, 3, 4, 5 ] ].join(''));
test(chunk([1, 2, 3, 4, 5], 4).join(''), [[ 1, 2, 3, 4], [5]].join(''));
test(anagrams('tEst!@#@', 'tEst)(*'), true)
test(anagrams('RAIL! SAFETY!', 'fairy tales'), true)