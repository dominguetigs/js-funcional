// Funções que operam em outras funções,
// tomando-as como argumentos ou retornado-as,
// são chamadas higher-order functions.

function executar(fn, ...params) {
  return function (textoIncial) {
    return `${textoIncial} ${fn(...params)}`;
  };
}

function somar(a, b, c) {
  return a + b + c;
}

function multiplicar(a, b) {
  return a * b;
}

const resultado1 = executar(somar, 4, 5, 6)('O resultado da soma é');
const resultado2 = executar(
  multiplicar,
  30,
  40
)('O resultado da multiplicação é');

console.log(resultado1, resultado2);
