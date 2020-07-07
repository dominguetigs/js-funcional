const numeros = [4, 8, 3, 2, 9, 1, 9, 3];

// #3 - Recursividade
function somarArray(array, total = 0) {
  if (!array.length) {
    return total;
  }
  return somarArray(array.slice(1), total + array[0]);
}

const total = somarArray(numeros);

console.log(total);

// #2 - Reduce
// const somar = (a, b) => a + b;
// const total = numeros.reduce(somar);
// console.log(total);

// #1 - Dados mutáveis
// let total = 0;

// for (let i = 0; i < numeros.length; i++) {
//   total += numeros[i];
// }

// console.log(total);
