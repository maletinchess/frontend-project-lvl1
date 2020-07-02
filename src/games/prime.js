import runPlay from '../index.js';

import getRandom from '../utils.js';

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

const getGameData = () => {
  const question = getRandom(0, 1000);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question.toString(), answer];
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const playPrime = () => runPlay(description, getGameData);

export default playPrime;
