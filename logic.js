const userScoreDisplay = document.getElementById('userscore');
const computerScoreDisplay = document.getElementById('computerscore');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
let userScore = 0;
let computerScore = 0;



function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let randomnumber = Math.floor(Math.random() * 3);
    return choices[randomnumber];
}



function userWins() {
    userScore++;
    document.getElementById('gameresult').innerHTML = 'You Win!';
    document.getElementById('userscore').innerHTML = userScore;
    gameover(userScore);
}

function userLoses() {
    computerScore++;
    document.getElementById('gameresult').innerHTML = 'You Lose!';
    document.getElementById('computerscore').innerHTML = computerScore;
    gameover(computerScore);
}

function draw() {
    document.getElementById('gameresult').innerHTML = "It's a draw!";
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case ('rockscissors'):
        case ('paperrock'):
        case ('scissorspaper'):
            userWins();
            break;
        case ('rockpaper'):
        case ('paperscissors'):
        case ('scissorsrock'):
            userLoses();
            break;
        case ('rockrock'):
        case ('paperpaper'):
        case ('scissorsscissors'):
            draw();
            break;
    }
}


const choiceRock = rock.addEventListener('click', function () {
    game('rock');
});

const choicePaper = paper.addEventListener('click', function () {
    game('paper');
});

const choiceScissors = scissors.addEventListener('click', function () {
    game('scissors');
});

function gameover(userScore, computerScore) {
    if (userScore === 5) {
        console.log('game over');
    } else if (computerScore === 5) {
        console.log('game over, you lose');
    } else {

    }
}

















