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




function print(message){
    console.log(message);
}