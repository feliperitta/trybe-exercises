let numbers = [5, 122, 3, 19, 70, 8, 100, 2, 35, 333];

// Exercicio 8 e 9
let array8 = [];
let valor8 = 1;

for (let i8 = 0 ; i8 < 25; i8++) {
  array8[i8] = valor8++
}
console.log(array8)

let resultado8 = [];
for (let index = 0; index<array8.length; index++){
  resultado8[index] = array8[index]/2
}
console.log(resultado8)

// Exercicio 7
let posicao7 = 0;

for(let i7 = 0; i7 < numbers.length; i7++){
  if (numbers[i7] <= numbers[posicao7]){
    posicao7 = i7
  }
} 

console.log("Menor número é:", numbers[posicao7])

// Exercicio 6

let qtdImpares = 0;

for (let i3 = 0; i3 < numbers.length ; i3++) {
  if(numbers[i3] % 2 === 0){
    qtdImpares++;
  }
}
console.log("Quantidade de impares:", qtdImpares)

// Exercicio 5
let posicao = 0;

for(let i2 = 0; i2 < numbers.length; i2++){
  if (numbers[i2] >= numbers[posicao]){
    posicao = i2
  }
} 

console.log("Maior número é:", numbers[posicao])

// Exercicio 3 e 4

let soma3 = 0,  media;

for (let i = 0 ; i < numbers.length ; i++){
  soma3+=numbers[i]
}

media = soma3/numbers.length

if (media > 20) {
  console.log("Media: ", media, "é maior que 20.")
} else {
  console.log("Media: ", media, "é menor ou igual a 20.")
}

// Exercicio 2
let soma2 = 0;

for (let i = 0 ; i < numbers.length ; i++){
  soma2+=numbers[i]
}

console.log(soma2)

// Exercicio 1

console.log(numbers)

