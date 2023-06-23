const resetBtn = document.querySelector('#resetbutton');
//refresh page for new game
resetBtn.addEventListener('click',() => {location.reload()});

let startContainer = document.getElementById('startcontainer');
let btn = document.querySelector("#startbutton");

btn.addEventListener('click',() =>{
    startContainer.style.opacity = 0;
    startContainer.style.transform = 'scale(0)';
    startContainer.style.display = 'none';
});

// Global variables
// Initialise player score to zero
let playerScore = 0;
// Initialise computer score to zero
let computerScore = 0;
// Initialise games played to zero
let gamesPlayed = 0;

document.addEventListener("click", gameSelectionListener);
//See if the click was on a game selection button
function gameSelectionListener(event){
  let element = event.target;
    console.log(event.target);
    let rock = "rock";
    let paper = "paper";
    let scissors = "scissor";

    if (element.classList.contains("gameselection") && element.id === ("playerrock")) {
      playRound(rock);
      console.log("submitted rock");
    } else if (element.classList.contains("selection") && element.id === ("rockimg")) {
        playRound(rock);
        console.log("submitted rock")
    } else if (element.classList.contains("gameselection") && element.id === ("playerpaper")) {
      playRound(paper);
      console.log("submitted paper");
    } else if (element.classList.contains("selection") && element.id === ("paperimg")) {
        playRound(paper);
        console.log("submitted paper")
    } else if(element.classList.contains("gameselection") && element.id === ("playerscissor")) {
      playRound(scissors);
      console.log("submitted scissor");
    } else if (element.classList.contains("selection") && element.id === ("scissorimg")) {
        playRound(scissors);
        console.log("submitted scissor")
    }
  
}

function computerMove(){
  let move = Math.floor(Math.random()*3)+1;
  let fmove;
    if(move === 1){
      fmove = 'rock';
    } else if(move === 2){
      fmove = 'paper'
    } else {
      fmove = 'scissor';
    }
  return fmove;
}

function playerMove(){
  const rock = document.querySelector('#playerrock');
  const paper = document.querySelector('#playerpaper');
  const scissor = document.querySelector('#playerscissor');

}

function playRound(playerSelection){
  console.log(playerSelection);
    //set variable for computermove
  const computerSelection = computerMove();
   // Set variable for the computer's rock div
  const computerRockSelected = document.querySelector("#computerrock");
   // Set variable for the computer's paper div
  const computerPaperSelected = document.querySelector("#computerpaper");
   // Set variable for the computer's scissors div
  const computerScissorsSelected = document.querySelector("#computerscissor");
  // Set variable for the player's rock div
  const rockSelected = document.querySelector("#playerrock");
  // Set variable for the player's paper div
  const paperSelected = document.querySelector("#playerpaper");
  // Set variable for the player's scissors div
  const scissorsSelected = document.querySelector("#playerscissor");

  if(computerSelection == 'rock'){
    computerRockSelected.style.backgroundColor = "Cyan";
  }else if(computerSelection == 'paper'){
    computerPaperSelected.style.backgroundColor = "Cyan";
  }else if(computerSelection == 'scissor'){
    computerScissorsSelected.style.backgroundColor = "Cyan";
  }

  //convert player selection into string
  const playerSelectionString = String(playerSelection);
  //convert to lowercase
  const playerSelectionLowerCase = playerSelectionString.toLowerCase();
  
  if(playerSelectionLowerCase == 'rock'){
    rockSelected.style.backgroundColor = "magenta";
    if(computerSelection == 'rock'){
      console.log('DRAW!!');
      return "draw";
    }else if(computerSelection == 'paper'){
      console.log("You lose - Paper Beats Rock");
      computerScore++;
      const currentComputerScore = document.querySelector('#computerScore').innerHTML = `Score: ${computerScore}`;
      game(playerScore, computerScore);
      return "lose";
    }else if(computerSelection == 'scissor'){
      console.log("You Win - Rock Beats Scissors")
      playerScore++;
      const currentPlayerScore = document.querySelector('#playerScore').innerHTML = `Score: ${playerScore}`;
      game(playerScore, computerScore);
      return "Win"
    }
  }else if(playerSelectionLowerCase == 'paper'){
    paperSelected.style.backgroundColor = 'magenta';
    if(computerSelection == 'paper'){
      console.log('DRAW!!');
      return "draw";
    }else if(computerSelection == 'scissor'){
      console.log("You lose - Scissor Beats Paper");
      computerScore++;
      const currentComputerScore = document.querySelector('#computerScore').innerHTML = `Score: ${computerScore}`;
      game(playerScore, computerScore);
      return "lose";
    }else if(computerSelection == 'rock'){
      console.log("You Win - Paper Beats Rock")
      playerScore++;
      const currentPlayerScore = document.querySelector('#playerScore').innerHTML = `Score: ${playerScore}`;
      game(playerScore, computerScore);
      return "Win"
    }
  }else if(playerSelectionLowerCase == 'scissor'){
    scissorsSelected.style.backgroundColor = 'magenta';
    if(computerSelection == 'scissor'){
      console.log('DRAW!!');
      return "draw";
    }else if(computerSelection == 'rock'){
      console.log("You lose - Rock Beats Scissor");
      computerScore++;
      const currentComputerScore = document.querySelector('#computerScore').innerHTML = `Score: ${computerScore}`;
      game(playerScore, computerScore);
      return "lose";
    }else if(computerSelection == 'paper'){
      console.log("You Win - Scissor Beats Paper")
      playerScore++;
      const currentPlayerScore = document.querySelector('#playerScore').innerHTML = `Score: ${playerScore}`;
      game(playerScore, computerScore);
      return "Win"
    }
  }
  else {
        console.log("Invalid entry, please try again.");
        game(playerScore, computerScore);
        return null;
    }
}

function game(playerScore, computerScore){
  const gameUpdates = document.querySelector('#gameupdates');
  if (playerScore == 5 || computerScore == 5) {
    if (playerScore > computerScore) {
        let text = document.createTextNode(`YOU WIN ${playerScore}:${computerScore}!`);
        gameUpdates.appendChild(text);
    }
    } else if (computerScore > playerScore) {
      let text = document.createTextNode(`COMPUTER WINS ${computerScore}:${playerScore}!`);
      gameUpdates.appendChild(text);
    }
}