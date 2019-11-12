const swap = (array, index1, index2) => {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

// Iterate through, selecting the lowest and pushing it to the front
// O(n^2)
const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      swap(array, i, minIndex);
    }
  }

  return array;
}

// Choosing a random pivot makes QuickSort's best and average running
// times the same; O(n log n)
const quickSort = (array) => {
  // Base case
  if (array.length <= 1) {
    return array;
  } else if (array.length === 2) {
    if (array[1] < array[0]) {
      swap(array, 1, 0);
    }

    return array;
  } else {
    // Recursive case
    const pivotIndex = parseInt(Math.random(0) * 100) % (array.length - 1);
    const pivot = array[pivotIndex];
    const lessThanArray = [];
    const greaterThanArray = [];

    for(let element of array) {
      if (element < pivot) {
        lessThanArray.push(element);
      } else if (element > pivot) {
        greaterThanArray.push(element);
      }
    }

    let final = [];
    if (lessThanArray) {
      final = quickSort(lessThanArray);
    }

    final = final.concat([pivot]);

    if (greaterThanArray) {
      final = final.concat(quickSort(greaterThanArray));
    }

    return final;
  }
}

// Split the array in to, sort the halves, merge into one array
// O(n log n)
const mergeSort = (array) => {
  // Base case
  if (array.length <= 1) {
    return array;
  } else if (array.length === 2) {
    if (array[1] < array[0]) {
      swap(array, 1, 0);
    }

    return array;
  } else {
    // Recursive case
    const midPoint = Math.floor((array.length - 1) / 2);
    const leftHalf = array.slice(0, midPoint);
    const rightHalf = array.slice(midPoint, array.length);
    return mergeSort(leftHalf).concat(mergeSort(rightHalf));
  }
}

const test = require('./test');
const toSort = [8,1,4,2,34,30,68,5,2644,93,345,867,22];
const sorted =  toSort.slice(0, toSort.length).sort((a, b) => a - b);
const toSort2 = [8,1,4,2,34,30,5,2644,93,345,867,22];
const sorted2 =  toSort2.slice(0, toSort2.length).sort((a, b) => a - b);

test(selectionSort(toSort).join(''), sorted.join(''));
test(selectionSort(toSort2).join(''), sorted2.join(''));

test(quickSort(toSort).join(''), sorted.join(''));
test(quickSort(toSort2).join(''), sorted2.join(''));

test(mergeSort(toSort).join(''), sorted.join(''));
test(mergeSort(toSort2).join(''), sorted2.join(''));
