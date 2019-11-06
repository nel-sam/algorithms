binarySearch = (array, toFind) => {
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

test = (result, expectedResult) => {
  if (result === expectedResult) {
    console.log('Pass');
  } else {
    console.log('Fail');
  }
}

console.log('Starting');
test(binarySearch([1,3,5,7,8,9], 7), 3);
test(binarySearch([1,3,5,7,8,9], 13), -1);
