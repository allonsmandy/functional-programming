/**
 * compõe a execução das duas funções em um determinado valor
 */
function composition(...functions) {
  return function (value) {
    return functions.reduce((acc, fn) => {
      return fn(acc);
    }, value);
  };
}

const scream = (text) => text.toUpperCase();
const emphasize = (text) => `${text}!!!!!!!!!!`;
const slow = (text) => text.split("").join(" ");

const result = composition(scream, emphasize, slow)("stop");
console.log(result); // S T O P ! ! ! ! ! ! ! ! ! !

/**
 * um dos maiores argumentos da programação funcional
 * é justamente a composição de funções, é como se você estivesse 
 * construindo lego. 
 * - pequenas funções com alto grau de reutilização
 * - as funções de composição tornam-se fáceis
 * neste exemplo, estamos usando currying para passar
os parâmetros de forma parseal
*/

// Consegui salvar minha composição de funções para chamá-lo, então não preciso replicar as mesmas etapas
const exaggerated = composition(scream, emphasize, slow);

const result_1 = exaggerated("stop"); // S T O P ! ! ! ! ! ! ! ! ! !
const result_2 = exaggerated("be careful"); // B E   C A R E F U L ! ! ! ! ! ! ! ! ! !
console.log(result_1, result_2);
