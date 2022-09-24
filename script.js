function getComputerChoice (){
    let choice
        ,random = Math.floor(Math.random() * 3) + 1;

    if (random == 1){
        choice = 'rock';
    }else if (random == 2){
        choice = 'paper';
    }
    else if (random == 3){
        choice ='scissor';
    }else{
        console.log('computer did not pick');
    }
    return choice;
}

function playRound(player,computer){
    player = player.toLowerCase();
    if(player=='rock'&&computer =='paper'){
        return 'You Lose! Paper beats Rock';
    }else if(player=='rock'&&computer=='scissor'){
        return 'You Win! Rock beats Scissor';
    }else if(player =='paper'&& computer =='rock'){
        return 'You Win! Paper beats Rock';
    }else if(player =='paper'&& computer=='scissor'){
        return 'You Lose! Scissor beats Paper';
    }else if (player =='scissor'&& computer=='rock'){
        return 'You Lose! Rock beats Scissor';
    }else if(player == 'scissor'&& computer=='paper'){
        return 'You Win! Scissor beats Paper';
    }else{
        return 'its a tie'
    }

}
//TESTING GAME FUNCTIONALITY
// let computerSelection = getComputerChoice();
// console.log(computerSelection);
// console.log(playRound('rOCk', computerSelection));

function game(){
    let computerPts=0,playerPts=0,tie=0;

    for (let i = 0; i < 5; i++){
        
        let computerSelection = getComputerChoice(),
            playerSelection = prompt();
        
        let result = playRound(playerSelection,computerSelection);

        //points counter console.log of message per round
        if(result.includes('Win')){
            console.log('You chose '+playerSelection +' and Computer chose '+ computerSelection);
            console.log(result);
            playerPts++;
            console.log('Computer: ' + computerPts + ' Player: '+ playerPts + ' Tie: ' +tie);
        }else if(result.includes('Lose')){
            console.log('You chose '+playerSelection +' and Computer chose '+ computerSelection);
            console.log(result);
            computerPts++;
            console.log('Computer: ' + computerPts + ' Player: '+ playerPts + ' Tie: ' +tie);
        }else{
            console.log(result);
            console.log('You chose '+playerSelection +' and Computer chose '+ computerSelection);
            tie++;
            console.log('Computer: ' + computerPts + ' Player: '+ playerPts + ' Tie: ' +tie);
        }
    }
    //total points
    console.log('FINAL SCORE');
    console.log('Computer: ' + computerPts + ' Player: '+ playerPts + ' Tie: ' +tie);
    //game ended message
    if(computerPts>playerPts){
        console.log('Better Luck Next Time');
    }else if (computerPts<playerPts){
        console.log('Congratulations! You Won against the computer');
    }else{
        console.log('The Game is a Tie!');
    }
}

game();


