const fs = require('fs');
const path = require('path');

function lerDiretorio(caminho) {
  return new Promise((resolve, reject) => {
    try {
      let arquivos = fs.readdirSync(caminho);
      arquivos = arquivos.map((arquivo) => path.join(caminho, arquivo));
      resolve(arquivos);
    } catch (e) {
      reject(e);
    }
  });
}

function elementosTerminadosCom(array, padrao) {
  /* const regex = new RegExp(`\\b${padrao}$\\b`);
  return array.filter((el) => regex.test(el)); */
  return array.filter((el) => el.endsWith(padrao));
}

function lerArquivo(caminho) {
  return new Promise((resolve, reject) => {
    try {
      const conteudo = fs.readFileSync(caminho, { encoding: 'utf-8' });
      resolve(conteudo.toString());
    } catch (e) {
      reject(e);
    }
  });
}

function lerArquivos(caminhos) {
  return Promise.all(caminhos.map(lerArquivo));
}

module.exports = {
  lerDiretorio,
  elementosTerminadosCom,
  lerArquivos,
};