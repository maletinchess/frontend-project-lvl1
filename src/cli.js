import readlineSync from 'readline-sync';

const name = readlineSync.question('Welcome to the brain games! May i have your name? ');
export const welcome = () => {
  console.log(`Hello, ${name}!`);
};
const evenTask = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');

export const getRandom = (min, max) => {
  const newMin = Math.ceil(min);
  const newMax = Math.floor(max);
  return Math.floor(Math.random() * (newMax - newMin + 1)) + newMin;
};

export const checkAnswer = (num) => {
  let result;
  if (num % 2 === 0) {
    result = 'yes';
  }
  if (num % 2 !== 0) {
    result = 'no';
  }
  return result;
};

const game = () => {
  evenTask();
  const iter = (acc) => {
    const random = getRandom(-1000, 1000);
    console.log(`Question: ${random}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== checkAnswer(random)) {
      const failMessage = console.log(`"${answer}" is wrong answer;( Correct answer was "${checkAnswer(random)}". Let s try again!`);
      return failMessage;
    }
    if (acc === 3) {
      const congrat = console.log(`Congratulations, ${name}!`);
      return congrat;
    }
    console.log('Correct!');
    return iter(acc + 1);
  };
  return iter(1);
};
export default game;
