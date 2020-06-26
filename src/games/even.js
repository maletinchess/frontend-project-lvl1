import runPlay from '../index.js';

import getRandom from '../utils.js';

const isEven = (num) => num % 2 === 0;

/* get an array, which contains expression for task as first element
and the correct answer as a second one. */
const getEvenData = () => {
  const question = getRandom(-100, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const evenDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const playEven = () => runPlay(evenDescription, getEvenData);

export default playEven;
