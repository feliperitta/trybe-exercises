// Exercicio 1
let a1 = 5
let b1 = 3

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a%b)

// Exercicio 2
const a2 = 5
const b2 = 2

if (a2 >= b2){
  console.log(a2)
} else {
  console.log(b2)
}

// Exercicio 3
const a3 = 3
const b3 = 5
const c3 = 9

if (a3 >= b3 && a3 >= c3) {
  console.log(a3)
} else if (b3 >= a3 && b3 >= c3) {
  console.log(b3)
} else {
  console.log(c3)
}

// Exercicio 4

const a4 = 32

if (a4 > 0){
  console.log('Positive')
} else if (a4 < 0) {
  console.log('Negative')
} else {
  console.log('Zero')
}

// Exercicio 5

const a5 = 30
const b5 = 60
const c5 = 90

if (a5 + b5 + c5 == 180){
  console.log(true)
} else {
  console.log(false)
}

// Exercicio 6

let peca = 'Bispo';
peca = peca.toLocaleLowerCase();

switch (peca){
  case 'bispo':
    console.log('diagonal');
    break;
  case 'rainha':
    console.log('diagonal, horizontal e vertical');
    break;
  case 'torre':
    console.log('horizontal e vertical');
    break;
  case 'cavalo':
    console.log('L')
    break;
  case 'peão':
    console.log('uma casa a frente');
    break;
  case 'rei':
    console.log('Uma casa: diagonal, horizontal ou vertical.');
    break;
  default:
    console.log('Deu probleminha');
    break;
}

// Exercicio 7

const nota = 64

if (nota > 100 || nota < 0){
  console.log('Nota invaldia')
} else if (nota >= 90){
  console.log('A')
} else if (nota >= 80 && nota < 90){
  console.log('B')
} else if (nota >= 70 && nota < 80){
  console.log('C')
} else if (nota >= 60 && nota < 70){
  console.log('D')
} else if (nota >= 50 && nota < 60){
  console.log('E')
} else if (nota < 50){
  console.log('F')
}

// Exercicio 8

const a8 = 2
const b8 = 4
const c8 = 15

if (a8 % 2 == 0 || b8 % 2 == 0 || c8 % 2 == 0){
  console.log(true)
} else {
  console.log(false)
}

// Exercicio 9

const a9 = 2
const b9 = 4
const c9 = 2

if (a9 % 2 != 0 || b9 % 2 != 0 || c9 % 2 != 0){
  console.log(true)
} else {
  console.log(false)
}

// Exercicio 10

const valorCusto = 2000
const valorCustoTotal = valorCusto + (valorCusto*0.20)
const valorVenda = valorCustoTotal*1.20
const valorLucro = valorVenda - valorCusto

if(valorCusto < 0){
  console.log('Erro')
} else {
  console.log(valorLucro)
}

// Exercicio 11

let salario = 3000.00
let inss, ir;

if(salario <= 1556.94){
  inss = salario*0.08
} else if (salario >= 1556.95 && salario <= 2594.92) {
  inss = salario*0.09
} else if (salario >= 2594.93 && salario <= 5189.82) {
  inss = salario*0.11
} else if (salario > 5189.82) {
  inss = 570.88
}

salario -= inss

if(salario >= 1903.99 && salario <= 2826.65){
  ir = (salario*0.075) - 142.80
} else if (salario >= 2826.66 && salario <= 3751.05){
  ir = (salario*0.15) - 354.80
} else if (salario >= 3751.06 && salario <= 4664.68){
  ir = (salario*0.225) - 636.13
} else if (salario > 4664.68){
  ir = (salario*0.275) - 869.36
}

salario -= ir
console.log(salario)