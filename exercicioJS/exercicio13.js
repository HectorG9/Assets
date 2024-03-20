let prompt = require('prompt-sync')();
n1 = parseInt(prompt('Digite o primeiro número: '));
n2 = parseInt(prompt('Digite o segundo: '));
n3 = parseInt(prompt('Digite o terceiro: '));
if (n1 > n2 & n1 > n3) {
    console.log('A ordem é: ', n1)
    if (n2 > n3) {
        console.log(n2, n3);
    }
    else {
        console.log(n3, n2);
    }
}
else if (n2 > n3 & n2 > n1){
    console.log('A ordem é: ', n2);
    if(n1 > n3) {
        console.log(n1, n3);
    }
    else{
        console.log(n3, n1);
    }
}
else {
    console.log('A ordem é: ', n3);
    if (n2 > n1){
        console.log(n2, n1)
    }
    else {
        console.log(n1, n2)
    }
}