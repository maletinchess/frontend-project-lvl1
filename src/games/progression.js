import runPlay from '../index.js';

import getRandom from '../utils.js';

const progressionLength = 10;

const makeProgression = (firstElement, progressionStep, length) => {
  const progression = [firstElement];
  for (let i = 0; i < length - 1; i += 1) {
    progression.push(progression[i] + progressionStep);
  }
  return progression;
};

const getGameData = () => {
  const progressionFirstElement = getRandom(1, 100);
  const progressionStep = getRandom(1, 20);
  const progression = makeProgression(progressionFirstElement, progressionStep, progressionLength);
  const hiddenElementIndex = getRandom(0, progressionLength - 1);
  const answer = progression[hiddenElementIndex].toString();
  progression[hiddenElementIndex] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

const description = 'What number is missing in the progression?';

const playProgression = () => runPlay(description, getGameData);

export default playProgression;
