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

//USER INTERFACE
const buttons = document.querySelectorAll('.btn');
let computerPts=0,playerPts=0,tie=0;

    for(let i =0; i<buttons.length;i++){
        
        //event listener
        buttons[i].addEventListener('click', () =>{
            let plyrCh = buttons[i].value;
            let cmpCh=getComputerChoice();
            
            //check if value matches image
            console.log(plyrCh);
            console.log(cmpCh);

            //display player choice
            if(plyrCh=='rock'){
                const playerImage =document.createElement('img');
                playerImage.src='rock.png';
                document.body.appendChild(playerImage);
            }else if(plyrCh=='paper'){
                const playerImage =document.createElement('img');
                playerImage.src='paper.png';
                document.body.appendChild(playerImage);
            }else{
                const playerImage =document.createElement('img');
                playerImage.src='scissors.png';
                document.body.appendChild(playerImage);
            }
            //display computer choice
            if(cmpCh=='rock'){
                const computerImage =document.createElement('img');
                computerImage.src='rock.png';
                document.body.appendChild(computerImage);
            }else if(cmpCh=='paper'){
                const computerImage =document.createElement('img');
                computerImage.src='paper.png';
                document.body.appendChild(computerImage);
            }else{
                const computerImage =document.createElement('img');
                computerImage.src='scissors.png';
                document.body.appendChild(computerImage);
            }
            
            
            
            let result = playRound(plyrCh,cmpCh);
            
            if(result.includes('Win')){
                playerPts++;
                console.log('C: ' + computerPts + ' P: '+playerPts +' T: '+tie);
                updateScore('player');
                if(computerPts==5||playerPts==5){
                    endGame(computerPts,playerPts);
                }
            }else if(result.includes('Lose')){
                computerPts++;
                console.log('C: ' + computerPts + ' P: '+playerPts +' T: '+tie);
                updateScore('computer');
                if(computerPts==5||playerPts==5){
                    endGame(computerPts,playerPts);
                }
            }else{
                tie++;
                console.log('C: ' + computerPts + ' P: '+playerPts +' T: '+tie);
                updateScore('tie');
                if(computerPts==5||playerPts==5){
                    endGame(computerPts,playerPts);
                }
            }
            
            
            
        });//event listener
    }//for loop



function endGame(computerPts,playerPts){
    const gameResult = document.querySelector('#result');
    if(computerPts>playerPts){
        gameResult.textContent = 'Computer Wins! Better Luck Next Time';
    }else if (computerPts<playerPts){
        gameResult.textContent = 'Congratulations! You Won against the computer';
    }else{
        gameResult.textContent = 'The Game is a Tie!';
    }
}

function updateScore(whoWon){
    if(whoWon=='player'){
        const playerScoreDOM = document.querySelector('#playerScore');
        playerScoreDOM.textContent= 'You: ' + playerPts;
    }
    else if(whoWon=='computer'){
        const computerScoreDOM = document.querySelector('#computerScore');
        computerScoreDOM.textContent= 'Computer: ' + computerPts;
    }else{
        const tieScoreDOM = document.querySelector('#tieScore');
        tieScoreDOM.textContent= 'Tie: ' + tie;
    }
    
        
}



