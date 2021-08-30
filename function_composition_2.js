/**
 * se o valor de acc for uma promise, tenho que divulgá-lo para
 * que seja resolvido para que possa passar o acc para a
 * função e fazer a próxima etapa
 */
function composition(...functions) {
  return function (value) {
    return functions.reduce(async (acc, fn) => {
      // verifica se é uma promise
      if (Promise.resolve(acc) === acc) {
        return fn(await acc); // espera a promise ser resolvida
      } else {
        return fn(acc);
      }
    }, value);
  };
}

const scream = (text) => text.toUpperCase();
const emphasize = (text) => `${text}!!!!!!!!!!`;
const slow = (text) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(text.split("").join(" ")), 3000);
  });

const exaggerated = composition(scream, emphasize, slow);
const aLittleExaggerated = composition(scream, emphasize);

exaggerated("stop").then(console.log); // S T O P ! ! ! ! ! ! ! ! ! !
aLittleExaggerated("be careful").then(console.log); // BE CAREFUL!!!!!!!!!!
