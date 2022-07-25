import books from './books.js'

function fantasyOrScienceFictionAuthors() {
  const fanOrSciBooks = books.filter ((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica');

  return fanOrSciBooks.map((book) => {
    return book.author.name;
  }).sort();
}

console.log(fantasyOrScienceFictionAuthors());