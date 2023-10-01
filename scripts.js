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
        // return 'You Win! Rock beats Scissors.';
        return 1
    } else if (lowerCasePlayer === 'rock' && lowerCaseComp ==='paper' ) {
        // return 'You Lose! Paper beats Rock.';
        return -1
    } else if (lowerCasePlayer ==='rock' && lowerCaseComp === 'rock') {
        // return 'Draw!'
        return 0
    } else if (lowerCasePlayer === 'paper' && lowerCaseComp ==='scissors') {
        // return 'You Lose! Scissors beats Paper.';
        return -1
    } else if (lowerCasePlayer === 'paper' && lowerCaseComp ==='paper' ) {
        // return 'Draw!';
        return 0
    } else if (lowerCasePlayer ==='paper' && lowerCaseComp === 'rock') {
        // return 'You Win! Paper beats Rock.'
        return 1
    } else if (lowerCasePlayer === 'scissors' && lowerCaseComp ==='scissors') {
        // return 'Draw!';
        return 0
    } else if (lowerCasePlayer === 'scissors' && lowerCaseComp ==='paper' ) {
        // return 'You Win! Scissors beats Paper.';
        return 1
    } else if (lowerCasePlayer ==='scissors' && lowerCaseComp === 'rock') {
        // return 'You Lose! Rock beats Scissors.'
        return -1
    }
    
}
// Testing the singleRound function
// const playerSelection = 'rock';
// const computerSelection = getComputerChoice();
// console.log(singleRound(playerSelection, computerSelection));

function game() {
    // set up the scores
    let playerScore = 0;

    // play 5 rounds of single games
    for (i=0; i < 5; i++) {
        // ask the user for value
        let playerSelection = prompt("Rock, Paper, or Scissors?");
        // get computer value
        let computerSelection = getComputerChoice();
        // play the round and keep the score
        let result = singleRound(playerSelection, computerSelection);
        if (result === 1) {
            console.log("You win this round");
        } else if (result === 0) {
            console.log("Draw for this round");
        } else {
            console.log("You lose this round");
        }
        // add the score to playerScore
        playerScore += result;
    }

    // compare the values
    if (playerScore > 0) {
        return "Player Win!";
    } else if (playerScore < 0) {
        return "Computer Win!";
    } else {
        return "Draw!";
    }
}
// report the winner

console.log(game());