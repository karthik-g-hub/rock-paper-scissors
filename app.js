const choices = ["rock", "paper", "scissors"];
let playerSelection, computerSelection;
let userScore = 0,
  computerScore = 0;
function computerPlay() {
  let computerChoice = Math.floor(Math.random() * 3);
  return choices[computerChoice];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = prompt("Enter choice:").toLowerCase();
  computerSelection = computerPlay();
  if (
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "scissors" && computerSelection == "rock") ||
    (playerSelection == "paper" && computerSelection == "scissors")
  ) {
    computerScore++;
    return `You lose! ${computerSelection} beats ${playerSelection}!`;
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    userScore++;
    return `You win! ${playerSelection} beats ${computerSelection}!`;
  } else {
    return `It's a draw! You chose ${playerSelection} and the computer chose ${computerSelection}`;
  }
}

function game() {
  console.log(playRound(playerSelection, computerSelection));
  console.log(playRound(playerSelection, computerSelection));
  console.log(playRound(playerSelection, computerSelection));
  console.log(playRound(playerSelection, computerSelection));
  console.log(playRound(playerSelection, computerSelection));
  let finalMessage = `You scored ${userScore} and the computer scored ${computerScore}. `;
  if (userScore > computerScore) {
    return finalMessage + "You win!";
  } else if (userScore < computerScore) {
    return finalMessage + "You lose!";
  } else return finalMessage;
}

console.log(game());
