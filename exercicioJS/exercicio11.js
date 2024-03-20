console.log('==================== Tabuada! =====================')
let prompt = require('prompt-sync')();
let i = 0;
let n1
console.log('1 - Soma; 2 - Subtração; 3 - Multiplicação; 4 - Divisão')
pos = parseInt(prompt('Digite a tabuada: '))
n1 = parseInt(prompt('Digite um número e mostrarei sua tabuada!: '));
console.log('Você digitou um número válido: ' + n1);
switch (pos) {
    case 1: 
        while (i <= 10) {
            console.log(n1, '+', i, ' = ', n1 + i);
            i ++
        }
        break;
    case 2: 
        while (i <= 10) {
            console.log(n1, '-', i, ' = ', n1 - i);
            i ++
        }
        break;
    case 3: 
        while (i <= 10) {
            console.log(n1, 'x', i, ' = ', n1 * i);
            i ++ 
        }
        break;
    case 4: 
        while(i <= 10) {
            console.log(n1, '/', i, ' = ', n1/i);
            i ++
            
        }
        break;
}

console.log('==========================================')