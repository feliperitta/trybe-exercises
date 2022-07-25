import books from './books.js';

function nameAndAge() {
  const authors = books.map((book) => {
    return {
      age: book.releaseYear - book.author.birthYear,
      author: book.author.name,
    }
  });

  return authors.sort((a, b) => a.age - b.age);
}

console.log(nameAndAge());