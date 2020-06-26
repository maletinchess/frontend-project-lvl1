import runPlay from '../index.js';

import getRandom from '../utils.js';

const getProgressionData = () => {
  const getArray = () => {
    const result = [];
    const counter = getRandom(1, 17);
    result.push(getRandom(0, 100));
    for (let i = 0; i < 9; i += 1) {
      result.push(result[i] + counter);
    }
    return result;
  };
  const array = getArray();
  const index = getRandom(0, 9);
  const question = [];
  const answer = array[index];
  for (let i = 0; i < array.length; i += 1) {
    if (i !== index) {
      question.push(array[i]);
    } else { question.push('..'); }
  }
  return [question.join(' '), answer.toString()];
};

const progressionDescription = 'What number is missing in the progression?';

const playProgression = () => runPlay(progressionDescription, getProgressionData);

export default playProgression;
