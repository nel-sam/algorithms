// O(2^n)
const fibonacciRecursive = (n) => {
  if (n < 2) {
    return n;
  }

  return fibonacciRecursive(n -1) + fibonacciRecursive (n - 2);
}

// O(n)
const fibonacciIterative = (n) => {
  let result = [0, 1];

  for (let i = 2; i <= n; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }

  return result[n];
}

const cache = {};
function fibMemoization(n) {
  if (cache[n]) {
    return cache[n];
  }

  if (n < 2) {
    cache[n] = n;
    return cache[n];
  }

  cache[n-1] = fibMemoization(n - 1);
  cache[n-2] = fibMemoization(n - 2);
  return cache[n - 1] + cache[n - 2];
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

const capitalize = (str) => {
  let words = [];

  for (const word of str.split(' ')) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }

  return words.join(' ');
}

const vowels = (str) => {
  const pattern = /[aeiou]/;
  let count = 0;

  for (const letter of str) {
    if (pattern.test(letter.toLowerCase())) {
      count++;
    }
  }

  return count;
}

const matrix = (n) => {
  const resultMatrix = [];
  let startCol = startRow = 0;
  let endCol = endRow = n - 1;
  let counter = 1;

  // Prepare result array
  for (let i = 0; i < n; i++) {
    resultMatrix.push([]);
  }

  while (startCol <= endCol && startRow <= endRow) {
    // Top row
    for (let i = startCol; i <= endCol; i++) {
      resultMatrix[startRow][i] = counter;
      counter++;
    }

    startRow++;

    // Right col
    for (let i = startRow; i <= endRow; i++) {
      resultMatrix[i][endCol] = counter;
      counter++;
    }

    endCol--;

    // Bottom row goes backwards
    for (let i = endCol; i >= startCol; i--) {
      resultMatrix[endRow][i] = counter;
      counter++;
    }

    endRow--;

    // Left col
    for (let i = endRow; i >= startRow; i--) {
      resultMatrix[i][startCol] = counter;
      counter++;
    }

    startCol++;
  }

  return resultMatrix;
}

const mergeArrays = (array1, array2) => {
  let index = 0;
  const result = [];

  while (array1[index] || array2[index]) {
    if (array1[index]) {
      result.push(array1[index]);
    }

    if (array2[index]) {
      result.push(array2[index]);
    }

    index++;
  }

  return result;
}

class edge {
  node1;
  node2;
  cost;

  constructor(node1, node2, cost) {
    this.node1 = node1;
    this.node2 = node2;
    this.cost = cost;
  }
}

// class graphNode {
//   cost;
//   costFromStart;

//   constructor(cost) {
//     this.cost = cost;
//   }

//   setCostFromStart(cost) {
//     this.costFromStart = cost;
//   }
// }

// const dijkstrasAlgorithm = (graph) => {

// }

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
test(anagrams('tEst!@#@', 'tEst)(*'), true);
test(anagrams('RAIL! SAFETY!', 'fairy tales'), true);
test(capitalize('look, it is working!'), 'Look, It Is Working!');
test(vowels('Why do you ask?'), 4);
test(mergeArrays([1,2,3], ['a', 'b', 'c']).join(''), [1, 'a', 2, 'b', 3, 'c'].join(''));

// const graph = {
//   start: new graphNode(0),

// };

// console.log(graph);