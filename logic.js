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


function game(userChoice) {
    const computerChoice = getComputerChoice();
    if (userChoice == computerChoice) {
        console.log('It is a draw');
    } else if (userChoice == 'rock' && computerChoice == 'scissors') {
        console.log('I win!!')
    } else if (userChoice == 'scissors' && computerChoice == 'rock') {
        console.log('I lose!')
    }
}




const choiceRock = rock.addEventListener('click', function () {
    game('rock');
});

const choicePaper = paper.addEventListener('click', function () {
    console.log('You clicked paper');
});

const choiceScissors = scissors.addEventListener('click', function () {
    game('scissors');
});





function userWins() {
    userScore++;
    //change display
}

function userLoses() {
    computerScore++;
    //change display
}

function draw() {
    console.log('its a draw!')
}
















