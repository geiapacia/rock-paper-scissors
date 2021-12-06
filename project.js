const playerSelection = prompt("Choose rock, paper, or scissors!");
const computerSelection = computerPlay();
let computer = 0;
let player = 0;
let winner='';

function computerPlay() {
    let selection = ["rock", "paper", "scissors"],
    selectionUse = selection[Math.floor(Math.random() * selection.length)];
    alert(selectionUse);
    return(selectionUse);
    
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock" && computerSelection === "rock") {
        roundWinner.innerHTML ="It's a tie!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log(computer++, "Computer wins!"); 
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        player++;
        roundWinner.innerHTML ="Player wins!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        player++;
        roundWinner.innerHTML ="Player wins!";
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        roundWinner.innerHTML="It's a tie!";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        
        computer++; 
        roundWinner.innerHTML="Computer wins!";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        
        computer++; 
        roundWinner.innerHTML="Computer wins!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        
        player++;
        roundWinner.innerHTML="Player wins!";
    } else if(playerSelection === "scissors" && computerSelection === "scissors") {
        roundWinner.innerHTML("It's a tie!");
    }
};
console.log(playRound(playerSelection, computerSelection));


/*function game (){
    for (let i = 1; i <= 5; i++) {
        const playerSelection = prompt("Choose rock, paper, or scissors!");
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection)
        }   if (player > computer){
            console.log('You won!');
        }   else {
            console.log('You lose!')
        }
    
};

game();
    while( prompt("Do you want to play again, yes or no") == "yes") {
    alert(game());
};
*/

function isGameOver() {
    return player === 5 || computer === 5
}


//UI

const roundWinner = document.getElementById('#roundWinner');
const btnRock = document.getElementById('#btnRock');
const btnPaper = document.getElementById('#btnPaper');
const btnScissors = document.getElementById('#btnScissors');
const player = document.getElementById('#player');
const computer = document.getElementById('#computer');

btnRock.addEventListener('click', () => handleClick('rock'));
btnPaper.addEventListener('click', () => handleClick('paper'));
btnScissors.addEventListener('click', () => handleClick('scissors'))