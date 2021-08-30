// sem currying
const sum = (a, b, c) => a + b + c;
console.log(sum(1, 2, 3)); // 6

// com currying
function mySum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
console.log(mySum(1)(2)(3)); // 6
