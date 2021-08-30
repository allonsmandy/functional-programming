function eager(number_1, number_2) {
  // processamento mais pesado
  const end = Date.now() + 2500;
  while (Date.now() < end) {}
  const value = Math.pow(number_1, 3);

  return value + number_2;
}

console.time("#1");
console.log(eager(3, 100));
console.log(eager(3, 200));
console.log(eager(3, 300));
console.timeEnd("#1");

// lazy version
function lazy(number_1) {
  // processamento mais rápido
  const end = Date.now() + 2500;
  while (Date.now() < end) {}
  const value = Math.pow(number_1, 3);

  return function (number_2) {
    return value + number_2;
  };
}

/**
 * com o curriyng a parte final será
 * processada apenas quando necessário */
console.time("#2");
const lazy3 = lazy(3);
console.log(lazy3(100));
console.log(lazy3(200));
console.log(lazy3(300));
console.timeEnd("#2");
