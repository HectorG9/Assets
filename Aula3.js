let prompt = require ('prompt-sync')();
//Declarando Variáveis
let idade;
let tempoT;
let salarioL;
let salarioB;
idade = prompt('Qual sua idade? ')
tempoT = prompt('Quanto tempo de trabalho? ')
salarioL = prompt('Qual seu salario liquido? ')
salarioB = prompt('Qual seu salario bruto por mes? ')

/* verdade se idade > 25, tempo de trabalho > 3, salario liquido > 2500,
Ou salario bruto por mês >= 9000 ou tempo de trabalho > 20 anos */

if ((idade > 25) & (tempoT > 3) & (salarioL >= 2500) || (salarioB >= 9000) || (tempoT > 20)) {
    console.log('Verdadeiro!')
}
else{
    console.log('Falso!')
}