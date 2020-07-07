// Functors são objetos que implementam a função MAP
// que também é um 'wrapper' de um valor

// ARRAY é um exemplo de FUNCTOR
const numeros = [1, 2, 3, 4, 5, 6];
const novosNumeros = numeros
  .map((numero) => numero + 10)
  .map((numero) => numero * 2);

console.log(numeros, novosNumeros);

function TipoSeguro(valor) {
  function invalido() {
    return valor === null || valor === undefined;
  }

  return {
    valor,
    map(fn) {
      const novoValor = !invalido() ? fn(valor) : valor;
      return TipoSeguro(novoValor);
    },
  };
}

const original = 'Esse é um texto';
const alterado = TipoSeguro(original)
  .map((texto) => texto.toUpperCase())
  .map((texto) => `${texto}!!!!`)
  .map((texto) => texto.split('').join(' '));

console.log(alterado);
console.log(original, alterado.valor);
