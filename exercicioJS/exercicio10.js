let prompt = require('prompt-sync')();

n1 = parseInt(prompt('Digite um número: '))
n2 = parseInt(prompt('Digite outro número: '))

if (n1 > n2) {
    console.log('O maior valor é ', n1 + ' e o menor é ', n2);
}
else {
    console.log('O maior valor é ', n2 + ' e o menor é ', n1)
}

