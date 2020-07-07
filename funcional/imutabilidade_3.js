const pessoa = Object.freeze({
  nome: 'Maria',
  altura: 1.76,
  cidade: 'São Paulo',
  end: Object.freeze({
    rua: 'Feliz',
  }),
});

// Atribuição por Referência
// const novaPessoa = pessoa;
// novaPessoa.nome = 'João';
// novaPessoa.cidade = 'Fortaleza';

// Passagem por Referência
function alteraPessoa(pessoa) {
  // Shallow copy - Cópia rasa
  // Em casos de objetos o ideal seria um deep copy - cópia profunda
  const novaPessoa = { ...pessoa };
  novaPessoa.nome = 'João';
  novaPessoa.cidade = 'Fortaleza';
  novaPessoa.end.rua = 'ABC';
  return novaPessoa;
}

const novaPessoa = alteraPessoa(pessoa);

console.log(pessoa);
console.log(novaPessoa);

let a = 1;
let b = a; // Atribuição por valor (cópia!)

a++;
b--;

console.log(a, b);
