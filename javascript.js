function getComputerChoice(){

    //random number between 0-2
    switch (Math.floor(Math.random() * 3)){
        case 0: return 'rock';
        case 1: return 'paper';
        case 2: return 'scissors';
    }
}


print(getComputerChoice());



function print(message){
    console.log(message);
}