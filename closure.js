/**
 * closure é quando uma função lembra seu escopo léxico,
 * mesmo quando a função é executada fora desse escopo léxico
 */

const sum = require("./closure_scope");

const x = 1000;
console.log(sum); // 100
