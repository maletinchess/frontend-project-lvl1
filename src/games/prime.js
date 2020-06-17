import readlineSync from 'readline-sync';

import {
  getRandom, makeGreatness, getTaskDescription, makeCongratMessage, makeFailMessage,
} from '../toolbox.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

/* get an array, which contains expression for task as first element
and the correct answer as a second one. */
const getIsPrimeTask = () => {
  const primeTask = [];
  const value = getRandom(0, 3599);
  primeTask.push(value);
  if (isPrime(value) === true) {
    primeTask.push('yes');
  } else { primeTask.push('no'); }
  return primeTask;
};

const playPrime = () => {
  const player = readlineSync.question('May i have your name? ');
  const savePlayer = `${player}`;
  makeGreatness(savePlayer);
  getTaskDescription('Answer "yes" if the number is prime, otherwise answer "no".');
  const iter = (acc) => {
    const primeTask = getIsPrimeTask();
    const [value, correctAnswer] = primeTask;
    console.log(`Question: ${value}`);
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
export default playPrime;
