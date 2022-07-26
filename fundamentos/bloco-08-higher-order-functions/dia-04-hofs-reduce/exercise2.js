import books from './books.js'

function reduceNames() {
  const names = books.reduce((acc, curr) => {
    return (acc + curr.author.name + ', ');
  }, '');
  return names.slice(0, -2) + '.';
}

console.log(reduceNames());