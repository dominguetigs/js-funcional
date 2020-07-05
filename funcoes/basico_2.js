// 1) Passa um a função por parâmetro para outra função
function getFunction(fn) {
  if (typeof fn === 'function') {
    fn();
  }
}

function helloWorld() {
  console.log('Hello World!');
}

getFunction(helloWorld);

// 2) Retorna uma função a partir de outra função
function potencia(base) {
  return function (exp) {
    return Math.pow(base, exp);
  };
}

const pot23 = potencia(2)(3);

console.log(pot23);
