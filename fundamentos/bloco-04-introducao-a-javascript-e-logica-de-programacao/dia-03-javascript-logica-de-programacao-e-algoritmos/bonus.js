let n = 10
let texto = '';
/*
// Exercicio 1

for(let index = 0; index<n; index++){
  for(let indexTwo = 0; indexTwo<n; indexTwo++){
    texto = texto + "*";
  }
  texto = texto + '\n'
}

console.log(texto);
*/

/*
// Exercicio 2

for(let index = 0; index < n; index++){
  for(let indexTwo = 0; indexTwo < index+1; indexTwo++){
    texto = texto + "*";
  }
  texto = texto + '\n';
}   

console.log(texto);
*/

/*
// Exercicio 3

let count = n - 1;
let index;
let index2;
let index3;

for(let index = 0; index < n; index++){
  for(index2 = 0; index2<count; index2++){
    texto = texto + " ";
  }
  for(index3 = 0; index3<n-index2; index3++){
    texto = texto + "*";
  }
  texto = texto + '\n';
  count--;
}

console.log(texto);
*/

/*
//Exercicio 4

let count;
let count2 = 0;
let countReserva;

let index;
let index2;
let index3;

count = (n - 1)/2
// count = 3

// for = repetir os 3 for
// primeiro for interno = colocar os espaços a esquerda
// segundo for interno = colocar *

for(let index = 0; index < n; index+=2){
  for(let index2 = 0; index2 < count; index2++){
    texto = texto + " ";
  }
  for(let index3 = count*2; index3 < n; index3++){
    texto = texto + "*";
    //console.log(count2)
  }
  texto = texto + "\n";
  count--;
}

console.log(texto);
*/

// Exercicio 5
console.log('\nExercicio 5:');


let count;
let count2 = 0;
let countReserva;

let index;
let index2;
let index3;

count = (n - 1)/2
// count = 3

// for = repetir os 2 for
// primeiro for interno = colocar os espaços a esquerda
// for do index3 = coloca os *
// count2 = index/2

for(let index = 0; index < n; index+=2){
  for(let index2 = 0; index2 < count; index2++){
    texto = texto + " ";
  }
  for(let index3 = count*2; index3 < n; index3++){
    if(index3 == count*2){
      count2 = index-1;
    }
    if(index == 0){
      //topo
      texto = texto + "*\n";
    } else if(index == n-1 || index == n-2){
        //base 
        texto = texto + "*";
    } else if(texto.slice(-1) == "*"){
        //internos
         for(let index4 = 0; index4<count2; index4++){
           texto = texto + ' ';
         }
        texto = texto + "*\n";
        count2--;
    } else if (texto.slice(-1) == " "){
        //externos
        texto = texto + "*";
    }
  }
  count--;
}
// 28 linhas do for
console.log(texto);

// // Exercicio 6
// console.log('\nExercicio 6:');

// let numero = 8;
// let qtdDivisivel = 0;

// for(let index = 1; index<=numero; index++){
//   if(numero % index == 0){
//     qtdDivisivel++;
//   }
// }

// if(qtdDivisivel === 2){
//   console.log('Numero', numero, 'é um numero primo.');
// } else {
//   console.log('Numero', numero, 'não é um numero primo.');
// }
