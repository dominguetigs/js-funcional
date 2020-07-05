const path = require('path');
const fn = require('./funcoes');

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

const mesclarConteudos = (conteudos) => conteudos.join('\n');
const separarPorLinhas = (todoConteudo) => todoConteudo.split('\n');

fn.lerDiretorio(caminho)
  .then(fn.elementosTerminadosCom('.srt'))
  .then(fn.lerArquivosSRT)
  .then(mesclarConteudos)
  .then(separarPorLinhas)
  .then(fn.removerElementosSeVazio)
  .then(fn.removerElementosSeIncluir('-->'))
  .then(fn.removerElementosSeApenasNumero)
  .then(fn.removerSimbolos(simbolos))
  .then(console.log);
