/**
 * uma função pura é uma função em que o valor de retorno é
 * determinado apenas por seus valores de entrada, sem efeitos
 * colaterais observáveis.
 * o beneficio principal é a facilidade para testar.
 */

const PI = 3.14;

// função impura. PI é um valor externo.
function areaCirc(radius) {
  return radius * radius * PI;
}
console.log(areaCirc(10)); // 314

// função pura
function areaCircPure(radius, pi) {
  return radius * radius * pi;
}
console.log(areaCircPure(10, 3.14)); // 314
