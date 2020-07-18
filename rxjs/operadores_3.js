const { Observable } = require('rxjs');

function elementosComDelay(tempo, ...elementos) {
  return Observable.create((subscriber) => {
    (elementos || []).forEach((elemento, indice) => {
      const fator = indice + 1;
      setTimeout(() => {
        subscriber.next(elemento);

        if (elementos.length === fator) {
          subscriber.complete();
        }
      }, tempo * fator);
    });
  });
}

elementosComDelay(2000, 1, 'Bia', 3, false, 5, [1, 2, 3]).subscribe(
  console.log
);
