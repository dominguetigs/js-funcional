const fs = require('fs');
const path = require('path');

function lerDiretorio(caminho) {
  return new Promise((resolve, reject) => {
    try {
      const arquivos = fs.readdirSync(caminho);
      const arquivosCompletos = arquivos.map((arquivo) => {
        return path.join(caminho, arquivo);
      });
      resolve(arquivosCompletos);
    } catch (e) {
      reject(e);
    }
  });
}

function _lerArquivo(caminho) {
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
  return Promise.all(caminhos.map(_lerArquivo));
}

function elementosTerminadosCom(padraoTextual) {
  /* const regex = new RegExp(`\\b${padraoTextual}$\\b`);
  return array.filter((el) => regex.test(el)); */
  return function (array) {
    return array.filter((el) => el.endsWith(padraoTextual));
  };
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

function removerSimbolos(simbolos) {
  return function (array) {
    return array.map((el) => {
      return simbolos.reduce((accumulator, currentValue) => {
        return accumulator.split(currentValue).join('');
      }, el);
    });
  };
}

function mesclarElementos(array) {
  return array.join(' ');
}

function separarTextoPor(simbolo) {
  return function (texto) {
    return texto.split(simbolo);
  };
}

function agruparElementos(elementos) {
  return Object.values(
    elementos.reduce((accumulator, currentValue) => {
      const elemento = currentValue.toLowerCase();
      const quantidade = accumulator[elemento]
        ? accumulator[elemento].quantidade + 1
        : 1;

      accumulator[elemento] = { elemento, quantidade };

      return accumulator;
    }, {})
  );
}

function ordenarPorAtributoNumerico(atributo, ordem = 'asc') {
  return function (array) {
    const asc = (objeto1, objeto2) => objeto1[atributo] - objeto2[atributo];
    const desc = (objeto1, objeto2) => objeto2[atributo] - objeto1[atributo];

    return array.sort(ordem === 'asc' ? asc : desc);
  };
}

module.exports = {
  lerDiretorio,
  lerArquivosSRT,
  elementosTerminadosCom,
  removerElementosSeVazio,
  removerElementosSeIncluir,
  removerElementosSeApenasNumero,
  removerSimbolos,
  mesclarElementos,
  separarTextoPor,
  agruparElementos,
  ordenarPorAtributoNumerico,
};
