import readlineSync from 'readline-sync';

import {
  getRandom, makeGreatness, getTaskDescription, makeCongratMessage, makeFailMessage,
} from '../toolbox.js';

const getCalcTask = () => {
  // example of constructor for calculation-play;
  // get two values from random-function
  const firstValue = getRandom(-100, 100);
  const secondValue = getRandom(-100, 100);
  let operand; // variable to save a sign of operation;
  let result; // variable to save a result of operation;
  // we use switch to organize choice of type of calculation;
  switch (getRandom(1, 3)) {
    case 1:
      operand = '+';
      result = firstValue + secondValue;
      break;
    case 2:
      operand = '-';
      result = firstValue - secondValue;
      break;
    default:
      operand = '*';
      result = firstValue * secondValue;
  }
  // now we have operand and result, so we can construct an expression to string-form;
  const calcTask = []; // prepare array;
  const expression = `${firstValue} ${operand} ${secondValue}`; // construct expression;
  calcTask.push(expression, result.toString()); // correct answer also should be a string-type;
  return calcTask;
};

const playCalc = () => {
  const player = readlineSync.question('May i have your name? ');
  const savePlayer = `${player}`;
  makeGreatness(savePlayer);
  getTaskDescription('What is the result of the expression?');
  const iter = (acc) => {
    const taskCalc = getCalcTask(); // generate task-array;
    const [expression, correctAnswer] = taskCalc;
    // here we use array to generate question and define wright answer;
    console.log(`Question: ${expression}`);
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
export default playCalc;
