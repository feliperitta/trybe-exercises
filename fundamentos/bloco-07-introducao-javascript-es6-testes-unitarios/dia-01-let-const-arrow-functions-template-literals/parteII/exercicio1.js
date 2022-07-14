const factorialReturn = number => {
  let result = 1;
  for (let index = number; index >= 2; index--) {
    result *= index;
  }
  return result;
}

console.log(factorialReturn(6));

const fatorial = number => number > 1 ? number * fatorial(number-1) : 1

console.log(fatorial(6));
