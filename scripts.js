// Randomly return either Rock, Paper, or Scissors.
function getComputerChoice() {

    // choose a value 1, 2, or 3.
    let compNum = Math.trunc(Math.random() * (4-1) + 1);

    // return Rock, Paper or Scissors according to the value
    if (compNum === 1) {
        return 'Rock';
    } else if (compNum === 2) {
        return 'Paper';
    } else {
        return 'Scissors';
    }

}

function singleRound(playerSelection, computerSelection) {
    // turn both strings to lowercase
    lowerCasePlayer = playerSelection.toLowerCase();
    lowerCaseComp = computerSelection.toLowerCase(); 
    // compare two values
    // return a string declaring the winner
    if (lowerCasePlayer === 'rock' && lowerCaseComp ==='scissors') {
        return 1
    } else if (lowerCasePlayer === 'rock' && lowerCaseComp ==='paper' ) {
        return -1
    } else if (lowerCasePlayer ==='rock' && lowerCaseComp === 'rock') {
        return 0
    } else if (lowerCasePlayer === 'paper' && lowerCaseComp ==='scissors') {
        return -1
    } else if (lowerCasePlayer === 'paper' && lowerCaseComp ==='paper' ) {
        return 0
    } else if (lowerCasePlayer ==='paper' && lowerCaseComp === 'rock') {
        return 1
    } else if (lowerCasePlayer === 'scissors' && lowerCaseComp ==='scissors') {
        return 0
    } else if (lowerCasePlayer === 'scissors' && lowerCaseComp ==='paper' ) {
        return 1
    } else if (lowerCasePlayer ==='scissors' && lowerCaseComp === 'rock') {
        return -1
    }
    
}

// Notify result
function changeResult(result) {
    if (result === 1) {
        displayResult.textContent = 'You win this round!';
    } else if (result === 0) {
        displayResult.textContent = 'Draw for this round!';
    } else {
        displayResult.textContent = 'You lose this round!';
    }
}


const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const menu = document.querySelector('#menu');
let displayResult = document.querySelector('#result');
let displayScore = document.querySelector('#score');
let displayFinal = document.querySelector('#final');


let gameResult = 0;
let playerScore = 0;
let computerScore = 0;
menu.addEventListener('click', (event) => {
    let target = event.target;
    switch(target.id) {
        case 'rock':
            gameResult = singleRound('rock', getComputerChoice());
            changeResult(gameResult);
            break;
        case 'paper':
            gameResult = singleRound('paper', getComputerChoice());
            changeResult(gameResult);
            break;
        case 'scissors':
            gameResult = singleRound('scissors', getComputerChoice());
            changeResult(gameResult);
            break;
    }
    
    if (gameResult===1) {
        playerScore++;
    } else if (gameResult === -1) {
        computerScore++;
    }
    displayScore.textContent = `${playerScore}, ${computerScore}`;

    if (playerScore === 5) {
        displayFinal.textContent = 'PLAYER WIN!';
    } else if (playerScore === -5) {
        displayFinal.textContent = 'COMPUTER WIN!';
    }
})
