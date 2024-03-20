let pessoas = [
    { nome: 'João', idade: 25 },
    { nome: 'Maria', idade: 30 },
    { nome: 'Pedro', idade: 20 }
  ];
  
  pessoas.sort(function(a, b) {
    return a.idade - b.idade;
  });
  
  console.log(pessoas);

