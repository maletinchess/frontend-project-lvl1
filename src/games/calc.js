import runPlay from '../index.js';

import getRandom from '../utils.js';

const toCalculate = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`${operator} is unknown operand`);
  }
};

const operators = ['+', '-', '*'];

const getGameData = () => {
  const firstValue = getRandom(-100, 100);
  const secondValue = getRandom(-100, 100);
  const operator = operators[getRandom(0, operators.length - 1)];
  const question = `${firstValue} ${operator} ${secondValue}`;
  const answer = toCalculate(firstValue, secondValue, operator).toString();
  return [question, answer];
};

const description = 'What is the result of the expression?';

const playCalc = () => runPlay(description, getGameData);
export default playCalc;
