console.log('==========================MENU CARDÁPIO=====================')
let prompt = require('prompt-sync')();
pos = parseInt(prompt('Escolha o seu lanche: '));

switch(pos) {
    case 1:
        console.log('Hamburguer e fritas!');

        pos1 = parseInt(prompt('Escolha a bebida: '));
        switch (pos1) {
            case 1: 
                console.log('Coca Cola');
                break;
            case 2:
                console.log('Guaraná');
                break;
            case 3:
                console.log('Suco Natural');
                break;
            default:
                console.log('Erro no sistema!')
                break;
    }
    case 2:
        console.log('Pizza!')
        pos2 = parseInt(prompt('Escolha o sabor: '))
        switch (pos2) {
            case 1: 
                console.log('Calabresa')
                break;
            case 2: 
                console.log('Portuguesa')
                break;
            case 3: 
                console.log('Margarita')
                break;
            default:
                console.log('Erro no sistema!')
                break;
    }
    case 3:
        console.log('Pastel')
        pos3 = parseInt(prompt('Escolha o acompanhamento: '))
        switch (pos3) {
            case 1:
                console.log('Caldo de cana')
                break;
            case 2: 
                console.log('Caldo de cana + limão')
                break;
            default:
                console.log('Erro no sistema!')
                break;
    }
    default:
        console.log('Erro no sistema!')
        break;
}
console.log('===========================================================')