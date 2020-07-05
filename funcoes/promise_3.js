function generateNumberBetween(min, max) {
  if (min > max) {
    [min, max] = [max, min];
  }

  return new Promise((resolve) => {
    const fator = max - min + 1;
    const aleatorio = parseInt(Math.random() * fator, 10) + min;
    resolve(aleatorio);
  });
}

generateNumberBetween(1, 2)
  .then((number) => number * 10)
  .then((number) => `The number is ${number}`)
  .then(console.log);
