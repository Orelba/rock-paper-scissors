const elPlayButtons = document.querySelectorAll('.play-button')
const elRoundResult = document.querySelector('.round-result')
const elRoundNumber = document.querySelector('#round-number')
const elPlayerScore = document.querySelector('#player-score')
const elComputerScore = document.querySelector('#computer-score')

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

function game() {
  // Initial State
  let playerScore = 0
  let computerScore = 0
  let roundNumber = 0

  elPlayButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const playerSelection = button.getAttribute('id')
      const computerSelection = computerPlay()
      
      // Reset after 5 rounds
      if (roundNumber === 5) {
        playerScore = 0
        computerScore = 0
        roundNumber = 0
        elPlayerScore.textContent = playerScore
        elComputerScore.textContent = computerScore
      }
      
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
      
      roundNumber++
      elRoundNumber.textContent = roundNumber
    })
  })
}

game()
