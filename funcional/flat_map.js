const letrasAninhadas = [
  ['O', ['l'], 'á'],
  [' '],
  ['m', ['u', ['n']], 'd', 'o'],
  ['!', '!', '!', '!'],
];

const letras = letrasAninhadas.flat(Infinity);

console.log(letras);

const resultado = letras
  .map((letra) => [letra.toUpperCase()])
  .flatMap((letra) => letra)
  .reduce((accumulator, letra) => accumulator + letra);

console.log(resultado);
