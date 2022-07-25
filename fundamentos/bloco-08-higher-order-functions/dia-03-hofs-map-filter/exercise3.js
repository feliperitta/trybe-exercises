import books from './books.js';

function fantasyOrScienceFiction() {
  return books.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica');
}

console.log(fantasyOrScienceFiction());