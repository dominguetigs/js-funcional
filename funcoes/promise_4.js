function generateNumberBetween(min, max, time = 2000) {
  if (min > max) {
    [min, max] = [max, min];
  }

  return new Promise((resolve) => {
    const fator = max - min + 1;
    const aleatorio = parseInt(Math.random() * fator, 10) + min;
    setTimeout(() => resolve(aleatorio), time);
  });
}

function generateManyRandomizedNumbers() {
  return Promise.all([
    generateNumberBetween(1, 60),
    generateNumberBetween(1, 60, 3000),
    generateNumberBetween(1, 60, 5000),
    generateNumberBetween(1, 60, 500),
    generateNumberBetween(1, 60),
    generateNumberBetween(1, 60, 1000),
  ]);
}

function reducer(numbers) {
  return numbers.reduce((acc, cur) => acc + cur);
}

function isEvenOrOdd(number) {
  const message = number % 2 === 0 ? 'Even' : 'odd';
  console.log(message);
  return number;
}

generateManyRandomizedNumbers()
  .then(reducer)
  .then(isEvenOrOdd)
  .then(console.log);
