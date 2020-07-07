function composicao(...fns) {
  return function (valor) {
    return fns.reduce(async (accumulator, fn) => {
      if (Promise.resolve(accumulator) === accumulator) {
        return fn(await accumulator);
      }
      return fn(accumulator);
    }, valor);
  };
}

function gritar(texto) {
  return texto.toUpperCase();
}

function enfatizar(texto) {
  return `${texto}!!!!`;
}

function tornarLento(texto) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(texto.split('').join(' ')), 3000);
  });
}

const exagerado = composicao(gritar, enfatizar, tornarLento);
const umPoucoMenosExagerado = composicao(gritar, enfatizar);

exagerado('para').then(console.log);
umPoucoMenosExagerado('cuidado com o buraco!!!').then(console.log);
