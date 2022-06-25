// Exercicio 4
console.log('\nExercicio 4:');

let numeroMax = 50;
let qtdDivisivel = 0;
let maiorPrimo = 0;

for(let numero = 0; numero<numeroMax; numero++){
  for(let index = 0; index<=numero; index++){
    if(numero % index == 0){
      qtdDivisivel++;
    }
  }
  if(qtdDivisivel === 2){
    console.log('Numero:', numero);
    maiorPrimo = numero;
  }
  qtdDivisivel = 0;
}

console.log('Maior primo:', maiorPrimo);
