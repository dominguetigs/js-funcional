// Pura ou impura?
// Impura - Retorno não é determinístico por conta da aleatoriedade.
function gerarNumeroAleatorio(min, max) {
  const fator = max - min + 1;
  return parseInt(Math.random() * fator) + min;
}
