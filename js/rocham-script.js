const score = {
    wins: 0,
    loses: 0,
    ties: 0            
};

function playGame(playerMove){
    const computerMove = pickComputerMove();
    let result = '';
    if(playerMove === 'Rock'){
        if(computerMove === 'Rock'){
            result = 'Tie';                    
        } else if(computerMove === 'Paper'){
            result = 'Lose';
        } else if(computerMove === 'Scissors'){
            result = 'Win';
        }
    } else if(playerMove == 'Paper'){
        if(computerMove === 'Rock'){
            result = 'Win';
        } else if(computerMove === 'Paper'){
            result = 'Tie';
        } else if(computerMove === 'Scissors'){
            result = 'Lose';
        }
    } else if(playerMove === 'Scissors'){
        if(computerMove === 'Rock'){
            result = 'Lose';
        } else if(computerMove === 'Paper'){
            result = 'Win';
        } else if(computerMove === 'Scissors'){
            result = 'Tie';
        }
    }
   
    if(result === 'Win'){                
        score.wins = score.wins + 1;
    } else if(result === 'Lose'){                
        score.loses = score.loses + 1;
    } else if(result === 'Tie'){                
        score.ties = score.ties + 1;                
    }
    document.getElementById('score').innerHTML = ('Wins: ' + score.wins + ' Loses: '+ score.loses + ' Ties: ' + score.ties);
    
}


function pickComputerMove(){
    let randomNumber = Math.random(0,1);
    let compPick = '';
    if(randomNumber <= 1/3){
        compPick = 'Rock';            
    } else if(randomNumber <= 2/3){            
        compPick = 'Paper';
    } else if(randomNumber <= 1){            
        compPick = 'Scissors';
    }
    return compPick;
}