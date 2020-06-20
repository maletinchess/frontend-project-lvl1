import readlineSync from 'readline-sync';

export const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const makePlay = (description, cb) => {
  console.log('Welcome to the Brain games!');
  const player = readlineSync.question('May i have your name? ');
  const savePlayer = `${player}`;
  console.log(description);
  const iter = (acc) => {
    const task = cb();
    const [expression, correctAnswer] = task;
    console.log(`Question: ${expression}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== correctAnswer) {
      return console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}". Let's try again, ${savePlayer}!`);
    }
    if (acc === 3) {
      return console.log(`Congratulations, ${savePlayer}!`);
    }
    console.log('Correct!');
    return iter(acc + 1);
  };
  return iter(1);
};
