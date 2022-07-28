// 1 - Produza o mesmo resultado do código, porém utilizando o array destructuring para recolher a função e a saudação.

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

const [ola, xableu] = saudacoes;
xableu(ola)
// Produza o mesmo resultado acima, porém utilizando array destructuring

console.log('---');

// 3 - array abaixo possui alguns números que não condizem com o conteúdo que ele deveria possuir. Através de array destructuring, faça com que existam apenas números pares na variável numerosPares.

let numbers = [1, 3, 5, 6, 8, 10, 12];
const [a,b,c,d,e,f,g] = numbers
const numerosPares = [d, e, f, g]
console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo