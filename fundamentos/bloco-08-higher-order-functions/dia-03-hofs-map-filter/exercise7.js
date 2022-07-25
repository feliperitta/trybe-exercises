import books from './books.js'

function authorWith3DotsOnName() {
  const bookName = '';
  const book3Dots = books.filter((book) => {
    const split = book.author.name.split(' ');
    let count = 0;
    for (let i = 0; i < split.length; i += 1) {
      if (split[i].includes('.')) {
        count += 1;
      }
    }
    return count === 3;
  });
  return book3Dots[0].name;
}

console.log(authorWith3DotsOnName());