const arrays = [["1", "2", "3"], [true], [4, 5, 6]];

function flatten() {
  const array = arrays.reduce((acc, curr) => {
    curr.forEach((element) => {
      acc.push(element);
    });
    return acc;
  }, []);
  return array;
}

console.log(flatten());
