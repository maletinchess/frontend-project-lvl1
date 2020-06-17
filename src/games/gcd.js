import readlineSync from 'readline-sync';

import {
  getRandom, makeGreatness, getTaskDescription, makeCongratMessage, makeFailMessage,
} from '../toolbox.js';

const getMaxDivisor = (firstNum, secondNum) => {
  if (firstNum === 0 || secondNum === 0) {
    return null;
  }
  const iter = (acc) => {
    if (firstNum % acc === 0 && secondNum % acc === 0) {
      return acc;
    }
    return iter(acc - 1);
  };
  if (firstNum >= secondNum) {
    return iter(firstNum);
  } return iter(secondNum);
};

/* get an array, which contains expression for task as first element
and the correct answer as a second one. */
const getMaxDivisorTask = () => {
  const result = [];
  const firstValue = getRandom(0, 100);
  const secondValue = getRandom(0, 100);
  const maxDivisor = getMaxDivisor(firstValue, secondValue);
  result.push(firstValue, secondValue, maxDivisor.toString());
  return result;
};

const playMaxDivisor = () => {
  const player = readlineSync.question('May i have your name? ');
  const savePlayer = `${player}`;
  makeGreatness(savePlayer);
  getTaskDescription('Find the greatest common divisor of given numbers');
  const iter = (acc) => {
    const maxDivisorTask = getMaxDivisorTask();
    const [first, second, correctAnswer] = maxDivisorTask;
    console.log(`Question: ${first}, ${second}`);
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
export default playMaxDivisor;
