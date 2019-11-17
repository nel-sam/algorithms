// O(n)
const selectionSearch = (array, toFind) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === toFind) {
      return i;
    }
  }

  return -1;
}

// O(log n)
const binarySearch = (array, toFind) => {
  let low = 0;
  let high = array.length - 1;

  // Exit if out of range
  if (toFind > array[high] || toFind < array[low]) {
    return -1;
  }

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let value = array[mid];

    if (toFind === value) {
      return mid;
    }

    if (mid > value) {
      high = mid + 1;
    } else {
      low = mid - 1;
    }
  }
}

class leaf {
  constructor(label, right, left) {
    this.label = label;
    this.right = right;
    this.left = left;
  }
}

// TODO
const breadthFirstSearch = (tree, toFind) => {

}

const binarySearchTree = () => {
  
}

const test = require('./test');
test(selectionSearch([1,3,5,7,8,9], 5), 2);
test(binarySearch([1,3,5,7,8,9], 7), 3);
test(binarySearch([1,3,5,7,8,9], 13), -1);

// const tree = new leaf(
//   'Start',
//   new leaf(
//     'A',
//     new leaf(
//       'A1',
//       null,
//       null
//     ),
//     new leaf(
//       'A2',
//       null,
//       null
//     )
//   ),
//   new leaf(
//     'B',
//     new leaf(
//       'B1',
//       null,
//       null
//     ),
//     new leaf(
//       'B2',
//       null,
//       null
//     )
//   )
// );

// test(breadthFirstSearch(tree, 'B1'), )