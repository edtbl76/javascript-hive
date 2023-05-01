let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 9);
}

const compareGuesses = (userGuess, computerGuess, secretTarget) => {
    const userValue = Math.abs(userGuess - secretTarget);
    const computerValue = Math.abs(computerGuess - secretTarget);

    return userValue <= computerValue;
}
const updateScore = (winner) => {
   
    switch (winner) {
        case 'human': 
            humanScore += 1;
            break;
        case 'computer':
            computerScore += 1;
            break;
        default:
            break;
    }
}

const advanceRound = () => {
    currentRoundNumber += 1;
}