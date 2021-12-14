
function computerPlay() {
    let computer = Math.floor(Math.random()* 3)
    if (computer == 0) {
        return "paper"
    }
    else if (computer == 1) {
        return "rock"
    }
    else {
        return "scissor"
    }
}

function playround(playerSelection, computerSelection) {
            playerSelection = playerSelection.toLowerCase();
            computerSelection = computerSelection.toLowerCase();
            
            if ( playerSelection == "rock" && computerSelection == "paper") {
                return "You lose! Paper beats Rock"
            }

            else if ( playerSelection == "rock" && computerSelection == "rock") {
                return "A tie";
            }

            else if ( playerSelection == "rock" && computerSelection == "scissor") {
                return "You Win! Rock beats Scissor";
            }

            else if ( playerSelection == "paper" && computerSelection == "paper") {
                return "A tie";
            }

            else if ( playerSelection == "paper" && computerSelection == "rock") {
                return "You Win! Paper beats rock";
            }

            else if ( playerSelection == "paper" && computerSelection == "scissor") {
                return "You lose! scissor beats paper";
            }

            else if ( playerSelection == "scissor" && computerSelection == "paper") {
                return "You Win! Scissor beats paper";
            }

            else if ( playerSelection == "scissor" && computerSelection == "rock") {
                return "You lose! Rock beats scissor";
            }

            else if ( playerSelection == "scissor" && computerSelection == "scissor"){
                return "A tie";
            }

}



const player = prompt("Paper, Rock or Scissor ");
const computer = computerPlay();

console.log(playround(player, computer));



