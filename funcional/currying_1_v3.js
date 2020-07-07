function textoComTamanhoEntre(min) {
  return function (max) {
    return function (erro) {
      return function (texto) {
        const tamanho = (texto || '').trim().length;

        if (tamanho < min || tamanho > max) {
          throw erro;
        }
      };
    };
  };
}

function aplicarValidacao(fn) {
  return function (valor) {
    // Lazy evaluation
    try {
      fn(valor);
    } catch (e) {
      return { error: e };
    }
  };
}

const forcarTamanhoPadrao = textoComTamanhoEntre(4)(255);
const forcarNomeProdutoValido = forcarTamanhoPadrao('Nome produto inválido!');
const validarNomeProduto = aplicarValidacao(forcarNomeProdutoValido);

const produto1 = { nome: 'A', preco: 14.99, desconto: 0.25 };

console.log(validarNomeProduto(produto1.nome));
