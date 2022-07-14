const longestWord = string => {
  let sizes = [];
  for(let each of string.split(' ')){
    sizes.push(each.length);
  }
  console.log(string.split(' ')[sizes.indexOf(sizes[Math.max(...sizes)])]);
}

longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'
