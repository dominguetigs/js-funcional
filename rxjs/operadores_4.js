const { from, Observable } = require('rxjs');

function primeiro() {
  return function (source) {
    return Observable.create((subscriber) => {
      source.subscribe({
        next(valor) {
          subscriber.next(valor);
          subscriber.complete();
        },
      });
    });
  };
}

function nenhum() {
  return function (source) {
    return Observable.create((subscriber) => {
      source.subscribe({
        next(_) {
          subscriber.complete();
        },
      });
    });
  };
}

function ultimo() {
  return function (source) {
    let ultimo;
    return Observable.create((subscriber) => {
      source.subscribe({
        next(valor) {
          ultimo = valor;
        },
        complete() {
          if (ultimo !== undefined) {
            subscriber.next(ultimo);
          }
          subscriber.complete();
        },
      });
    });
  };
}

from([1, 2, 3, 4, 5])
  .pipe(
    // primeiro(),
    // nenhum(),
    ultimo()
  )
  .subscribe(console.log);
