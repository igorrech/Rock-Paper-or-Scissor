



function computerPlay() {
    let computerR = Math.floor(Math.random() * 3)
    if ( computerR == 0) {
        return "paper";
    }
    else if ( computerR == 1 ) {
        return "rock";
    }
    else {
        return "scissor";
    }
}


// console.log(computer);



// console.log(playerPlay);

let playerPlay = 0;

let placarPlayer = 0;
let placarComputer = 0;

function playRound (playerPlay, computer) {

    if (playerPlay == "paper" && computer == "paper") {
        return "A tie";
    }
        else if ( playerPlay == "paper" && computer == "rock") {
            placarPlayer = ++placarPlayer;
            return "You Win!";
            
        }
            else if (playerPlay == "paper" && computer == "scissor") {
                placarComputer = ++placarComputer;
                return "You Loss!";
            }
            else if ( playerPlay == "rock" && computer == "rock") {
                return "A tie!";
            }
                else if (playerPlay == "rock" && computer == "scissor") {
                    placarPlayer = ++placarPlayer;
                    return "You Win!";
                }
                else if ( playerPlay == "rock" && computer == "paper") {
                    placarComputer = ++placarComputer;
                    return "You Loss!";
                }
                    else if (playerPlay == "scissor" && computer == "scissor") {
                        return "A tie!"; 
                    }
                    else if ( playerPlay == "scissor" && computer == "rock") {
                        placarComputer = ++placarComputer;
                        return "You Loss!"
                    }
                        else if (playerPlay == "scissor" && computer == "paper") {
                            placarPlayer = ++placarPlayer;
                            return "You Win!";
                        }
        }       





    for (let i = 0; i < 5; i++) {
        playerPlay = prompt("Paper, Rock or Scissor?").toLowerCase();
    console.log(playRound(playerPlay, computerPlay()));
     }


console.log("Player ", placarPlayer);
console.log("Computer ", placarComputer);