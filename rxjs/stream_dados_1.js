function gerarNumeros() {
  return {
    iniciar(fn, intervalo) {
      let numero = 0;
      const i = setInterval(() => fn((numero += 1)), intervalo);

      return {
        parar() {
          clearInterval(i);
        },
      };
    },
  };
}

const temp1 = gerarNumeros();
const exec11 = temp1.iniciar((numero) => {
  console.log(`#1.1: ${numero * 2}`);
}, 1000);

const exec12 = temp1.iniciar((numero) => {
  console.log(`#1.2: ${numero * 2}`);
}, 500);

const temp2 = gerarNumeros();
const exec2 = temp2.iniciar((numero) => {
  console.log(`#2: ${numero + 100}`);
}, 2000);

setTimeout(() => {
  exec11.parar();
  exec2.parar();
}, 10000);

setTimeout(exec12.parar, 12000);
