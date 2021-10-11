const playerSelection = prompt("Choose rock, paper, or scissors!");
const computerSelection = computerPlay();
let computer = 0;
let player = 0;

function computerPlay() {
    let selection = ["rock", "paper", "scissors"],
    selectionUse = selection[Math.floor(Math.random() * selection.length)];
    alert(selectionUse);
    return(selectionUse);
    
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock" && computerSelection === "rock") {
        console.log("It's a tie!");
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computer++;
        console.log("Computer wins!"); 
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        player++;
        console.log("Player wins!");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        player++;
        console.log("Player wins!");
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        console.log("It's a tie!");
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computer++;
        console.log("Computer wins!");
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computer++;
        console.log("Computer wins!");
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        player++;
        console.log("Player wins!");
    } else if(playerSelection === "scissors" && computerSelection === "scissors") {
        console.log("It's a tie!");
    }
    let score = [playerSelection, computerSelection]
    return score;
};
console.log(playRound(playerSelection, computerSelection));


function game (){
    for (let i = 1; i <= 5; i++) {
        const playerSelection = prompt("Choose rock, paper, or scissors!");
        playRound(playerSelection, computerSelection)
        }   if (player > computer){
            console.log('You won!');
        }   else {
            console.log('You lose!')
        }
    
};

alert(game());
    if( prompt("Do you want to play again, yes or no") == "yes") {
    alert(playRound(playerSelection, computerSelection));
};