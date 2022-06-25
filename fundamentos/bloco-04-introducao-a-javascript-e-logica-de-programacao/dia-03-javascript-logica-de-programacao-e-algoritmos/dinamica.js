//Exercicio 1

let soma = 0;

for (let index = 1; index <= 50; index++) {
  soma = soma + index
}

console.log(soma);

//Exercicio 2

let qtd = 0;

for (let index = 3; index <= 150; index++) {
  if(index%3 === 0){
    qtd = qtd + 1;
  }
}

if(qtd === 50){
  console.log('Mensagem secreta.');
}

//Exercicio 3

let jogadorUm = "pedra";
let jogadorDois = "papel";

if(jogadorUm === "pedra" && jogadorDois === "papel"){
  console.log('Jogador um perdeu.')
} else if (jogadorUm === "pedra" && jogadorDois === "tesoura"){
  console.log('Jogador um ganha.')
} else if (jogadorUm === "pedra" && jogadorDois === "pedra"){
  console.log('Jogador um ganha.')
}