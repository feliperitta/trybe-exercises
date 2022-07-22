const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

/* 1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
Dica: use a função find. */
function authorBornIn1947() {
  const authorFound = books.find(element => element.author.birthYear === 1947);
  return console.log(authorFound.author.name);
}
//authorBornIn1947();

/* 2 - Retorne o nome do livro de menor nome.
Dica: use a função forEach. */
function smallerName() {
  let nameBook = books[0].name;
  books.forEach(element => {
    if(element.name.length < nameBook.length){
      nameBook = element.name;
    }
  });
  return console.log(nameBook);
}
//smallerName();

/* 3 - Encontre o primeiro livro cujo nome possui 26 caracteres. */
function getNamedBook() {
  return console.log(books.find(element => element.name.length === 26));
}
//getNamedBook()

/* 4 - Ordene os livros por data de lançamento em ordem decrescente. */
function booksOrderedByReleaseYearDesc() {
  return console.log(books.sort((a, b) => {
    return b.releaseYear - a.releaseYear;
  }));
}
//booksOrderedByReleaseYearDesc();

/*  5 - Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário. */
// sec 20 => 1901 - 2000,
function everyoneWasBornOnSecXX() {
  return books.find(element => {
    const date = element.author.birthYear;
    return date > 2000 || date < 1901;
  }) === undefined;
}
//console.log(everyoneWasBornOnSecXX());

/* 6 - Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário. */
// 80 => 1980 - 1989
function someBookWasReleaseOnThe80s() {
  return books.some(element => {
    const date = element.releaseYear;
    return date >= 1980 || date < 1989;
  });
}
//console.log(someBookWasReleaseOnThe80s());

/* 7 - Faça uma função que retorne true, caso nenhum author tenha nascido no mesmo ano, e false, caso contrário. */
function authorUnique() {
  const dates = [];
  let count;
  books.forEach(element => {
    dates.push(element.author.birthYear);
  });
  dates.forEach(element => {
    count = 0;
    dates.forEach(elem => {
      if (elem === element) { 
        count += 1;
        if (count > 1) return true;
      }
    });
  });
  return false;
}
//console.log(authorUnique());
