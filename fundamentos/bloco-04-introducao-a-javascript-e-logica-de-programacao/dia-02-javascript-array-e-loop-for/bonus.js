let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let indexOne, indexTwo;
let reserva;
let numbersCrescente = numbers;
let numbersDecrescente = numbers;
let numberMultiplicado = numbers;

//Exercicio 1:
console.log("Exercicio 1: ");

for(indexOne in numbersCrescente){
  for(indexTwo in numbersCrescente){
    if(numbersCrescente[indexTwo] > numbersCrescente[indexOne]){
      reserva = numbersCrescente[indexTwo]
      numbersCrescente[indexTwo] = numbersCrescente[indexOne]
      numbersCrescente[indexOne] = reserva
    }
  }
}

console.log(numbersCrescente);

//Exercicio 2:
console.log("Exercicio 2: ");

for(indexOne in numbersDecrescente){
  for(indexTwo in numbersDecrescente){
    if(numbersDecrescente[indexTwo] < numbersDecrescente[indexOne]){
      reserva = numbersDecrescente[indexTwo]
      numbersDecrescente[indexTwo] = numbersDecrescente[indexOne]
      numbersDecrescente[indexOne] = reserva
    }
  }
}

console.log(numbersDecrescente);

//Exercicio 3:
console.log('ui:')
console.log(numberMultiplicado);

//for(let index = 0; index < numberMultiplicado.length; index++)

for(let index in numberMultiplicado) {
  index = parseInt(index)

  //console.log(index);
  //console.log(numberMultiplicado[index]);
  //console.log('comparando:', index, 'com:', numberMultiplicado.length-1);
  
  if(index == numberMultiplicado.length-1){
    numberMultiplicado[index] = numberMultiplicado[index] * 2
    console.log('if ', typeof numberMultiplicado[index]);
  } else {
    console.log('index+1', typeof index);
    numberMultiplicado[index] = numberMultiplicado[index+1] + numberMultiplicado[index];
    console.log('else ', typeof numberMultiplicado[index]);
  }
}
//console.log(numberMultiplicado);