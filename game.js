/* How do we solve this?


1) We ask what the user's choice is.
    We'll do this in the playRound.
2) The computer will pick a random choice between rock, paper, or scissors
    To do this, we need to use a function to get the opponent's choice.
    Random number between 0 and 4, then assign to RPS respectively.
3) The game will end in two ways, with each branching into 3 different ways.
    Win:
        - Player chooses rock, and the opponent chooses scissors. // playerSelection = rock
        - Player chooses scissors, and the opponent chooses paper. // playerSelection = 
        - Player chooses paper, and the opponent chooses rock
    Lose:
        - Opponent chooses rock, and player chooses paper.
        - Opponent chooses scissors, and player chooses paper.
        - Opponent chooses paper, and player chooses rock.


*/

function getComputerChoice(){ // Step 2
    let select = Math.floor(Math.random() * 3) + 1;
    let computerSelects;
    if(select == 1){
        computerSelects = "Rock"
    } else if (select == 2){
        computerSelects = "Paper"
    } else{
        computerSelects = "Scissors"
    }
    return computerSelects;
}


function playRound(playerSelection, computerSelection){
    let playerChoice = playerSelection.toUpperCase();
// Player Victory
    if(playerChoice == "ROCK" && computerSelection == "Scissors"){
        console.log("You win! Rock beats paper.");
    }
    else if(playerChoice == "PAPER" && computerSelection == "Rock"){
        console.log("You win! Paper beats rock.");
    }
    else if(playerChoice == "SCISSORS" && computerSelection == "Paper"){
        console.log("You win! Scissors beats paper.");
    }
// Draw
    else if(playerChoice == "ROCK" && computerSelection == "Rock"){
        console.log("Draw!");
    }
    else if(playerChoice == "PAPER" && computerSelection == "Paper"){
        console.log("Draw!");
    }
    else if(playerChoice == "SCISSORS" && computerSelection == "Scissors"){
        console.log("Draw!");
    }
// Computer Victory
    else if(playerChoice == "ROCK" && computerSelection == "Paper"){
        console.log("Computer wins! Rock loses to paper.");
    }
    else if(playerChoice == "PAPER"  && computerSelection == "Scissors"){
        console.log("Computer wins! Paper loses to scissors.");
    }
    else if(playerChoice == "SCISSORS" && computerSelection == "Rock"){
        console.log("Computer wins! Scissors loses to rock.");
    }
    return 
}

/* const playerSelection = "rock" */


// Define elements by ID
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

// Functionality for each button selected
rockButton.addEventListener('click', () => playRound('ROCK', getComputerChoice()));
paperButton.addEventListener('click', () => playRound('PAPER', getComputerChoice()));
scissorsButton.addEventListener('click', () => playRound('SCISSORS', getComputerChoice()));


const computerSelection = getComputerChoice();

playRound(playerSelection, computerSelection);
// console.log(playRound(playerSelection, computerSelection));

