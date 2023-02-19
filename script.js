//your code here
const compArray = ["rock", "paper", "scissor"];
let userChoice = document.getElementById("user-choice").textContent;
let computerChoice = document.getElementById("computer-choose").textContent;
let userPoints = 0;
document.getElementById("userPoints").textContent = userPoints;
let compPoints = 0;
document.getElementById("compPoints").textContent = compPoints;

// game logic who wins and points increament
function winnerWithChoice(userChoice, computerChoice) {
  document.getElementById("user-choice").textContent = userChoice;
  document.getElementById("computer-choose").textContent = computerChoice;

  //  when match is tie
  if (userChoice === computerChoice) {
    document.getElementById("roundResult").textContent = "Tie";

    // when comp wins
  } else if (
    (userChoice === "rock" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "scissor") ||
    (userChoice === "scissor" && computerChoice === "rock")
  ) {
    compPoints++;
    document.getElementById("roundResult").textContent = "Computer";
    document.getElementById("compPoints").textContent = compPoints;

    // when user wins
  } else {
    userPoints++;
    document.getElementById("roundResult").textContent = "User";
    document.getElementById("userPoints").textContent = userPoints;
  }

  // when user wins
}

// Game starts after clicking on play button
document.getElementById("play-game").addEventListener("click", function () {
  let noOfRounds = Number(document.querySelector("#game-number").value);
  let roundsLeft = noOfRounds;

  // for loop
  //   for (let i = 1; i <= noOfRounds; i++) {

  let randomNumber = Math.floor(Math.random() * 3);
  roundsLeft--;

  document.getElementById("rock").addEventListener("click", function () {
    userChoice = "rock";
    computerChoice = compArray[randomNumber];
    winnerWithChoice(userChoice, computerChoice);
  });

  document.getElementById("paper").addEventListener("click", function () {
    userChoice = "paper";
    document.getElementById("user-choice").textContent = userChoice;
    computerChoice = compArray[randomNumber];
    winnerWithChoice(userChoice, computerChoice);
  });

  document.getElementById("scissor").addEventListener("click", function () {
    userChoice = "scissor";
    document.getElementById("user-choice").textContent = userChoice;
    computerChoice = compArray[randomNumber];
    winnerWithChoice(userChoice, computerChoice);
  });
  // updating the rounds left
  document.getElementById("roundsLeft").textContent = roundsLeft;

  //   }

  // Final Game winner
  if (userPoints > compPoints) {
    document.getElementById("game-result").textContent = "User";
  } else if (userPoints < compPoints) {
    document.getElementById("game-result").textContent = "Computer";
  } else document.getElementById("game-result").textContent = "Tie";
});