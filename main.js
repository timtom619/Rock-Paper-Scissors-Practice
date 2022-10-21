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
  const playerChoice = playerSelection.toLowerCase();
  const computerChoice = computerSelection();
  console.log(`Player: ${playerChoice}`);
  console.log(`Computer: ${computerChoice}`);
  switch (true) {
    case (playerChoice === computerChoice):
      return `Tie! ${playerChoice} = ${computerChoice}`;
    case (playerChoice === 'rock' && computerChoice === 'scissors'):
      return `You Win! ${playerChoice} beats ${computerChoice}`;
    case (playerChoice === 'paper' && computerChoice === 'rock'):
      return `You Win! ${playerChoice} beats ${computerChoice}`;
    case (playerChoice === 'scissors' && computerChoice === 'paper'):
      return `You Win! ${playerChoice} beats ${computerChoice}`;
    default: 
      return `You Lose... ${computerChoice} beats ${playerChoice}`;
  }
}

console.log(playRound('paper', getComputerChoice));