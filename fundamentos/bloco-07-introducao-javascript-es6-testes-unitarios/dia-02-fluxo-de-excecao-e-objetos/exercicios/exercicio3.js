const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1st
const add2ndShift = (object, key, value) => {
  object[key] = value;
}

add2ndShift(lesson2, 'turno', 'noite');

// 2nd
const showKeys = (object) => {
  console.log(Object.keys(object));
}

//showKeys(lesson2)

// 3rd
const showObjectLength = (object) => {
  console.log(Object.keys(object).length);
}

//showObjectLength(lesson2);

// 4th
const showKeysValues = (object) => {
  console.log(Object.values(object));
}

//showKeysValues(lesson2);

// 5th
const allLessons = {};

allLessons[`lesson${1}`] = Object.assign({}, lesson1)
allLessons[`lesson${2}`] = Object.assign({}, lesson2)
allLessons[`lesson${3}`] = Object.assign({}, lesson3)

//console.log(allLessons);

// 6th
function countStudents() {
  for (let index = 1; index <= Object.keys(allLessons).length; index++) {
    console.log(allLessons[`lesson${index}`]['numeroEstudantes']);
  }
}

//countStudents();

// 7th

function getValueByNumber(object) {
  return object[Object.keys(object)[0]];
}

//console.log(getValueByNumber(lesson1, 0));

// 8th

function verifyPair(object, key, value) {
  if(object[key] === value){
    return true;
  }
  return false;
}

//console.log(verifyPair(lesson3, 'turno', 'noite'));
//console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));

// 1st Bonus
function countMathStudents() {
  let count = 0;
  for (let index = 1; index <= Object.keys(allLessons).length; index++) {
    if(allLessons[`lesson${index}`]['materia'] === 'Matemática'){
      count++;
    }
  }
  return count;
}

//console.log(countMathStudents());

// 2nd Bonus
function createReport(object, name) {
  let count = 0;
  const newObject = {};
  for (let index = 1; index <= Object.keys(object).length; index++) {
    console.log(allLessons[`lesson${index}`]['professor']);
    if(allLessons[`lesson${index}`]['professor'] === name){
      count++;
      if (count === 1){
        newObject.professor = name;
        newObject.aulas = [allLessons[`lesson${index}`]['materia']];
        newObject.estudantes = allLessons[`lesson${index}`]['numeroEstudantes'];
      } else if (count > 1) {
        newObject.aulas.push(allLessons[`lesson${index}`]['materia']);
        newObject.estudantes += allLessons[`lesson${index}`]['numeroEstudantes'];
      }
    }
  }
  if(count === 0){
    return 'Professor(a) não encontrado(a).';
  } else {
    return newObject;
  }
}

console.log(createReport(allLessons, 'Maria Clara'))