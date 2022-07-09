//computerPlay returns either rock, paper, or scissors
const GAME_CHOICES = ["rock", "paper", "scissors"]

const computerPlay = () => {
  let random = Math.floor(Math.random() * 3)
  return GAME_CHOICES[random]
}

const playRound = (playerSelection, computerSelection) => {
  if (!playerSelection || !GAME_CHOICES.includes(playerSelection.toLowerCase()))
    return alert("Please enter a valid value")

  const playerChoice = playerSelection.toLowerCase()

  switch (playerChoice) {
    case "rock":
      if (computerSelection == "scissors") {
        return "You win! Rock beats scissors"
      } else if (computerSelection == "paper") {
        return "You lose! Paper beats rock"
      } else {
        return "You tie! You both did rock"
      }
    case "paper":
      if (computerSelection == "scissors") {
        return "You lose! Scissors beats paper"
      } else if (computerSelection == "paper") {
        return "You tie! You both did paper"
      } else {
        return "You win! Paper beats rock"
      }
    case "scissors":
      if (computerSelection == "scissors") {
        return "You tie! You both did scissors"
      } else if (computerSelection == "paper") {
        return "You win! Scissors beats paper"
      } else {
        return "You lose! Rock beats scissors"
      }
  }
}

const playerSelection = prompt("Pick rock, paper, scissors")
const computerSelection = computerPlay()

console.log(playRound(playerSelection, computerSelection))
