function testingScope(escopo) {
  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}
testingScope(true);

// 2

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const ascending = oddsAndEvens.sort((a, b) => a - b);

let message = '';

for(let each of ascending){
  message = message.concat(`${each} `);
}

console.log(`Os números ${message}se encontram ordenados de forma crescente!`);