function getComputerChoice(){

    switch (Math.floor(Math.random() * 3)){
        case 0: return 'rock';
        case 1: return 'paper';
        case 2: return 'scissors';
    }
}

function getHumanChoice(){
    return prompt('Please select and option betwen: rock/paper/scissors');
}

let humanScore = 0;
let computerScore = 0;

function playRound(userChoice, computerChoice){

    if (userChoice === computerChoice){
        print(`Thats a Draw: ${userChoice} can't do anything agains't ${computerChoice}`);
    } else if ((userChoice === 'rock' && computerChoice === 'scissors') || (userChoice === 'paper' && computerChoice === 'rock') || (userChoice === 'scissors' && computerChoice === 'paper')){
            humanScore++;
            print(`You Win! ${userChoice} beats ${computerChoice}.`); return 0;
        }else {
            computerScore++;
            print(`You lose! ${computerChoice} beats ${userChoice}.`); return 0;
         } 
}

             


const humanSelection = getHumanChoice().toLowerCase();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);









function print(message){
    console.log(message);
}