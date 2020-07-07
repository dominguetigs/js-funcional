// Pura
function somar(a, b) {
  return a + b;
}

console.log(somar(68, 31));
console.log(somar(68, 31));
console.log(somar(68, 31));

let count = 0;

// Impura - efeito colateral observável
function somar2(a, b) {
  count++;
  return a + b;
}

console.log(count);
console.log(somar2(68, 31));
console.log(somar2(68, 31));
console.log(somar2(68, 31));
console.log(count);
