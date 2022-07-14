const first = name => 'Tryber x aqui!'.replace('x', name);



const second = () => {
  const firstReturn = first('felipe');
  const skills = ['JavaScript', 'HTML', 'CSS'];
  return `${firstReturn}
  Minhas três principais habilidades são:
  • JavaScript
  • HTML
  • CSS`
}

console.log(second());