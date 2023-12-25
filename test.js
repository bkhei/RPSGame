/* How do we problem solve this?
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
4) Now we're gonna do the above again, but we need to play again in a Bo5.
    When player wins, increment x by 1, and then run playRound again.
    When computer wins, increment y by 1, and then run playRound again.
    If x == 3, then player wins.
    If y == 3, then computer wins.
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
        x++;
    }
    else if(playerChoice == "PAPER" && computerSelection == "Rock"){
        x++;
    }
    else if(playerChoice == "SCISSORS" && computerSelection == "Paper"){
        x++;
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
        y++;
    }
    else if(playerChoice == "PAPER"  && computerSelection == "Scissors"){
        y++;
    }
    else if(playerChoice == "SCISSORS" && computerSelection == "Rock"){
        y++;
    }
    return 
}
const playerSelection = "rock"
const computerSelection = getComputerChoice();

let x, y = 0;


function game(playRound, play){
    while(x < 3 && y < 3){
        const result = playRound(playerSelection, get)
    }
}

game(playRound(playerSelection, computerSelection));
// console.log(playRound(playerSelection, computerSelection));

