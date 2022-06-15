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
    let playerSelection = prompt("Enter Rock, Paper or Scissors").toLowerCase();
    while ((playerSelection !== "rock") && (playerSelection !== "paper") && (playerSelection !== "scissors")){
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
/* function bestOfFiveGames() {
  console.clear();
  let computerScore = 0;
  let playerScore = 0;

  while (computerScore < 3 && playerScore < 3) {
    let playerSelection = prompt("Enter Rock, Paper or Scissors");
    let computerSelection = Math.floor(Math.random() * 3);
    let upper = playerSelection.toUpperCase();
    if (upper === "ROCK") {
      if (computerSelection === 0) {
        computerScore++;
        console.log("Computer's Choice: PAPER | Player's Choice: " + upper);
        console.log("You lose! Paper beats " + playerSelection);
      } else if (computerSelection === 1) {
        console.log("Computer's Choice: ROCK | Player's Choice: " + upper);
        console.log("Draw");
      } else if (computerSelection === 2) {
        playerScore++;
        console.log("Computer's Choice: SCISSORS | Player's Choice: " + upper);
        console.log("You Win! " + playerSelection + " beats Scissors");
      }
    } else if (upper === "PAPER") {
      if (computerSelection === 0) {
        console.log("Computer's Choice: PAPER | Player's Choice: " + upper);
        console.log("Draw");
      } else if (computerSelection === 1) {
        playerScore++;
        console.log("Computer's Choice: ROCK | Player's Choice: " + upper);
        console.log("You Win! " + playerSelection + " beats Rock");
      } else if (computerSelection === 2) {
        computerScore++;
        console.log("Computer's Choice: SCISSORS | Player's Choice: " + upper);
        console.log("You lose! Scissors beats " + playerSelection);
      }
    } else if (upper === "SCISSORS") {
      if (computerSelection === 0) {
        playerScore++;
        console.log("Computer's Choice: PAPER | Player's Choice: " + upper);
        console.log("You Win! " + playerSelection + " beats Paper");
      } else if (computerSelection === 1) {
        computerScore++;
        console.log("Computer's Choice: ROCK | Player's Choice: " + upper);
        console.log("You lose! Rock beats " + playerSelection);
      } else if (computerSelection === 2) {
        console.log("Computer's Choice: SCISSORS | Player's Choice: " + upper);
        console.log("Draw");
      }
    } else {
      console.log("Invalid word. Please enter Rock, Paper or Scissors");
    }
    console.log(
      "Score is: Computer: " + computerScore + " Player: " + playerScore
    );
  }
  if (computerScore > playerScore) {
    console.log(
      "Computer won the best of 5-match series: " +
        computerScore +
        "-" +
        playerScore +
        ". Bad Luck"
    );
  } else if (computerScore < playerScore) {
    console.log(
      "You won the best of 5-match series: " +
        playerScore +
        "-" +
        computerScore +
        ". Well Done"
    );
  }
} */

let result;

/* function Rock() {
  console.clear();
  let playerSelection = "Rock";
  let computerSelection = Math.floor(Math.random() * 3);

  if (computerSelection === 0) {
    computerScore++;
    result =
      "Computer's Choice: Paper | Player's Choice: " +
      playerSelection +
      "\n" +
      "You lose! Paper beats " +
      playerSelection;
    console.log(
      "Computer's Choice: Paper | Player's Choice: " + playerSelection
    );
    console.log("You lose! Paper beats " + playerSelection);
  } else if (computerSelection === 1) {
    result =
      "Computer's Choice: Rock | Player's Choice: " +
      playerSelection +
      "\n" +
      "Draw";
    console.log(
      "Computer's Choice: Rock | Player's Choice: " + playerSelection
    );
    console.log("Draw");
  } else if (computerSelection === 2) {
    playerScore++;
    result =
      "Computer's Choice: Scissors | Player's Choice: " +
      playerSelection +
      "\n" +
      "You Win! " +
      playerSelection +
      " beats Scissors";
    console.log(
      "Computer's Choice: Scissors | Player's Choice: " + playerSelection
    );
    console.log("You Win! " + playerSelection + " beats Scissors");
  }

  document.getElementById("ComputerScore").innerHTML = computerScore;
  document.getElementById("PlayerScore").innerHTML = playerScore;
  document.getElementById("Results").innerHTML = result;

  if ((computerScore + playerScore) === 10) {
    computerScore = 0;
    playerScore = 0;
    console.log(
      "Score is: Computer: " + computerScore + " Player: " + playerScore
    );
  } else {
    console.log(
      "Score is: Computer: " + computerScore + " Player: " + playerScore
    );
  }
}

function Paper() {
  console.clear();
  let playerSelection = "Paper";
  let computerSelection = Math.floor(Math.random() * 3);

  if (computerSelection === 0) {
    result =
      "Computer's Choice: Paper | Player's Choice: " +
      playerSelection +
      "\n" +
      "Draw";
    console.log(
      "Computer's Choice: Paper | Player's Choice: " + playerSelection
    );
    console.log("Draw");
  } else if (computerSelection === 1) {
    playerScore++;
    result =
      "Computer's Choice: Rock | Player's Choice: " +
      playerSelection +
      "\n" +
      "You Win! " +
      playerSelection +
      " beats Rock";
    console.log(
      "Computer's Choice: Rock | Player's Choice: " + playerSelection
    );
    console.log("You Win! " + playerSelection + " beats Rock");
  } else if (computerSelection === 2) {
    computerScore++;
    result =
      "Computer's Choice: Scissors | Player's Choice: " +
      playerSelection +
      "\n" +
      "You lose! Scissors beats " +
      playerSelection;
    console.log(
      "Computer's Choice: Scissors | Player's Choice: " + playerSelection
    );
    console.log("You lose! Scissors beats " + playerSelection);
  }

  document.getElementById("ComputerScore").innerHTML = computerScore;
  document.getElementById("PlayerScore").innerHTML = playerScore;
  document.getElementById("Results").innerHTML = result;

  if ((computerScore + playerScore) === 10) {
    computerScore = 0;
    playerScore = 0;
    console.log(
      "Score is: Computer: " + computerScore + " Player: " + playerScore
    );
  } else {
    console.log(
      "Score is: Computer: " + computerScore + " Player: " + playerScore
    );
  }
}

function Scissors() {
  console.clear();
  let playerSelection = "Scissors";
  let computerSelection = Math.floor(Math.random() * 3);

  if (computerSelection === 0) {
    playerScore++;
    result =
      "Computer's Choice: Paper | Player's Choice: " +
      playerSelection +
      "\n" +
      "You Win! " +
      playerSelection +
      " beats Paper";
    console.log(
      "Computer's Choice: Paper | Player's Choice: " + playerSelection
    );
    console.log("You Win! " + playerSelection + " beats Paper");
  } else if (computerSelection === 1) {
    result =
      "Computer's Choice: Rock | Player's Choice: " +
      playerSelection +
      "\n" +
      "You lose! Rock beats " +
      playerSelection;
    computerScore++;
    console.log(
      "Computer's Choice: Rock | Player's Choice: " + playerSelection
    );
    console.log("You lose! Rock beats " + playerSelection);
  } else if (computerSelection === 2) {
    result =
      "Computer's Choice: Scissors | Player's Choice: " +
      playerSelection +
      "\n" +
      "Draw";
    console.log(
      "Computer's Choice: Scissors | Player's Choice: " + playerSelection
    );
    console.log("Draw");
  }

  document.getElementById("ComputerScore").innerHTML = computerScore;
  document.getElementById("PlayerScore").innerHTML = playerScore;
  document.getElementById("Results").innerHTML = result;

  if ((computerScore + playerScore) === 10) {
    computerScore = 0;
    playerScore = 0;
    console.log(
      "Score is: Computer: " + computerScore + " Player: " + playerScore
    );
  } else {
    console.log(
      "Score is: Computer: " + computerScore + " Player: " + playerScore
    );
  }
} */
