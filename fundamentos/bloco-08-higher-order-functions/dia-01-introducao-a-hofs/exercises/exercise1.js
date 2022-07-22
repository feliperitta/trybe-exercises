const newEmployees = () => {
  const employees = {
    id1: 'Pedro Guerra', // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: 'Luiza Drumond', // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: 'Carla Paiva', // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const findPersonId = (name) => {
  const employeesKeys = Object.keys(newEmployees());
  const employeesValues = Object.values(newEmployees());
  for(let i = 0; i < employeesValues.length; i++){
    let loweredName = name.toLowerCase();
    let loweredPersonToFind = employeesValues[i].toLocaleLowerCase();
    if (loweredPersonToFind.includes(loweredName)) return employeesKeys[i];
  }
  throw new Error ('Pessoa não encontrada.');
}

const log = (name) => {
  try {
    const person = newEmployees()[findPersonId(name)];
    const email = `${person.replace(' ', "")}`.toLowerCase();
    const message = console.log(`Your E-mail: ${email}@trybe.com`);
    return message;
  } catch (e) {
    console.error(e);
  }
}

log('LUIza');
