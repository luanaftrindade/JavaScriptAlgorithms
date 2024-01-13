function countEveryOnesInARange(number) {
  let numberOneCounter = 0;

  for (i = 0; i < number; i++) {
    const digits = String(i).split("");
    numberOneCounter += digits.filter((digit) => digit === "1").length;
  }

  return numberOneCounter;
}

const maxRange = 100;
const result = countEveryOnesInARange(maxRange);

console.log(
  `The number one appears ${result} times in a range of 0-${maxRange}`
);
