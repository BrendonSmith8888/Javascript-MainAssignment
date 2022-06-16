function computerPlay() {
  return (computerChoice = Math.floor(Math.random() * 3));
}

let computerScore = 0;
let playerScore = 0;

function playRound(playerSelection, computerSelection) {
  let upper = playerSelection.toUpperCase();
  // Note on Computer's Choices:
  // computerSelection 0 = Paper
  // computerSelection 1 = Rock
  // computerSelection 2 = Scissors

  if (upper === "ROCK") {
    if (computerSelection === 0) {
      computerScore++;
      return (
        "Computer's Choice: PAPER | Player's Choice: " +
        upper +
        "\n" +
        "You lose! Paper beats " +
        playerSelection
      );
    } else if (computerSelection === 1) {
      return (
        "Computer's Choice: ROCK | Player's Choice: " + upper + "\n" + "Draw"
      );
    } else if (computerSelection === 2) {
      playerScore++;
      return (
        "Computer's Choice: SCISSORS | Player's Choice: " +
        upper +
        "\n" +
        "You Win! " +
        playerSelection +
        " beats Scissors"
      );
    }
  } else if (upper === "PAPER") {
    if (computerSelection === 0) {
      return (
        "Computer's Choice: PAPER | Player's Choice: " + upper + "\n" + "Draw"
      );
    } else if (computerSelection === 1) {
      playerScore++;
      return (
        "Computer's Choice: ROCK | Player's Choice: " +
        upper +
        "\n" +
        "You Win! " +
        playerSelection +
        " beats Rock"
      );
    } else if (computerSelection === 2) {
      computerScore++;
      return (
        "Computer's Choice: SCISSORS | Player's Choice: " +
        upper +
        "\n" +
        "You lose! Scissors beats " +
        playerSelection
      );
    }
  } else if (upper === "SCISSORS") {
    if (computerSelection === 0) {
      playerScore++;
      return (
        "Computer's Choice: PAPER | Player's Choice: " +
        upper +
        "\n" +
        "You Win! " +
        playerSelection +
        " beats Paper"
      );
    } else if (computerSelection === 1) {
      computerScore++;
      return (
        "Computer's Choice: ROCK | Player's Choice: " +
        upper +
        "\n" +
        "You lose! Rock beats " +
        playerSelection
      );
    } else if (computerSelection === 2) {
      return (
        "Computer's Choice: SCISSORS | Player's Choice: " +
        upper +
        "\n" +
        "Draw"
      );
    }
  } else {
    return "Invalid word. Please enter Rock, Paper or Scissors";
  }
}

function game() {
  console.clear();
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Enter Rock, Paper or Scissors");
    while ((playerSelection.toLowerCase() !== "rock") && (playerSelection.toLowerCase() !== "paper") && (playerSelection.toLowerCase() !== "scissors")){
      let lower = prompt("Incorrect input.  Please enter either rock, paper, or scissors");
      playerSelection = lower;
    }
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
    console.log(
      "Score is: Computer: " + computerScore + " Player: " + playerScore
    );
  }
  if (computerScore > playerScore) {
    console.log(
      "Computer the won 5-match series: " +
        computerScore +
        "-" +
        playerScore +
        ". Bad Luck"
    );
  } else if (computerScore < playerScore) {
    console.log(
      "You won the 5-match series: " +
        playerScore +
        "-" +
        computerScore +
        ". Well Done"
    );
  } else {
    console.log(
      "The 5-match series was drawn: " + computerScore + "-" + playerScore
    );
  }
  computerScore = 0;
  playerScore = 0;
}

game();