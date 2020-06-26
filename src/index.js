import readlineSync from 'readline-sync';

const runPlay = (description, getGameData) => {
  console.log('Welcome to the Brain games!');
  const player = readlineSync.question('May i have your name? ');
  console.log(description);
  const iter = (acc) => {
    if (acc === 3) {
      console.log(`Congratulations, ${player}!`);
      return;
    }
    const [question, correctAnswer] = getGameData();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== correctAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}". Let's try again, ${player}!`);
      return;
    }
    console.log('Correct!');
    iter(acc + 1);
  };
  iter(0);
};
export default runPlay;
