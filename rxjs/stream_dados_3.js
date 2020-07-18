const { interval } = require('rxjs');

const gerarNumeros = interval(500);

const subscription1 = gerarNumeros.subscribe((numero) => {
  console.log(Math.pow(2, numero));
});

const subscription2 = gerarNumeros.subscribe(console.log);

setTimeout(() => subscription1.unsubscribe(), 8000);
setTimeout(() => subscription2.unsubscribe(), 6000);
