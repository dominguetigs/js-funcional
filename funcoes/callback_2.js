const fs = require('fs');
const path = require('path');

const caminho = path.join(__dirname, 'dados.txt');

console.log('Async init...');
fs.readFile(caminho, (_, conteudo) => console.log(conteudo.toString()));
console.log('Async end...');

console.log('Sync init...');
const conteudo = fs.readFileSync(caminho);
console.log(conteudo.toString());
console.log('Sync end...');
