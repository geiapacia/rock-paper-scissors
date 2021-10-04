const playerSelection = prompt("Choose rock, paper, or scissors!");
const computerSelection = computerPlay();

function computerPlay() {
    let selection = ["rock", "paper", "scissors"],
    selectionUse = selection[Math.floor(Math.random() * selection.length)];
    return(selectionUse);
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === "rock" && computerSelection === "rock") {
        return "It's a draw! Play again!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats rock!"; 
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats scissors!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats rock!";
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        return "It's a draw! Play again!";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors beats paper!";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats scissors!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beats paper!";
    } else if(playerSelection === "scissors" && computerSelection === "scissors") {
        return "It's a draw! Play again!";
    }
};
console.log(playRound(playerSelection, computerSelection));





