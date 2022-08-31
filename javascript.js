const choiceButtons = document.querySelectorAll('.choice')
const buttons = document.querySelectorAll('button')
const playerIcon = document.createElement('i')
const computerIcon = document.createElement('i')
const resetButton = document.getElementById('reset')
const par = document.createElement('p')
let playerChoice = ''
let computerChoice = ''
let playerScore = '0'
let computerScore = '0'
let result = ''



choiceButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (playerScore == 5 || computerScore == 5) {
            choiceButtons.forEach(button, button.setAttribute("disabled", ""))
        }
        playerChoice = button.value
        computerChoice = getComputerChoice()
        playRound()
      })
})

function getComputerChoice () {
    const choices = ['rock', 'paper', 'scissors']
    computerChoice = choices[Math.floor(Math.random() * 3)];
    return computerChoice;
}

function playRound() {
    switch(playerChoice) {
        case "rock":
            playerIcon.removeAttribute('class')
            computerIcon.removeAttribute('class')
            playerIcon.classList.add('fa', 'fa-hand-rock-o')
            if (computerChoice === "rock") {
                computerIcon.classList.add('fa', 'fa-hand-rock-o')
                result = "Round is a tie!"
                printScore(result)
            } else if (computerChoice === "paper") {
                computerIcon.classList.add('fa', 'fa-hand-paper-o')
                result = "You LOST the round! Paper beats rock!"
                computerScore++;
                if (computerScore == 5) {
                    par.textContent = "Unfortunately, you lost.."
                    par.classList.add("losing")
                    document.querySelector('.game-end').prepend(par)
                }
                printScore(result)
            } else {
                result = "You WIN the round! Rock beat scissors!"
                computerIcon.classList.add('fa', 'fa-hand-scissors-o')
                playerScore++;
                if (playerScore == 5) {
                    par.textContent = "Congratulations, you WON!"
                    par.classList.add("winning")
                    document.querySelector('.game-end').prepend(par)
                }
                printScore(result)
            }
            break;
        case "paper":
            playerIcon.removeAttribute('class')
            computerIcon.removeAttribute('class')
            playerIcon.classList.add('fa', 'fa-hand-paper-o')
            if (computerChoice === "paper") {
                computerIcon.classList.add('fa', 'fa-hand-paper-o')
                result = "Round is a tie!"
                printScore(result)
            } else if (computerChoice === "scissors") {
                computerIcon.classList.add('fa', 'fa-hand-scissors-o')
                result = "You LOST the round! Scissors beats paper!"
                computerScore++;
                if (computerScore == 5) {
                    par.textContent = "Unfortunately, you lost.."
                    par.classList.add("losing")
                    document.querySelector('.game-end').prepend(par)
                }
                printScore(result)
            } else {
                computerIcon.classList.add('fa', 'fa-hand-rock-o')
                result = "You WIN the round! Paper beats rock!"
                playerScore++;
                if (playerScore == 5) {
                    par.textContent = "Congratulations, you WON!"
                    par.classList.add("winning")
                    document.querySelector('.game-end').prepend(par)
                }
                printScore(result)
            }
            break;
        case "scissors":
            playerIcon.removeAttribute('class')
            computerIcon.removeAttribute('class')
            playerIcon.classList.add('fa', 'fa-hand-scissors-o')
            if (computerChoice === "scissors") {
                computerIcon.classList.add('fa', 'fa-hand-scissors-o')
                result = "Round is a tie!"
                printScore(result)
            } else if (computerChoice === "rock") {
                computerIcon.classList.add('fa', 'fa-hand-rock-o')
                result = "You LOST the round! Rock beats scissors!"
                computerScore++;
                if (computerScore == 5) {
                    par.textContent = "Unfortunately, you lost.."
                    par.classList.add("losing")
                    document.querySelector('.game-end').prepend(par)
                }
                printScore(result)
            } else {
                computerIcon.classList.add('fa', 'fa-hand-paper-o')
                result = "You WIN the round! Scissors beats paper!"
                playerScore++;
                if (playerScore == 5) {
                    par.textContent = "Congratulations, you WON!"
                    par.classList.add("winning")
                    document.querySelector('.game-end').prepend(par)
                }
                printScore(result)
            }
            break;
    }
}

function printScore(outcome) {
    playerIcon.classList.add('result-icons')
    computerIcon.classList.add('result-icons')
    document.querySelector('.player').textContent = playerScore
    document.querySelector('.computer').textContent = computerScore
    document.querySelector('.outcome').textContent = outcome
    document.querySelector('.past-games').appendChild(playerIcon)
    document.querySelector('.past-games').appendChild(computerIcon)
}

resetButton.addEventListener("click", () => {
    playerScore = 0
    computerScore = 0

    document.querySelector('.player').textContent = playerScore
    document.querySelector('.computer').textContent = computerScore
    document.querySelector('.outcome').textContent = ""
    par.textContent = ""
    document.querySelector('.past-games').removeChild(playerIcon)
    document.querySelector('.past-games').removeChild(computerIcon)


    choiceButtons.forEach(button => {
                button.removeAttribute("disabled")
            })
    
})