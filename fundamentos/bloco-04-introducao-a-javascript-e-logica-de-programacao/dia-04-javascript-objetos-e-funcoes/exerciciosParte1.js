let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald'
};

// Exercicio 1
function darBoasVindas(){
  console.log('Bem-vinda, ' + info.personagem)
}
console.log('Exercicio 1:');
darBoasVindas()

// Exercicio 2
function inserirNovaPropriedade() {
  info.recorrente = 'Sim';
}
inserirNovaPropriedade()

// Exercicio 3
function mostrarChaves(objeto) {
  for(let key in objeto){
    console.log(key)
  }
}
console.log('\nExercicio 3:');
mostrarChaves(info)

// Exercicio 4
function mostrarValores(objeto) {
  for(let key in objeto){
    console.log(objeto[key])
  }
}
console.log('\nExercicio 4:');
mostrarValores(info)

// Exercicio 5
let infoDois = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};

function imprimirAmbosObjetos(objetoUm, objetoDois) {
  for(let key in objetoUm){
    if (key === 'recorrente') {
      console.log('Ambos recorrentes')
    }else {
      console.log(objetoUm[key] + ' e ' + objetoDois[key])
    }
  }
}
console.log('\nExercicio 5:');
imprimirAmbosObjetos(info, infoDois)

// Exercicio 6
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

