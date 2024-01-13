function countEveryNumbersNineInARange(number) {
  counterOfNines = 0;
  for (i = 0; i <= number; i++) {
    const numbers = String(i).split("");
    counterOfNines += numbers.filter(number => number === '9').length;
  }
  return counterOfNines;
}

console.log(countEveryNumbersNineInARange(100));
