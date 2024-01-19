function countEveryNumberNineInARange(number) {
  counterOfNines = 0;
  for (i = 0; i <= number; i++) {
    const numbers = String(i).split("");
    counterOfNines += numbers.filter((number) => number === "9").length;
  }
  return counterOfNines;
}

const maxRange = 100;
const result = countEveryNumberNineInARange(maxRange);

console.log(
  `The number nine appears ${result} times in a range of 0-${maxRange}`
);
