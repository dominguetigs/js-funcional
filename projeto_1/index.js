const path = require('path');
const fn = require('./funcoes');

const caminho = path.join(__dirname, '..', 'legendas');

fn.lerDiretorio(caminho).then((arquivos) => console.log(arquivos));
