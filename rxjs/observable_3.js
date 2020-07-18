// Desafio!
// Criar uma stream de números
// entre min e max com Observable!

const { Observable, noop } = require('rxjs');

function entre(min, max) {
  if (min > max) {
    [min, max] = [max, min];
  }

  return Observable.create((subscriber) => {
    Array(max - min)
      .fill()
      .map((_, index) => {
        subscriber.next(min + index);
      });
    subscriber.complete();
  });
}

entre(4, 10).subscribe(console.log, noop, () => console.log('Fim!'));
