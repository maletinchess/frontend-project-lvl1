import {
  getRandom, makePlay,
} from '../index.js';

const calc = () => {
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

const playCalc = () => makePlay('What is the result of the expression?', calc);
export default playCalc;
