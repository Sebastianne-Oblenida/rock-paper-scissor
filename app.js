/* 
make a rock paper scissors game to play against the computer
*/
const choices = ['rock', 'paper', 'scissors'];
let playerScore = document.querySelector('#playerScore')
let computerScore = document.querySelector('#computerScore')
function getComputerChoice(choices) {
    return choices[Math.floor(Math.random() * 3)];
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'Draw';
    }
    else if (playerSelection === choices[0] && computerSelection === choices[2]) {
        playerScore.textContent++;
        return 'You win! Rock beats Scissor';
    }
    else if (playerSelection === choices[1] && computerSelection === choices[0]) {
        playerScore.textContent++;
        return 'You win! Paper beats Rock';
    }
    else if (playerSelection === choices[2] && computerSelection === choices[1]) {
        playerScore.textContent++;
        return 'You win! Scissor beats paper';
    }
    else {
        computerScore.textContent++;
        return `You lose! ${computerSelection[0].toUpperCase() + computerSelection.slice(1)} beats ${playerSelection[0].toUpperCase() + playerSelection.slice(1)}`;
    }
}

function gameWinner(score, player) {
    if (score == 5) {
        result.textContent = `${player} Win`;
        if (player === 'Player') result.style.color = 'hsl(120, 80%, 37%)'
        else if (player === 'Computer') result.style.color = 'hsl(0, 76%, 48%)'
        disableButton(true);
        reset.style.visibility = 'visible';
    }
}

function disableButton(bool) {
    button.forEach(btn=> btn.disabled = bool)
}


const result = document.querySelector('#result');
const button = document.querySelectorAll('.rpsbtn');
const reset = document.querySelector('#reset');
const player = document.querySelector('#player');
const computer = document.querySelector('#computer');
reset.style.visibility = 'hidden'
button.forEach(btn => btn.addEventListener('click', (e) => {
    const compChoice = getComputerChoice(choices)
    player.src = `./images/${btn.value}.png`
    computer.src = `./images/${compChoice}.png`
    const winner = playRound(btn.value,compChoice);
    result.textContent = winner;
    gameWinner(playerScore.textContent, 'Player');
    gameWinner(computerScore.textContent, 'Computer');
}))


reset.addEventListener('click', function(e) {
    playerScore.textContent = 0;
    computerScore.textContent = 0;
    disableButton(false)
    reset.style.visibility = 'hidden'
    result.style.color = 'black'
    player.src = ''
    computer.src = ''
})

