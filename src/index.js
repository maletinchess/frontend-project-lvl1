import readlineSync from 'readline-sync';

import {
  welcomePlayer, taskDescription, congrat, getEvenTask, getCalcTask,
  getIsPrimeTask, getMaxDivisorTask, getProgressionTask,
} from './toolbox.js';

export const evenPlay = () => {
  welcomePlayer();
  taskDescription('Answer "yes" if the number is even, otherwise answer "no".');
  const iter = (acc) => {
    const expression = getEvenTask();
    const [num, correctAnswer] = expression;
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== correctAnswer) {
      const failMessage = console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}". Let's try again!`);
      return failMessage;
    }
    if (acc === 3) {
      return congrat();
    }
    console.log('Correct!');
    return iter(acc + 1);
  };
  return iter(1);
};

export const calcPlay = () => {
  welcomePlayer();
  taskDescription('What is the result of the expression?');
  const iter = (acc) => {
    const taskCalc = getCalcTask(); // generate task-array;
    const [expression, correctAnswer] = taskCalc;
    // here we use array to generate question and define wright answer;
    console.log(`Question: ${expression}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== correctAnswer) {
      const failMessage = console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
      return failMessage;
    }
    if (acc === 3) {
      return congrat();
    }
    console.log('Correct!');
    return iter(acc + 1);
  };
  return iter(1);
};

export const isPrimePlay = () => {
  welcomePlayer();
  taskDescription('Answer "yes" if the number is prime, otherwise answer "no".');
  const iter = (acc) => {
    const primeTask = getIsPrimeTask();
    const [value, correctAnswer] = primeTask;
    console.log(`Question: ${value}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== correctAnswer) {
      const failMessage = console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}". Try again!`);
      return failMessage;
    }
    if (acc === 3) {
      return congrat();
    }
    console.log('Correct!');
    return iter(acc + 1);
  };
  return iter(1);
};

export const maxDivisorPlay = () => {
  welcomePlayer();
  taskDescription('Find max divisor for two values');
  const iter = (acc) => {
    const maxDivisorTask = getMaxDivisorTask();
    const [first, second, correctAnswer] = maxDivisorTask;
    console.log(`Question: ${first}, ${second}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== correctAnswer) {
      const failMessage = console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}". Try again!`);
      return failMessage;
    }
    if (acc === 3) {
      return congrat();
    }
    console.log('Correct!');
    return iter(acc + 1);
  };
  return iter(1);
};

export const progressionPlay = () => {
  welcomePlayer();
  taskDescription('What number is missing in this progression?');
  const iter = (acc) => {
    const progression = getProgressionTask(); // generate task-array;
    const [findEmptyNumber, correctAnswer] = progression;
    // here we use array to generate question and define wright answer;
    console.log(`Question: ${[...findEmptyNumber]}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== correctAnswer) {
      const failMessage = console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}". Try again!`);
      return failMessage;
    }
    if (acc === 3) {
      return congrat();
    }
    console.log('Correct!');
    return iter(acc + 1);
  };
  return iter(1);
};
