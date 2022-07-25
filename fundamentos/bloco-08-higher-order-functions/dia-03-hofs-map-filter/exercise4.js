import books from './books.js';

function oldBooksOrdered() {
  const oldBooks = books.filter((book) => 2022 - book.releaseYear > 60);
  return oldBooks.sort((a, b) => a.releaseYear - b.releaseYear);
}

console.log(oldBooksOrdered());