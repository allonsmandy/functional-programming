/**
 * Diz-se que uma linguagem de programação possui funções de primeira-classe
 * quando funções nessa linguagem são tratadas como qualquer outra variável
 */

const x = 3;
const y = function (text) {
  return `Isto é um texto: ${text}`;
};
const z = () => console.log("Zzzz!");

console.log(x); // 3
console.log(y("Hey Mands!")); // Isto é um texto: Hey Mands!
z(); // Zzzz!
