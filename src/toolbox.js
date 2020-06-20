export const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const getTaskDescription = (str) => console.log(str);

// example of message if player wins
export const makeCongratMessage = (str) => console.log(`Congratulations, ${str}!`);

// example of message if player fails
export const makeFailMessage = (actual, correct, playerName) => console.log(`"${actual}" is wrong answer ;(. Correct answer was "${correct}". Let's try again, ${playerName}!`);

// greatness
export const makeGreatness = (str) => console.log(`Hello, ${str}!`);
