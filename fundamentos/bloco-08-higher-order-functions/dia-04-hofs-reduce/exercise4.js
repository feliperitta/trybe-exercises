import books from './books.js'

function longestNamedBook() {
  const largerName = books.reduce((acc, curr) => {
    if (curr.name.length > acc.name.length) {
      acc = curr;
    }
    return acc;
  });
  return largerName 
}

console.log(longestNamedBook());