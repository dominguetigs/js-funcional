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

function elementosTerminadosCom(padraoTextual) {
  /* const regex = new RegExp(`\\b${padraoTextual}$\\b`);
  return array.filter((el) => regex.test(el)); */
  return function (array) {
    return array.filter((el) => el.endsWith(padraoTextual));
  };
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

function lerArquivosSRT(caminhos) {
  return Promise.all(caminhos.map(lerArquivo));
}

function removerElementosSeVazio(array) {
  return array.filter((el) => el.trim());
}

function removerElementosSeIncluir(padraoTextual) {
  return function (array) {
    return array.filter((el) => !el.includes(padraoTextual));
  };
}

function removerElementosSeApenasNumero(array) {
  return array.filter((el) => {
    const num = parseInt(el.trim());
    return num !== num;
  });
}

module.exports = {
  lerDiretorio,
  elementosTerminadosCom,
  lerArquivosSRT,
  removerElementosSeVazio,
  removerElementosSeIncluir,
  removerElementosSeApenasNumero,
};
