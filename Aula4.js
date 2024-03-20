let prompt = require('prompt-sync')();
let nota; 
let res;
nota = prompt('digite a nota do aluno: ')

if (nota>=60){
    if(nota >= 95){
        res ='Parabéns, ótima nota!';
    }
    else {
        res = 'Simplesmente aprovado!';
    }
}
else if (nota >= 40) {
    res = 'Recuperação!';
}
else{
    if (nota>=20){
        res ='Reprovado por nota baixa!';
    }
    else {
        res = 'Sua nota é péssima'
    }
}
console.log(res);
    