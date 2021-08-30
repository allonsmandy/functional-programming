function textWithSize(min) {
  return function (max) {
    return function (error) {
      return function (text) {
        const size = (text || "").trim().length;
        if (size < min || size > max) {
          throw error;
        }
      };
    };
  };
}

/**
 * Supomos que não quero que todas as funções gerem exceções,
 * eu quero criar UMA que encapsula o tratamento de erros.
 */

// sem currying
function applyValidation(fn, value) {
  try {
    fn(value);
  } catch (error) {
    return {
      error,
    };
  }
}

const product = { name: "A", price: 14.99, discount: 0.25 };
const forceSize = textWithSize(4)(255);
const productName = forceSize("ERROR: Nome do produto é inválido");

/**
 * Eu teria que chamar de novo, pois não consigo usar versões
 * intermediárias das funções, então ele duplica tudo novamente...
 */
console.log(applyValidation(productName, product.name));
console.log(applyValidation(productName, "outro produto"));

// com currying (lazy evaluation)
function myApplyValidation(fn) {
  return function (value) {
    try {
      fn(value);
    } catch (error) {
      return {
        error,
      };
    }
  };
}

const validatesName = myApplyValidation(productName);
console.log(validatesName(product.name));
console.log(validatesName("outro produto"));
