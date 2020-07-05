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

fn.lerDiretorio(caminho)
  .then(fn.elementosTerminadosCom('.srt'))
  .then(fn.lerArquivosSRT)
  .then((conteudos) => conteudos.join('\n'))
  .then((todoConteudo) => todoConteudo.split('\n'))
  .then(fn.removerElementosSeVazio)
  .then(fn.removerElementosSeIncluir('-->'))
  .then(fn.removerElementosSeApenasNumero)
  .then(fn.removerSimbolos(simbolos))
  .then(console.log);
