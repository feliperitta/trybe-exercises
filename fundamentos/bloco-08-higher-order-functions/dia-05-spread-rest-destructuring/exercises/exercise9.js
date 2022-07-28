const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};

const months = (obj) => {
  const {spring, summer, autumn, winter} = obj;
  return [...spring, ...summer, ...autumn, ...winter]
}

console.log(months(yearSeasons));