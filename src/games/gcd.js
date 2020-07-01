import runPlay from '../index.js';

import getRandom from '../utils.js';

const getGcd = (a, b) => {
  if (a % b) {
    return getGcd(b, a % b);
  }
  if (b !== 0) {
    return Math.abs(b);
  }
  return Math.abs(a);
};


const getGameData = () => {
  const firstValue = getRandom(0, 100);
  const secondValue = getRandom(0, 100);
  const question = `${firstValue} ${secondValue}`;
  const answer = getGcd(firstValue, secondValue).toString();
  return [question, answer];
};

const description = 'Find the greatest common divisor of given numbers.';

const playGcd = () => runPlay(description, getGameData);

export default playGcd;
