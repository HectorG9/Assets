let prompt = require('prompt-sync')();
let produtos;
valor = parseFloat(prompt('Qual o valor do produto? R$'))
do {
    produtos = prompt('Deseja digitar mais produtos (S/N) ?  ');
    console.log('O valor é R$', valor);
    valor += valor 
}
while (produtos != 'n');

   