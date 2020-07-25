// Esperar 3000ms
// Gerar números a cada 500ms
const { timer, Subscription } = require('rxjs');

const observer = timer(3000, 500);

const subscription1 = observer.subscribe((number) => {
  console.log(`#1 Gerou o número ${number}`);
});

const subscription2 = observer.subscribe((number) => {
  console.log(`#2 Gerou o número ${number}`);
});

const subscription = new Subscription();
subscription.add(subscription1);
subscription.add(subscription2);

// Depois de 10000ms -> unsubscribe
setTimeout(() => {
  subscription.unsubscribe();
}, 10000);
