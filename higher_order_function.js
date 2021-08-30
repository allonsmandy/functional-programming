/**
 * funções que operam em outras funções, tomando-as como
 * argumentos ou retornando-as, são chamadas higher-order functions.
 */
function exec(fn, ...params) {
  return function (initialText) {
    return `${initialText} ${fn(...params)}!`;
  };
}

function sum(a, b, c) {
  return a + b + c;
}

function mult(a, b) {
  return a * b;
}

const result_1 = exec(sum, 4, 5, 6)("O resultado da soma é");
const result_2 = exec(mult, 30, 10)("O resultado da multiplicação é");

console.log(result_1); // O resultado da soma é 15!
console.log(result_2); // O resultado da multiplicação é 300!
