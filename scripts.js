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
        return 'You Win! Rock beats Scissors.';
    } else if (lowerCasePlayer === 'rock' && lowerCaseComp ==='paper' ) {
        return 'You Lose! Paper beats Rock.';
    } else if (lowerCasePlayer ==='rock' && lowerCaseComp === 'rock') {
        return 'Draw!'
    } else if (lowerCasePlayer === 'paper' && lowerCaseComp ==='scissors') {
        return 'You Lose! Scissors beats Paper.';
    } else if (lowerCasePlayer === 'paper' && lowerCaseComp ==='paper' ) {
        return 'Draw!';
    } else if (lowerCasePlayer ==='paper' && lowerCaseComp === 'rock') {
        return 'You Win! Paper beats Rock.'
    } else if (lowerCasePlayer === 'scissors' && lowerCaseComp ==='scissors') {
        return 'Draw!';
    } else if (lowerCasePlayer === 'scissors' && lowerCaseComp ==='paper' ) {
        return 'You Win! Scissors beats Paper.';
    } else if (lowerCasePlayer ==='scissors' && lowerCaseComp === 'rock') {
        return 'You Lose! Rock beats Scissors.'
    }
    
}

console.log(singleRound('RoCK', 'paper'));