import books from './books.js'

function averageAge() {
  const ages = books.map(elem => elem.releaseYear - elem.author.birthYear);
  const sum = ages.reduce((acc, curr) => acc + curr, 0);
  return sum/ages.length;
}

console.log(averageAge());