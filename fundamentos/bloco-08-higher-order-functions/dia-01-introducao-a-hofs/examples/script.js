// Ao chamar a função doingThings:
const wakeUp = () => console.log('Acordando!!');
const letsDrinkCoffee = () => console.log('Bora tomar café!!');
const letsSleep = () => console.log('Partiu dormir!!');

const doingThings = (func) => func;

doingThings(letsSleep());
