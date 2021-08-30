function order(array) {
  // pega todos os elementos e os coloca em uma nova matriz, a matriz original permanece a mesma
  return [...array].sort();
}

const numbers = [3, 1, 7, 9, 4, 6];
order(numbers); // não causou efeito colateral = [ 1, 3, 4, 6, 7, 9 ]
const orderingNumbers = order(numbers);
// numbers.sort() // causou mudança! = [ 1, 3, 4, 6, 7, 9 ]

const protectNumbers = Object.freeze([3, 4, 6, 1]);
protectNumbers.sort(); // nop
protectNumbers[0] = 1000; // nop

// não gera efeito colateral
const n = numbers.slice(2);
console.log(numbers); // [ 3, 1, 7, 9, 4, 6 ]
console.log(n); // [ 7, 9, 4, 6 ]
