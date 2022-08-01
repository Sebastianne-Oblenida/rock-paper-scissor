/* 
make a rock paper scissors game to play against the computer
*/

// Get player selection
const choices = ['rock', 'paper', 'scissor'];
let playerScore = 0;
let computerScore = 0;
// Get computer selection
function getComputerChoice(choices) {
    return choices[Math.floor(Math.random() * 3)];
}
// playround
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'Draw'
    }
    else if (playerSelection === choices[0] && computerSelection === choices[2]) {
        playerScore++;
        return 'You win! Rock beats Scissor';
    }
    else if (playerSelection === choices[1] && computerSelection === choices[0]) {
        playerScore++;
        return 'You win! Paper beats Rock';
    }
    else if (playerSelection === choices[2] && computerSelection === choices[1]) {
        playerScore++;
        return 'You win! Scissor beats paper';
    }
    else {
        computerScore++;
        return `You lose! ${computerSelection[0].toUpperCase() + computerSelection.slice(1)} beats ${playerSelection[0].toUpperCase() + playerSelection.slice(1)}`
    }
}
// play 5 round game
function game() {
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice(choices);
        const playerSelection = prompt('Rock,Paper, or Scissor?').toLowerCase();
        console.log(playRound(playerSelection, computerSelection));
    }
    if (playerScore > computerScore) {
        return 'You Win the game'
    }
    return 'You Lose the game'
}

console.log(game())
