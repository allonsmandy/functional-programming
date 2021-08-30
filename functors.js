/**
 * functors são objetos que implementam a função MAP
 * que também é um “wrapper” de um valor.
 *
 * - na programação funcional você não muda as informações, você evolui os dados
 */

// ARRAY é um exemplo de FUNCTORS
const numbers = [1, 2, 3, 4, 5, 6];
const newNumbers = numbers
  .map((number) => number + 10)
  .map((number) => number * 20);

console.log(
  numbers, // [ 1, 2, 3, 4, 5, 6 ]
  newNumbers // [ 220, 240, 260, 280, 300, 320 ]
);

function SafeType(value) {
  return {
    value,
    invalid() {
      return this.value === null || this.value === undefined;
    },
    map(fn) {
      const newValue = !this.invalid() ? fn(this.value) : this.value;
      return SafeType(newValue);
    },
    flatMap(fn) {
      return this.map(fn).value;
    },
  };
}

const result = SafeType("Este é um texto")
  .map((text) => text.toUpperCase())
  .map((text) => `${text}!!!!`)
  .flatMap((text) => text.split("").join(" "));

console.log(result); // E S T E  É  U M  T E X T O ! ! ! !
