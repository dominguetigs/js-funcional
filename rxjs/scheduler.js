const { from, asyncScheduler } = require('rxjs');
const { observeOn } = require('rxjs/operators');

// Por padrão os operadores do rxjs operam de forma síncrona
// Num contexto de execução `Scheduler` dá para tornar as operações
// assíncronas. Um exemplo disso, segue abaixo.

from([...Array(10).keys()])
  .pipe(observeOn(asyncScheduler))
  .subscribe(console.log);

console.log('Fim!');
