const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const calculateScore = (rightAnswers, answers, score) => score(rightAnswers, answers);

const checkScore = (array1, array2) => {
  let sum = 0;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) sum++;
    if (array1[i] !== array2[i] && array2[i] !== 'N.A') sum--;
  }
  return sum;
}

const action = (message) => console.log(message)

const showStudentScore = () => action(`Pontuação: ${calculateScore(RIGHT_ANSWERS, STUDENT_ANSWERS, checkScore)}`);

showStudentScore();