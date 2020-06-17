import readlineSync from 'readline-sync';

import {
  getRandom, makeGreatness, getTaskDescription, makeCongratMessage, makeFailMessage,
} from '../toolbox.js';


/* get an array, which contains expression for task as first element
and the correct answer as a second one. */
const getEvenTask = () => {
  const result = [];
  const value = getRandom(-100, 100);
  result.push(value);
  if (value % 2 === 0) {
    result.push('yes');
  } else {
    result.push('no');
  }
  return result;
};

const playEven = () => {
  const player = readlineSync.question('May i have your name? ');
  const savePlayer = `${player}`;
  makeGreatness(savePlayer);
  getTaskDescription('Answer "yes" if the number is even, otherwise answer "no".');
  const iter = (acc) => {
    const expression = getEvenTask();
    const [num, correctAnswer] = expression;
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== correctAnswer) {
      return makeFailMessage(answer, correctAnswer, savePlayer);
    }
    if (acc === 3) {
      return makeCongratMessage(savePlayer);
    }
    console.log('Correct!');
    return iter(acc + 1);
  };
  return iter(1);
};
export default playEven;
