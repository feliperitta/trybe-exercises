import books from './books.js'

function oldBooks() {
  const old60Books = books.filter((book) => {
    return 2022 - book.releaseYear > 60;
  });

  return old60Books.map((book) => book.name);
}

console.log(oldBooks());