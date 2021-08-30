const x = 3;

function out() {
  const x = 97;

  function sum() {
    return x + 3;
  }
  return sum();
}

module.exports = out();
