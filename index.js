//computerPlay returns either rock, paper, or scissors
const GAME_CHOICES = ["rock", "paper", "scissors"]
let playerSelection = ""
let userScore = 0
let compScore = 0
const body = document.body
const playBtn = document.createElement("button")
const rockBtn = document.createElement("button")
const paperBtn = document.createElement("button")
const scissorsBtn = document.createElement("button")
const restartBtn = document.createElement("button")

const selectionSection = document.createElement("div")
const selection = document.createElement("h3")

const scoreSection = document.createElement("div")
const score = document.createElement("h3")

const resultsSection = document.createElement("div")
const results = document.createElement("h3")

playBtn.setAttribute("disabled", "")

playBtn.textContent = "Play RPS"
rockBtn.textContent = "rock"
paperBtn.textContent = "paper"
scissorsBtn.textContent = "scissors"
restartBtn.textContent = "Restart Game"
selectionSection.appendChild(selection)
resultsSection.appendChild(results)
scoreSection.appendChild(score)

body.appendChild(playBtn)
body.appendChild(rockBtn)
body.appendChild(paperBtn)
body.appendChild(scissorsBtn)
body.appendChild(selectionSection)
body.appendChild(resultsSection)
body.appendChild(scoreSection)

const computerPlay = () => {
  let random = Math.floor(Math.random() * 3)
  return GAME_CHOICES[random]
}

const playRound = (playerSelection, computerSelection) => {
  if (!playerSelection || !GAME_CHOICES.includes(playerSelection.toLowerCase()))
    return alert("Please enter a valid value")

  const playerChoice = playerSelection.toLowerCase()
  console.log(playerSelection)

  switch (playerChoice) {
    case "rock":
      if (computerSelection == "scissors") {
        userScore++
        return "You win! Rock beats scissors"
      } else if (computerSelection == "paper") {
        compScore++
        return "You lose! Paper beats rock"
      } else {
        return "You tie! You both did rock"
      }
    case "paper":
      if (computerSelection == "scissors") {
        compScore++
        return "You lose! Scissors beats paper"
      } else if (computerSelection == "paper") {
        return "You tie! You both did paper"
      } else {
        userScore++
        return "You win! Paper beats rock"
      }
    case "scissors":
      if (computerSelection == "scissors") {
        return "You tie! You both did scissors"
      } else if (computerSelection == "paper") {
        userScore++
        return "You win! Scissors beats paper"
      } else {
        compScore++
        return "You lose! Rock beats scissors"
      }
  }
}

const playGame = () => {
  results.textContent = playRound(playerSelection, computerPlay())
  score.textContent = `${userScore} | ${compScore}`

  if (userScore === 5) {
    results.textContent = `You won all 5 rounds`
    playBtn.setAttribute("disabled", "")
    rockBtn.setAttribute("disabled", "")
    scissorsBtn.setAttribute("disabled", "")
    paperBtn.setAttribute("disabled", "")
    body.appendChild(restartBtn)
  }
  if (compScore === 5) {
    results.textContent = `Computer won all 5 rounds`
    playBtn.setAttribute("disabled", "")
    rockBtn.setAttribute("disabled", "")
    scissorsBtn.setAttribute("disabled", "")
    paperBtn.setAttribute("disabled", "")
    body.appendChild(restartBtn)
  }
}

playBtn.addEventListener("click", () => playGame())
rockBtn.addEventListener("click", () => {
  playBtn.removeAttribute("disabled")
  playerSelection = "rock"
  selection.textContent = "You selected rock"
})
paperBtn.addEventListener("click", () => {
  playBtn.removeAttribute("disabled")
  playerSelection = "paper"
  selection.textContent = "You selected paper"
})
scissorsBtn.addEventListener("click", () => {
  playBtn.removeAttribute("disabled")
  playerSelection = "scissors"
  selection.textContent = "You selected scissors"
})
restartBtn.addEventListener("click", (e) => {
  results.textContent = ``
  userScore = 0
  compScore = 0
  score.textContent = `${userScore} | ${compScore}`
  playBtn.removeAttribute("disabled")
  rockBtn.removeAttribute("disabled")
  scissorsBtn.removeAttribute("disabled")
  paperBtn.removeAttribute("disabled")
  restartBtn.remove()
})
