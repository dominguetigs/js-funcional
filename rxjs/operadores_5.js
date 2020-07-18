const { of, Observable } = require('rxjs');

function terminadoCom(parteFinal) {
  return function (source) {
    return Observable.create((subscriber) => {
      source.subscribe({
        next(valor) {
          if (Array.isArray(valor)) {
            subscriber.next(
              valor.filter((elemento) => elemento.endsWith(parteFinal))
            );
          } else if (valor.endsWith(parteFinal)) {
            subscriber.next(valor);
          }
        },
        error(e) {
          subscriber.error(e);
        },
        complete() {
          subscriber.complete();
        },
      });
    });
  };
}

of(['Ana Silva', 'Maria Silva', 'Pedro Rocha'])
  .pipe(terminadoCom('Silva'))
  .subscribe(console.log);
