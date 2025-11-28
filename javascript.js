function getComputerChoice(){

    switch (Math.floor(Math.random() * 3)){
        case 0: return 'rock';
        case 1: return 'paper';
        case 2: return 'scissors';
    }
}

function getHumanChoice(){
    return prompt('Please select and option between: rock/paper/scissors');
}
     
function playGame(){

function playRound(userChoice, computerChoice){

    if (userChoice === computerChoice){
        print(`Thats a Draw: ${userChoice} can't do anything agains't ${computerChoice}`);
    } else if ((userChoice === 'rock' && computerChoice === 'scissors') || (userChoice === 'paper' && computerChoice === 'rock') || (userChoice === 'scissors' && computerChoice === 'paper')){
            humanScore++;
            print(`You Win! ${userChoice} beats ${computerChoice}.`);
        }else {
            computerScore++;
            print(`You lose! ${computerChoice} beats ${userChoice}.`);
         } 
}

    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++){
        playRound(getHumanChoice().toLowerCase(),getComputerChoice())
    }

    if(humanScore > computerScore){
        print('Congrats!! You Win!!')
    }else print('DAMN! You Lose!');

}

playGame();






function print(message){
    console.log(message);
}