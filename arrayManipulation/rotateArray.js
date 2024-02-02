// The main purpose of this algorithm is to cyclically shift the elements of an array to the right by a specified number of steps (k).
function reverse(array, start, end) {
  while (start < end) {
    const temp = array[start];
    array[start] = array[end];
    array[end] = temp;
    start++;
    end--;
  }
}

function rotateArray(array, k) {
  const n = array.length;
  // to make sure that k is within the range of array length
  k %= n;

  // 1. first we need to reverse the entire array:
  reverse(array, 0, n - 1); // the index end is length - 1

  // 2. reverse the first k elements
  reverse(array, 0, k - 1);

  // 3. reverse the remaining elements
  reverse(array, k, n - 1);

  return array;
}

const arrayTest = [1, 2, 3, 4, 5];
const result = rotateArray(arrayTest, 2);
console.log(result);
const arrayTestOne = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
const resultOne = rotateArray(arrayTestOne, 6);
console.log(resultOne);
