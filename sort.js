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

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < (arr.length - i - 1); j++) {
      if (arr[j] > arr[j + 1]) {
        const lesser = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = lesser;
      }
    }
  }

  return arr;
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
  }

    // Recursive case
    const midPoint = Math.floor(array.length / 2);
    const leftHalf = array.slice(0, midPoint);
    const rightHalf = array.slice(midPoint, array.length);
    return merge(mergeSort(leftHalf), mergeSort(rightHalf));
}

const merge = (i, j) => {
  const result = [];

  while (i.length && j.length) {
    if (i[0] < j[0]) {
      result.push(i.shift());
    } else {
      result.push(j.shift());
    }
  }

  return [...result, ...i, ...j];
}

const test = require('./test');
const sorted = [ 1,   2,    4,  5,  8, 22,  30,   34, 68, 93,345, 867, 2644];// toSort.slice(0, toSort.length).sort((a, b) => a - b);
const sorted2 = [1,   2,   4,    5,8,  22,  30,   34,93, 345, 867, 2644];// toSort2.slice(0, toSort2.length).sort((a, b) => a - b);

test(selectionSort([8,1,4,2,34,30,68,5,2644,93,345,867,22]).join(''), sorted.join(''));
test(selectionSort([8,1,4,2,34,30,5,2644,93,345,867,22]).join(''), sorted2.join(''));

test(quickSort([8,1,4,2,34,30,68,5,2644,93,345,867,22]).join(''), sorted.join(''));
test(quickSort([8,1,4,2,34,30,5,2644,93,345,867,22]).join(''), sorted2.join(''));

test(mergeSort([8,1,4,2,34,30,68,5,2644,93,345,867,22]).join(''), sorted.join(''));
test(mergeSort([8,1,4,2,34,30,5,2644,93,345,867,22]).join(''), sorted2.join(''));

test(bubbleSort([8,1,4,2,34,30,68,5,2644,93,345,867,22]).join(''), sorted.join(''));
test(bubbleSort([8,1,4,2,34,30,5,2644,93,345,867,22]).join(''), sorted2.join(''));
