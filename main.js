// Computer should choose their selection
// Computer has three choices 'Rock', 'Paper', 'Scissors'
// Computer should choose randomly
  // Rock = 0.33, Paper = 0.66, Scissors = > 0.66
// function should return back the selection

function getcomputerChoice() {
  const computerSelection = Math.random();

  if(computerSelection <= 0.33) {
    console.log(computerSelection);
    return 'rock';
  } else if(computerSelection > 0.33 && computerSelection <= 0.66) {
    console.log(computerSelection);
    return 'paper';
  } else {
    console.log(computerSelection);
    return 'scissors';
  }
}

console.log(getcomputerChoice());