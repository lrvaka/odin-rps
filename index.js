//computerPlay returns either rock, paper, or scissors
const GAME_CHOICES = ["rock", "paper", "scissors"]

const computerPlay = () => {
  let random = Math.floor(Math.random() * 3)
  console.log(GAME_CHOICES[random])
}
computerPlay()
