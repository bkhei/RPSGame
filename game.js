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
let playerScore = 0;
let computerScore = 0;

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
        playerScore++;
        if(playerScore == 5){
            return "Player wins!"
        }
        return "Rock beats paper."
    }
    else if(playerChoice == "PAPER" && computerSelection == "Rock"){
        playerScore++;
        if(playerScore == 5){
            return "Player wins!"
        }
        return "Paper beats rock."
    }
    else if(playerChoice == "SCISSORS" && computerSelection == "Paper"){
        playerScore++;
        if(playerScore == 5){
            return "Player wins!"
        }
        return "Scissors beats paper."
    }
// Draw
    else if(playerChoice == "ROCK" && computerSelection == "Rock"){
        return "Draw!"
    }
    else if(playerChoice == "PAPER" && computerSelection == "Paper"){
        return "Draw!"
    }
    else if(playerChoice == "SCISSORS" && computerSelection == "Scissors"){
        return "Draw!"
    }
// Computer Victory
    else if(playerChoice == "ROCK" && computerSelection == "Paper"){
        computerScore++;
        if(computerScore == 5){
            return "Computer wins!"
        }
        return "Rock loses to paper."
    }
    else if(playerChoice == "PAPER"  && computerSelection == "Scissors"){
        computerScore++;
        if(computerScore == 5){
            return "Computer wins!"
        }
        return "Paper loses to scissors."
    }
    else if(playerChoice == "SCISSORS" && computerSelection == "Rock"){
        computerScore++;
        if(computerScore == 5){
            return "Computer wins!"
        }
        return "Scissors loses to rock."
    }

}

/* const playerSelection = "rock" */


// Define elements by ID
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const playerScoreID = document.getElementById('playerScoreDiv');
const computerScoreID = document.getElementById('computerScoreDiv')

// Functionality for each button selected
rockButton.addEventListener('click', () => {
    const result = playRound('ROCK', getComputerChoice()); // Define result seperately 
    resultDiv.textContent = result;
    playerScoreID.textContent = `Player Score: ${playerScore}`;
    computerScoreID.textContent = `Computer Score: ${computerScore}`;
});

paperButton.addEventListener('click', () =>{
    const result = playRound('PAPER', getComputerChoice());
    resultDiv.textContent = result;
    playerScoreID.textContent = `Player Score: ${playerScore}`;
    computerScoreID.textContent = `Computer Score: ${computerScore}`;
});
scissorsButton.addEventListener('click', () =>{
    const result = playRound('SCISSORS', getComputerChoice());
    resultDiv.textContent = result;
    playerScoreID.textContent = `Player Score: ${playerScore}`;
    computerScoreID.textContent = `Computer Score: ${computerScore}`;
});




const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

