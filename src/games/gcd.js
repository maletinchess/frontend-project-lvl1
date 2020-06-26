import runPlay from '../index.js';

import getRandom from '../utils.js';

const getGcd = (a, b) => ((a % b) ? getGcd(b, a % b) : Math.abs(b));

const getGcdData = () => {
  const firstValue = getRandom(0, 100);
  const secondValue = getRandom(0, 100);
  const question = `${firstValue} ${secondValue}`;
  const answer = getGcd(firstValue, secondValue).toString();
  return [question, answer];
};

const gcdDescription = 'Find the greatest common divisor of given numbers.';

const playGcd = () => runPlay(gcdDescription, getGcdData);

export default playGcd;
