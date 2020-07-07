function ordenar(array) {
  return [...array].sort();
}

const numeros = [3, 1, 7, 9, 4, 6];
const numerosOrdenados = ordenar(numeros);

console.log(numeros, numerosOrdenados);

const partesDosNumeros = numeros.slice(1);

console.log(partesDosNumeros, numeros);
