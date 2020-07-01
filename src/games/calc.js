import runPlay from '../index.js';

import getRandom from '../utils.js';

const toCalculate = (number1, number2, operand) => {
  switch (operand) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`${operand} is unknown operand`);
  }
};

const operands = ['+', '-', '*'];

const getGameData = () => {
  const firstValue = getRandom(-100, 100);
  const secondValue = getRandom(-100, 100);
  const operand = operands[getRandom(0, operands.length - 1)];
  const question = `${firstValue} ${operand} ${secondValue}`;
  const answer = toCalculate(firstValue, secondValue, operand).toString();
  return [question, answer];
};

const description = 'What is the result of the expression?';

const playCalc = () => runPlay(description, getGameData);
export default playCalc;
