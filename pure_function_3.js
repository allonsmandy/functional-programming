let qtdExec = 0;

// função impura.
function sum(a, b) {
  qtdExec++; // efeito colateral observável
  return a + b;
}

console.log(sum(10, 20)); // 30
