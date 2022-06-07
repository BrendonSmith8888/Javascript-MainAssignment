function computerPlay() {
  return (computerChoice = Math.floor(Math.random() * 3));
}

let computerScore = 0;
let playerScore = 0;

function playRound(playerSelection, computerSelection) {
  let upper = playerSelection.toUpperCase();

  // Note on Computer's Choice
  // computerSelection 0 = Paper
  // computerSelection 1 = Rock
  // computerSelection 2 = Scissors

  if (upper === "ROCK") {
    if (computerSelection === 0) {
      computerScore++;
      return "You lose! Paper beats " + playerSelection;
    } else if (computerSelection === 1) {
      return "Draw";
    } else if (computerSelection === 2) {
      playerScore++;
      return "You Win! " + playerSelection + " beats Scissors";
    }
  } else if (upper === "PAPER") {
    if (computerSelection === 0) {
      return "Draw";
    } else if (computerSelection === 1) {
      playerScore++;
      return "You Win! " + playerSelection + " beats Rock";
    } else if (computerSelection === 2) {
      computerScore++;
      return "You lose! Scissors beats " + playerSelection;
    }
  } else if (upper === "SCISSORS") {
    if (computerSelection === 0) {
      playerScore++;
      return "You Win! " + playerSelection + " beats Paper";
    } else if (computerSelection === 1) {
      computerScore++;
      return "You lose! Rock beats " + playerSelection;
    } else if (computerSelection === 2) {
      return "Draw";
    }
  } else {
    return "Invalid word. Please enter Rock, Paper or Scissors";
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Enter Rock, Paper or Scissors");
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
    console.log(
      "Score is: Computer: " + computerScore + " Player: " + playerScore
    );
    
  }
  if(computerScore>playerScore){
    console.log("Computer won 5-match series: "+computerScore+"-"+playerScore+". Bad Luck")
  }
  else if(computerScore<playerScore){
    console.log("You won 5-match series: "+playerScore+"-"+computerScore+". Well Done")
  }
  else{
    console.log("The 5-match series was drawn: "+computerScore+"-"+playerScore)
  }
}

/* game(); */

function bestOfFiveGames() {
  let computerScore = 0;
  let playerScore = 0;  

  while (computerScore < 3 && playerScore < 3) {
    let playerSelection = prompt("Enter Rock, Paper or Scissors");
    let computerSelection = Math.floor(Math.random() * 3);
    let upper = playerSelection.toUpperCase();
    if (upper === "ROCK") {
      if (computerSelection === 0) {
        computerScore++;
        console.log("You lose! Paper beats " + playerSelection);
      } else if (computerSelection === 1) {
        console.log("Draw");
      } else if (computerSelection === 2) {
        playerScore++;
        console.log("You Win! " + playerSelection + " beats Scissors");
      }
    } else if (upper === "PAPER") {
      if (computerSelection === 0) {
        console.log("Draw");
      } else if (computerSelection === 1) {
        playerScore++;
        console.log("You Win! " + playerSelection + " beats Rock");
      } else if (computerSelection === 2) {
        computerScore++;
        console.log("You lose! Scissors beats " + playerSelection);
      }
    } else if (upper === "SCISSORS") {
      if (computerSelection === 0) {
        playerScore++;
        console.log("You Win! " + playerSelection + " beats Paper");
      } else if (computerSelection === 1) {
        computerScore++;
        console.log("You lose! Rock beats " + playerSelection);
      } else if (computerSelection === 2) {
        console.log("Draw");
      }
    } else {
      console.log("Invalid word. Please enter Rock, Paper or Scissors");
    }
    console.log(
      "Score is: Computer: " + computerScore + " Player: " + playerScore
    );
  }
  if(computerScore>playerScore){
    console.log("Computer won the best of 5-match series: "+computerScore+"-"+playerScore+". Bad Luck")
  }
  else if(computerScore<playerScore){
    console.log("You won the best of 5-match series: "+playerScore+"-"+computerScore+". Well Done")
  }
}
