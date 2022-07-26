const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  const studentsObj = [];
  const averageGrades = grades.map((elem => {
    let sum = elem.reduce((acc, curr) => {
      acc += curr
      return acc
    }, 0);
    return sum/elem.length;
  }));
  for (let i in averageGrades) studentsObj.push({name: students[i], average: averageGrades[i]})
  return studentsObj;
}

studentAverage();
