let computerChoice = 0;
let roundCounter = 0;
let computerWins = 0;
let playerWins = 0;

function playRound(pcChoice, personChoice) {

    function getComputerChoice () {
        computerChoice = Math.floor(Math.random() * 3) + 1;
        if (computerChoice == 1) {
            computerChoice = "rock";
        } else if (computerChoice == 2) {
            computerChoice = "paper";
        } else {
            computerChoice = "scissors";
        }
        console.log("Computer chose: " + computerChoice.toUpperCase() + "!");
        return computerChoice;
    }
    getComputerChoice();

    let playerChoice = prompt("What weapon do you choose? Rock, Paper or Scissors?").toLowerCase();
    console.log("Player chose: " + playerChoice.toUpperCase() + "!");

    switch(playerChoice) {
        case "rock":
            if (computerChoice === "rock") {
                console.log("Game is a tie!");
            } else if (computerChoice === "paper") {
                console.log("You LOSE! Paper beats rock!");
                computerWins++;
            } else {
                console.log("You WIN! Rock beat scissors!");
                playerWins++;
            }
            break;
        case "paper":
            if (computerChoice === "paper") {
                    console.log("Game is a tie!");
                } else if (computerChoice === "scissors") {
                    console.log("You LOSE! Scissors beats paper!");
                    computerWins++;
                } else {
                    console.log("You WIN! Paper beats rock!");
                    playerWins++;
                }
            break;
        case "scissors":
            if (computerChoice === "scissors") {
                    console.log("Game is a tie!");
                } else if (computerChoice === "rock") {
                    console.log("You LOSE! Rock beats scissors!");
                    computerWins++;
                } else {
                    console.log("You WIN! Scissors beats paper!");
                    playerWins++;
                }
            break;
        } 
}
function game() {
    while (true) {
        playRound();
        if (computerWins === 3) {
            console.log("Computer WINS!")
            console.log("Computer wins: " + computerWins + " | " + "Player wins: " + playerWins)
            break;
        } else if (playerWins === 3) {
            console.log("Player WINS!")
            console.log("Player wins: " + playerWins + " | " + "Computer wins: " + computerWins)
            break;
        }
    }
}
game();