import readlineSync from 'readline-sync';

import {
  getRandom, makeGreatness, getTaskDescription, makeCongratMessage, makeFailMessage,
} from '../toolbox.js';

const getProgressionTask = () => {
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
  const emptyIndexArray = [];
  const taskArray = [];
  const correctAnswer = array[index];
  for (let i = 0; i < array.length; i += 1) {
    if (i !== index) {
      emptyIndexArray.push(array[i]);
    } else { emptyIndexArray.push('..'); }
  }
  taskArray.push(emptyIndexArray.join(' '), correctAnswer.toString());
  return taskArray;
};

const playProgression = () => {
  const player = readlineSync.question('May i have your name? ');
  const savePlayer = `${player}`;
  makeGreatness(savePlayer);
  getTaskDescription('What number is missing in the progression?');
  const iter = (acc) => {
    const progression = getProgressionTask(); // generate task-array;
    const [findEmptyNumber, correctAnswer] = progression;
    // here we use array to generate question and define wright answer;
    console.log(`Question: ${findEmptyNumber}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== correctAnswer) {
      return makeFailMessage(answer, correctAnswer, savePlayer);
    }
    if (acc === 3) {
      return makeCongratMessage(savePlayer);
    }
    console.log('Correct!');
    return iter(acc + 1);
  };
  return iter(1);
};
export default playProgression;
