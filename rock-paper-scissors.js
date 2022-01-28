function getPlayerInput() {
  let playerInput = prompt('Please Write your choice here:').trim()
  const pInputFirstLetter = playerInput.charAt(0).toUpperCase()
  const pInputRestOfLetters = playerInput.slice(1).toLowerCase()
  playerInput = pInputFirstLetter + pInputRestOfLetters

  if (playerInput !== 'Rock' && playerInput !== 'Paper' && playerInput !== 'Scissors') {
    console.log(`${playerInput} is not valid, Please enter a valid choice!`)
    return getPlayerInput()
  } else {
    return playerInput
  }
}

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
  let playerScore = 0
  let computerScore = 0

  for (let i = 0; i < 5; i++) {
    let playerSelection = getPlayerInput()
    let computerSelection = computerPlay()

    switch (playRound(playerSelection, computerSelection)) {
      case 'playerWin':
        playerScore++
        console.log(`You Win! ${playerSelection} beats ${computerSelection.toLowerCase()}`)
        break
      case 'computerWin':
        computerScore++
        console.log(`You Lose! ${computerSelection} beats ${playerSelection.toLowerCase()}`)
        break
      case 'tie':
        console.log(`That's a tie! You both picked ${playerSelection.toLowerCase()}`)
    }

    console.log(`You: ${playerScore} Computer: ${computerScore}`)
  }
}

game()