// a variavel i começa em 0 e é incrementada en 1 a cada iteração até que a condição i < 5 não seja mais verdadeira.
/*for (let i = 0; i < 5; i ++) {
    console.log('Número ' + i); 
}
let contador = 0
while (contador < 5) {
    console.log('Contador: ' + contador);
    contador ++;
}
let x = 0
do {
    console.log('numero: ' + x );
    x++;
} while (x < 5);
*/
const nomes = ['Alice', 'Bob', 'Carol', 'David', 'Eva'];

//Usando um loop FOR
// percorre cada valor dentro da array e mostra 1 por 1, até a última posição
/*for(let i = 0; i < nomes.length; i ++) {
    console.log(nomes[i])
}*/
   
// Usando um loop WHILE
/*let index = 0;
while (index < nomes.lenght){
    console.log(nomes[index])
    index ++;
}/*

// Usando um loop DO WHILE

/*let j = 0;
do {
    console.log(nomes[j]);
    j++;
} while (j < nomes.length);

let prompt = require('prompt-sync')();
let numero;
do {
    numero = prompt('Digite um número: ');
}
while (isNaN(numero));
console.log('Você digitou um número válido: ' + numero);
*/

/*for (let i = 10; i >= 1; i --) {
    console.log(i);
}*/
const tarefas = ['ler 5 livros', 'estudar a bolsa de valores', 'Estudar JavaScript', 'fazer academia'];

/*for (let i = 0; i < tarefas.length; i++) {
    console.log('tarefas: ' + tarefas[i]);
    //realizar outras operaçoes com cada tarefa    
}*/

