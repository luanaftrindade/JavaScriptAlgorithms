function findTheMaxElementInArray(array) {
  let newArray = [...array];
  let maxElementOfArray = newArray[0];
  newArray.forEach((element) => {
    if (element > maxElementOfArray) {
      maxElementOfArray = element;
    }
  });
  return maxElementOfArray;
}

const arrayTest = [1, 13, 2, 4, 500, 2, 342, 254, 2];
const result = findTheMaxElementInArray(arrayTest);
console.log(`The max element of this array is: ${result}.`);

