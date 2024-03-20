let prompt = require('prompt-sync')()
console.log('========================Calculadora!====================')
let n1;
let n2;
n1 = parseInt(prompt('Digite um número: '))
n2 = parseInt(prompt('Digite outro número: '))
let operaçao
console.log('Operações: 1 - Multiplicação, 2 - Divisão, 3 - Soma, 4 - Subtração')
operaçao = parseInt(prompt('Escolha uma operação: '))
multi = (n1 * n2)
div = (n1 / n2)
soma = (n1 + n2)
sub = (n1 - n2)
switch(operaçao){
    case 1:
        console.log('Operação de multiplicação: ')
        console.log('O resultado é: ', multi);
        break;    
    case 2:
        console.log('Operação de divisão: ')
        console.log('O resultado é: ', div);
        break;
    case 3:
        console.log('Operação de Soma: ')
        console.log('O resultado é: ', soma);
        break;
    case 4:
        console.log('Operação de Subtração: ')
        console.log('O resultado é: ', sub);
        break;
    default:
        console.log('Não existe!')
}
console.log('========================================================');