let userScore = 0;
let computerScore = 0;
const userScore_div = document.getElementById("userscore");
const computerScore_div = document.getElementById("computerscore");
const scoreBoard_div = document.querySelector(".scoreboard");
const response_div = document.querySelector(".response")
const rock_div = document.getElementById("rock")
const paper_div = document.getElementById("paper")
const scissors_div = document.getElementById("scissors")

function getComputerChoice() {
const choices = ['rock', 'paper', 'scissors']
const randomNumber = (Math.floor (Math.random() * 3))
return choices[randomNumber];
}

function win() {
    userScore++;
    userScore_div.innerHTML = userScore
    response_div.innerHTML = "You Win!"
}

function lose() {
    computerScore++;
    computerScore_div.innerHTML = computerScore
    response_div.innerHTML = "You Lose!"
}

function draw() {
    console.log("draw")
    response_div.innerHTML = "Its A Draw!"
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
   switch (userChoice + computerChoice) {
       case"rockscissors":
       case "paperrock":
        case "scissorspaper":
            win();
        break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
        lose();
    break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
        draw();
    break;
   }
}




function main() {
    rock_div.addEventListener("click", function() {
        game("rock");
    })

    paper_div.addEventListener("click", function() {
        game("paper")
        })

    scissors_div.addEventListener("click", function() {
        game("scissors")
        })
}

main();