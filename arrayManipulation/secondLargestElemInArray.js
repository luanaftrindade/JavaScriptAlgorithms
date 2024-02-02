function findTheSecondLargestElementInArray(array) {
  let newArray = [...array];
  let max = Math.max.apply(null, newArray); // get the first max of the array
  newArray.splice(newArray.indexOf(max), 1); // remove first max from the array
  return Math.max.apply(null, newArray); // return the second max
}

arrayTest = [23, 1213, 41, 27, 45, 291, 87, 13, 129, 371];
const result = findTheSecondLargestElementInArray(arrayTest);
console.log(`The second max element of this array is: ${result}.`);
