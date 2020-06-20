import {
  getRandom, makePlay,
} from '../index.js';

const isEven = (num) => num % 2 === 0;

/* get an array, which contains expression for task as first element
and the correct answer as a second one. */
const even = () => {
  const question = getRandom(-100, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const playEven = () => makePlay('Answer "yes" if the number is even, otherwise answer "no".', even);

export default playEven;
