// Esperar 3000ms
// Gerar números a cada 500ms
const { timer, Subject } = require('rxjs');
const { takeUntil } = require('rxjs/operators');

const observer = timer(3000, 500);

const unsubscribeAll = new Subject();

observer.pipe(takeUntil(unsubscribeAll)).subscribe((number) => {
  console.log(`#1 Gerou o número ${number}`);
});

observer.pipe(takeUntil(unsubscribeAll)).subscribe((number) => {
  console.log(`#2 Gerou o número ${number}`);
});

setTimeout(() => {
  unsubscribeAll.next();
  unsubscribeAll.complete();
}, 13000);
