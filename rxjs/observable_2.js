const { Observable } = require('rxjs');

const obs$ = Observable.create((subscriber) => {
  subscriber.next('RxJS');
  subscriber.next('é');
  subscriber.next('bem');
  subscriber.next('poderoso!');

  if (Math.random() > 0.5) {
    subscriber.complete('Fim!');
  } else {
    subscriber.error('Que problema ?!?');
  }
});

// obs$.subscribe(console.log, console.error, console.log);

obs$.subscribe({
  next(valor) {
    console.log(valor);
  },
  error(erro) {
    console.error(erro);
  },
  complete(mensagem) {
    console.log(mensagem);
  },
});
