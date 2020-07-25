const path = require('path');
const fn = require('./funcoes');

const { toArray, map, groupBy, mergeMap } = require('rxjs/operators');
const _ = require('lodash');

const caminho = path.join(__dirname, '..', 'legendas');

const simbolos = [
  '.',
  '?',
  '!',
  '-',
  ',',
  '"',
  '♪',
  '_',
  '<i>',
  '</i>',
  '\r',
  '[',
  ']',
  '(',
  ')',
];

fn.lerDiretorio(caminho)
  .pipe(
    fn.elementosTerminadosCom('.srt'),
    fn.lerArquivo(),
    fn.separarTextoPor('\n'),
    fn.removerElementosSeVazio(),
    fn.removerElementosSeIniciarComNumero(),
    fn.removerSimbolos(simbolos),
    fn.separarTextoPor(' '),
    fn.removerElementosSeVazio(),
    fn.removerElementosSeIniciarComNumero(),
    groupBy((palavra) => palavra),
    mergeMap((grupo) => grupo.pipe(toArray())),
    map((palavras) => ({ elemento: palavras[0], quantidade: palavras.length })),
    toArray(),
    map((array) => _.sortBy(array, (elemento) => -elemento.quantidade))
  )
  .subscribe(console.log);
