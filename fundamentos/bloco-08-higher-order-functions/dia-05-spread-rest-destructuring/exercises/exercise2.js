// escreva sum abaixo

const sum = (...args) => {
  return args.reduce((acc, curr) => {
    return acc+curr;
  });
}

console.log(sum(5, 3, 1313, 133));
