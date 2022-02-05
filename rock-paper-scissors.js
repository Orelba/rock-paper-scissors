// UI Elements
const elPlayButtons = document.querySelectorAll('.play-button')
const elRoundResult = document.querySelector('.round-result')
const elRoundNumber = document.querySelector('#round-number')
const elPlayerScore = document.querySelector('#player-score')
const elComputerScore = document.querySelector('#computer-score')
const elBody = document.querySelector('body')
const elGameOverHeading = document.querySelector('.game-over-heading')
const elResetBtn = document.querySelector('.reset-btn')

// Initialize Game State
let playerScore = 0
let computerScore = 0
let roundNumber = 1

function computerPlay() {
  const randomNum = Math.floor(Math.random() * 3)
  switch (randomNum) {
    case 0:
      return 'Rock'
    case 1:
      return 'Paper'
    case 2:
      return 'Scissors'
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === 'Paper' && computerSelection === 'Rock') {
    return 'playerWin'
  } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
    return 'playerWin'
  } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
    return 'playerWin'
  } else if (playerSelection === computerSelection) {
    return 'tie'
  } else {
    return 'computerWin'
  }
}

function showResetOverlay() {
  elBody.classList.toggle('game-over')
  elGameOverHeading.classList.toggle('hide')
  elResetBtn.classList.toggle('hide')

  elResetBtn.addEventListener('click', resetGame)
}

function resetGame() {
  playerScore = 0
  computerScore = 0
  roundNumber = 1

  elPlayerScore.textContent = playerScore
  elComputerScore.textContent = computerScore
  elRoundNumber.textContent = roundNumber

  elGameOverHeading.classList.toggle('hide')
  elResetBtn.classList.toggle('hide')
  elBody.classList.toggle('game-over')

  elResetBtn.removeEventListener('click', resetGame)
}

function setOverlayHeading() {
  if (playerScore > computerScore) {
    return 'Game Over, You Win!'
  } else if (playerScore < computerScore) {
    return 'Game Over, You Lose!'
  } else {
    return "Game Over, It's a Tie!"
  }
}

function game() {
  elPlayButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const playerSelection = button.getAttribute('id')
      const computerSelection = computerPlay()

      // Play Round, Update Score and Show Round Result
      switch (playRound(playerSelection, computerSelection)) {
        case 'playerWin':
          playerScore++
          elRoundResult.textContent = `You Win! ${playerSelection} beats ${computerSelection}`
          elPlayerScore.textContent = playerScore
          break
        case 'computerWin':
          computerScore++
          elRoundResult.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`
          elComputerScore.textContent = computerScore
          break
        case 'tie':
          elRoundResult.textContent = `That's a tie! You both picked ${playerSelection}`
      }

      // Reset After 5 Rounds, Else Continue Counting Rounds
      if (roundNumber === 5) {
        showResetOverlay()
        elGameOverHeading.textContent = setOverlayHeading()
      } else {
        roundNumber++
        elRoundNumber.textContent = roundNumber
      }
    })
  })
}

game()
