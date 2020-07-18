const { Observable } = require('rxjs');

const promise = new Promise((resolve) => {
  resolve('Promise é bem legal!');
});

promise.then(console.log);

const observer = new Observable((subscriber) => {
  subscriber.next('Observer');
  subscriber.next('é');
  subscriber.next('bem');
  setTimeout(() => {
    subscriber.next('legal!');
    // subscriber.complete();
  }, 1000);
});

observer.subscribe(console.log);
observer.subscribe((texto) => console.log(texto.toUpperCase()));
