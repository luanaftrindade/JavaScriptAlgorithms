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

function findTheMaxElementInArrayOne(array) {
  let newArray = [...array];
  let max = Math.max.apply(null, newArray);
  return max;
}

const arrayTestOne = [183, 4721, 352, 596, 52, 12, 113, 976, 566, 75, 422];
const resultOne = findTheMaxElementInArrayOne(arrayTestOne);
console.log(`The max element of this array is: ${resultOne}.`);
