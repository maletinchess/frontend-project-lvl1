import runPlay from '../index.js';

import getRandom from '../utils.js';

const progressionLength = 9;

const makeProgression = (firstElement, progressionStep, length) => {
  const result = [];
  result.push(firstElement);
  for (let i = 0; i < length; i += 1) {
    result.push(result[i] + progressionStep);
  }
  return result;
};

const getGameData = () => {
  const progressionFirstElement = getRandom(1, 100);
  const progressionStep = getRandom(1, 20);
  const question = makeProgression(progressionFirstElement, progressionStep, progressionLength);
  const hiddenElementIndex = getRandom(0, progressionLength - 1);
  const answer = question[hiddenElementIndex].toString();
  question[hiddenElementIndex] = '..';
  return [question.join(' '), answer];
};

const description = 'What number is missing in the progression?';

const playProgression = () => runPlay(description, getGameData);

export default playProgression;
