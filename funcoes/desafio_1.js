// Criar uma função somar que siga a seguinte estratégia: somar(3)(4)(5)
function somar(n1) {
  return function (n2) {
    return function (n3) {
      return n1 + n2 + n3;
    };
  };
}

const somaTotal = somar(3)(4)(5);

console.log(somaTotal);

// Criar uma função calcular com a seguinte estratégia: calcular(3)(7)(fn)
// Onde fn pode ser:
// fn -> 3 * 7
// fn -> 3 / 7
// fn -> 3 + 7
// fn -> 3 - 7
function mult(n1, n2) {
  return n1 * n2;
}

function div(n1, n2) {
  return n1 / n2;
}

function sum(n1, n2) {
  return n1 + n2;
}

function sub(n1, n2) {
  return n1 - n2;
}

function calculate(n1) {
  return function (n2) {
    return function (fn) {
      if (typeof fn === 'function') {
        return fn(n1, n2);
      }
    };
  };
}

const calc = calculate(3)(7);

const multTotal = calc(mult);
const divTotal = calc(div);
const sumTotal = calc(sum);
const subTotal = calc(sub);

console.log(multTotal, divTotal, sumTotal, subTotal);
