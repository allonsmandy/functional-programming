// sem currying
function textWithSize(min, max, error, text) {
  const size = (text || "").trim().length;

  if (size < min || size > max) {
    throw error;
  }
}
const product = { name: "A", price: 14.99, discount: 0.25 };
textWithSize(4, 255, "ERROR: Nome inválido!", product.name);

// com currying
/**
 * Posso reutilizar e criar versões diferentes por causa do currying
 * Posso analisar versões da função
 * Posso criar versões intermediárias das funções
 */

function myTextWithSize(min) {
  return function (max) {
    return function (error) {
      return function (text) {
        // Lazy Evaluation
        const size = (text || "").trim().length;
        if (size < min || size > max) {
          throw error;
        }
      };
    };
  };
}
const myProduct = { name: "A", price: 14.99, discount: 0.25 };

// posso usar apenas uma parte da lógica da função
const forceSize = myTextWithSize(4)(255);
const productName = forceSize("ERROR: Nome do produto é inválido!");
productName(myProduct.name);

// Posso reutilizar os dados já definidos em uma função
forceSize("ERROR: Nome inválido")(myProduct.name);
