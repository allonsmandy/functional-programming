// função impura.
function generateNumber(min, max) {
  const factor = max - min + 1;
  return parseInt(Math.random() * factor) + min;
}

console.log(generateNumber(5, 6)); // 5
console.log(generateNumber(5, 6)); // 6
console.log(generateNumber(5, 6)); // 5
console.log(generateNumber(5, 6)); // 5
