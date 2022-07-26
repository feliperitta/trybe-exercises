const names = [
  "Aanemarie",
  "Adervandes",
  "Akifusa",
  "Abegildo",
  "Adicellia",
  "Aladonata",
  "Abeladerco",
  "Adieidy",
  "Alarucha",
];

function containsA() {
  let eachCount;
  const times = names.reduce((acc, curr) => {
    eachCount = 0;
    for (let letter of curr) {
      if (letter.toLocaleLowerCase() === 'a') eachCount += 1;
    }
    return acc + eachCount;
  }, 0);
  return times;
}

console.log(containsA());