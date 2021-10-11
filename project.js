const playerSelection = prompt("Choose rock, paper, or scissors!");
const computerSelection = computerPlay();
let computer = 1;
let player = 1;
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
        console.log("It's a tie!");
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        
        console.log(computer++, "Computer wins!"); 
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        
        console.log(player++, "Player wins!");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        
        console.log(player++, "Player wins!");
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        console.log("It's a tie!");
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        
        console.log(computer++, "Computer wins!");
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        
        console.log(computer++, "Computer wins!");
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        
        console.log(player++, "Player wins!");
    } else if(playerSelection === "scissors" && computerSelection === "scissors") {
        console.log("It's a tie!");
    }
};
console.log(playRound(playerSelection, computerSelection));


function game (){
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