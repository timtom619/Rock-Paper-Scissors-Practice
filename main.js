// Computer should choose their selection
// Computer has three choices 'Rock', 'Paper', 'Scissors'
// Computer should choose randomly
  // Rock = 0.33, Paper = 0.66, Scissors = > 0.66
// function should return back the selection

function getComputerChoice() {
  const computerSelection = Math.random();

  if(computerSelection <= 0.33) {
    return 'rock';
  } else if(computerSelection > 0.33 && computerSelection <= 0.66) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

// should play a single round
// should take two parameters - playerSelection and getComputerChoice
// should return a string declaring the winner in this format 'You Lose/Win! Paper beats Rock
// the playerSelection should be case-insensitive to allow for input variation
// Win cases: rock > scissors || paper > rock || scissors > paper
// Lose Condition: inverse of above

function playRound(playerSelection, computerSelection) {
  let winner;
  const playerChoice = playerSelection.toLowerCase();
  const computerChoice = computerSelection();
  // console.log(`Player: ${playerChoice}`);
  // console.log(`Computer: ${computerChoice}`);
  switch (true) {
    case (playerChoice === computerChoice):
      winner = 'player';
      console.log(`Tie! ${playerChoice} = ${computerChoice}`);
      break;
    case (playerChoice === 'rock' && computerChoice === 'scissors'):
      winner = 'player';
      console.log(`You Win! ${playerChoice} beats ${computerChoice}`);
      break;
    case (playerChoice === 'paper' && computerChoice === 'rock'):
      winner = 'player';
      console.log(`You Win! ${playerChoice} beats ${computerChoice}`);
      break;
    case (playerChoice === 'scissors' && computerChoice === 'paper'):
      winner = 'player';
      console.log(`You Win! ${playerChoice} beats ${computerChoice}`);
      break;
    default: 
      winner = 'computer';
      console.log(`You Lose... ${computerChoice} beats ${playerChoice}`);
  } 
  // return winner
  return winner;
}

// implement a function named game()
// function should invoke playRound function inside this function 
// playRound function should be executed for 5 rounds
// game() should keep score of each round 
// game() should report a winner and loser at the end of 5 rounds

function game() {
  let playerTally = [];
  let computerTally = [];
  let matchWinner
  for(let i = 0; i < 5; i++) {
    let roundWinner;
    roundWinner = playRound(prompt('Pick: Rock, Paper, or Scissors'), getComputerChoice);
    // Add up tally of round win
    roundWinner === 'player' ? playerTally.push('win') : computerTally.push('win');
  }

  //report winner and loser at the end of 5 rounds
  if(playerTally.length === computerTally.length) matchWinner = 'tie';

  playerTally.length > computerTally.length ? matchWinner = 'player' : matchWinner = 'computer';

  if(matchWinner === 'tie') {
    console.log(`It is a tie. Player: ${playerTally.length} Computer: ${computerTally.length}`);
  } else if (matchWinner === 'player') {
    console.log(`You Win! Player: ${playerTally.length} Computer: ${computerTally.length}`);
  } else {
    console.log(`You Lose... Player: ${playerTally.length} Computer: ${computerTally.length}`);
  }
}

game();