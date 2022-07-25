import books from './books.js';

// Adicione o código do exercício aqui: 

const formattedBookNames = () => {
  return books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);
}

console.log(formattedBookNames());