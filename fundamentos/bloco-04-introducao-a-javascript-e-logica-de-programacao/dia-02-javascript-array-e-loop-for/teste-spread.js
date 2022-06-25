let numbers = [3, 4, 5, 2, 8]
let numbers2 = numbers;
let numbers3 = numbers;

let reserva;
//let numbers4 = [...numbers]

for(let indexOne in numbers2){
  for(let indexTwo in numbers2){
    if(numbers2[indexTwo] > numbers2[indexOne]){
      reserva = numbers2[indexTwo]
      numbers2[indexTwo] = numbers2[indexOne]
      numbers2[indexOne] = reserva
    }
  }
}

console.log(typeof numbers3[4])
//console.log(numbers4)