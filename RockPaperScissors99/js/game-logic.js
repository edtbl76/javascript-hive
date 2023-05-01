
// Step one: Set 12 Global Variables
let playerOneMoveOneType,
 playerOneMoveOneValue,
 playerOneMoveTwoType,
 playerOneMoveTwoValue,
 playerOneMoveThreeType,
 playerOneMoveThreeValue,
 playerTwoMoveOneType,
 playerTwoMoveOneValue,
 playerTwoMoveTwoType,
 playerTwoMoveTwoValue,
 playerTwoMoveThreeType,
 playerTwoMoveThreeValue,
 playerOneWins,
 playerTwoWins;



// Step two: initialize moves based on selection of player
function setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) {
    // failfast return for missing type/value 
    if (!moveOneType || !moveOneValue || !moveTwoType || !moveTwoValue || !moveThreeType || !moveThreeValue) {
        return;
    }

    // failfast valid types
    if (!isValidMoveType(moveOneType) || !isValidMoveType(moveTwoType) || !isValidMoveType(moveThreeType)) {
        return;
    }

    // failfast valid values
    if (!isValidMoveValue(moveOneValue)  || !isValidMoveValue(moveTwoValue) || !isValidMoveValue(moveThreeValue)) {
        return;
    }

    // failfast (Values can't add up to more than 99)
    if ((moveOneValue + moveTwoValue + moveThreeValue) > 99) {
        return;
    }

    if (player === 'Player One') {
        playerOneMoveOneType = moveOneType;
        playerOneMoveOneValue = moveOneValue;
        playerOneMoveTwoType = moveTwoType;
        playerOneMoveTwoValue = moveTwoValue;
        playerOneMoveThreeType = moveThreeType;
        playerOneMoveThreeValue = moveThreeValue;
    } else if (player === 'Player Two') {
        playerTwoMoveOneType = moveOneType;
        playerTwoMoveOneValue = moveOneValue;
        playerTwoMoveTwoType = moveTwoType;
        playerTwoMoveTwoValue = moveTwoValue;
        playerTwoMoveThreeType = moveThreeType;
        playerTwoMoveThreeValue = moveThreeValue;
    } else {
        return;
    }
}

function getRoundWinner(roundNumber) {
   switch (roundNumber) {
        case 1:
            return getMoveWinner(playerOneMoveOneType, playerOneMoveOneValue, playerTwoMoveOneType, playerTwoMoveOneValue);
        case 2:
            return getMoveWinner(playerOneMoveTwoType, playerOneMoveTwoValue, playerTwoMoveTwoType, playerTwoMoveTwoValue);
        case 3:
            return getMoveWinner(playerOneMoveThreeType, playerOneMoveThreeValue, playerTwoMoveThreeType, playerTwoMoveThreeValue);
        default:
            return null;
   }

}

function addWin(winner) {
    if (winner === 'Player One') {
        playerOneWins = (playerOneWins + 1) || 1;
    } else if (winner === 'Player Two') {
        playerTwoWins = (playerTwoWins + 1) || 1;
    }
}

function getGameWinner() {
    if (!playerOneMoveOneType || !playerOneMoveOneValue || !playerTwoMoveOneType || !playerTwoMoveOneValue ||
        !playerOneMoveTwoType || !playerOneMoveTwoValue || !playerTwoMoveTwoType || !playerTwoMoveTwoValue ||
        !playerOneMoveThreeType || !playerOneMoveThreeValue ||!playerTwoMoveThreeType || !playerTwoMoveThreeValue) {
            return null;
        }

    playerOneWins = 0;
    playerTwoWins = 0;
    
    const roundOneWinner = getRoundWinner(1);
    const roundTwoWinner = getRoundWinner(2);
    const roundThreeWinner = getRoundWinner(3);
    
    addWin(roundOneWinner);
    addWin(roundTwoWinner);
    addWin(roundThreeWinner);
    
    if (playerOneWins > playerTwoWins) {
            return 'Player One';
    } else if (playerOneWins < playerTwoWins) {
        return 'Player Two';
    } else {
        return 'Tie';
    }
    
}

function isValidMoveType(moveType) {
    return (moveType === 'rock') || (moveType === 'paper') || (moveType === 'scissors');
}

function isValidMoveValue(moveValue) {
    return (moveValue > 0) && (moveValue < 99);
}

function getMoveWinner(playerOneMoveType, playerOneMoveValue, playerTwoMoveType, playerTwoMoveValue) {
    // failfast
    if (!playerOneMoveType || !playerOneMoveValue || !playerTwoMoveType || !playerTwoMoveValue) {
        return null;

    }

    if (playerOneMoveType === playerTwoMoveType) {
        if (playerOneMoveValue > playerTwoMoveValue) {
            return 'Player One';
        } else if (playerOneMoveValue < playerTwoMoveValue) {
            return 'Player Two';
        } else {
            return 'Tie';
        }
    } 

    if (playerOneMoveType === 'rock') {
        return (playerTwoMoveType === 'scissors') ? 'Player One' : 'Player Two';
    } else if (playerOneMoveType === 'paper') {
        return (playerTwoMoveType === 'rock') ? 'Player One' : 'Player Two';
    } else {
        return (playerTwoMoveType === 'paper') ? 'Player One' : 'Player Two';
    }
}

function setComputerMoves() {
    const moves = ['rock', 'paper', 'scissors'];

    const moveOneType = moves[Math.floor(Math.random() * 3)]
    const moveTwoType = moves[Math.floor(Math.random() * 3)]
    const moveThreeType = moves[Math.floor(Math.random() * 3)]

    const moveOneValue = Math.floor(Math.random() * 96) + 1;
    const moveTwoValue = Math.floor(Math.random() * (97 - moveOneValue) + 1);
    const moveThreeValue = 99 - moveOneValue - moveTwoValue;

    setPlayerMoves('Player Two', moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue);
}
