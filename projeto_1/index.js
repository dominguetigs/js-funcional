const path = require('path');
const fn = require('./funcoes');

const caminho = path.join(__dirname, '..', 'legendas');

fn.lerDiretorio(caminho)
  .then(fn.elementosTerminadosCom('.srt'))
  .then(fn.lerArquivosSRT)
  .then((conteudos) => conteudos.join('\n'))
  .then((todoConteudo) => todoConteudo.split('\n'))
  .then(fn.removerElementosSeVazio)
  .then(fn.removerElementosSeIncluir('-->'))
  .then(fn.removerElementosSeApenasNumero)
  .then(console.log);
