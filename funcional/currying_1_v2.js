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

const forcarTamanhoPadrao = textoComTamanhoEntre(4)(255);
const forcarNomeProdutoValido = forcarTamanhoPadrao('Nome produto inválido!');

const produto1 = { nome: 'A', preco: 14.99, desconto: 0.25 };
forcarNomeProdutoValido(produto1.nome);
