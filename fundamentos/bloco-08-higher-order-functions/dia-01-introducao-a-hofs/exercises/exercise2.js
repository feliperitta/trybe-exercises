const random = () => {
  const randomNumber = Math.random() * 5;
  return Math.round(randomNumber);
}

const log = () => console.log(random());

log();