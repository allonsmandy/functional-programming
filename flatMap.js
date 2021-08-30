/* flatmap */

const letters = [['H', 'e', ['l'], 'l', 'o'], [' '], ['W', 'o', [['r'], 'l'], 'd']].flat(Infinity)
const result = letters.map(letter => letter.toUpperCase()).reduce((acc, letter) => acc + letter)

console.log(result) // HELLO WORLD