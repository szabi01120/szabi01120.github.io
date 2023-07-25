let win = 0;
let lose = 0;
let draw = 0;

let playerChoice = "";

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");

let playerScore = document.getElementById("playerScore");
let computerScore = document.getElementById("compScore");
let drawScore = document.getElementById("drawScore");
let resetButton = document.getElementById("reset");

playerScore.innerHTML = win;
computerScore.innerHTML = lose;
drawScore.innerHTML = draw;

let computerPlay = () => {
    let choice = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * choice.length);
    return choice[random];
}

let playerPlay = () => {
    rock.addEventListener("click", () => {
        playerChoice = "rock";
        winnerSelection();
    });
    paper.addEventListener("click", () => {
        playerChoice = "paper";
        winnerSelection();
    });
    scissors.addEventListener("click", () => {
        playerChoice = "scissors";
        winnerSelection();
    });
    resetButton.addEventListener("click", () => {
        win = 0;
        lose = 0;
        draw = 0;
        playerScore.innerHTML = win;
        computerScore.innerHTML = lose;
        drawScore.innerHTML = draw;
    });
}

let winnerSelection = () => {
    let computerChoice = computerPlay();
    if (playerChoice === "rock" && computerChoice === "scissors") {
        win++;
        playerScore.innerHTML = win;
        alert("NYERTÉL!");
    } else if (playerChoice === "rock" && computerChoice === "paper") {
        lose++;
        computerScore.innerHTML = lose;
        alert("VESZTETTÉL!");
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        win++;
        playerScore.innerHTML = win;
        alert("NYERTÉL!");
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        lose++;
        computerScore.innerHTML = lose;
        alert("VESZTETTÉL!");
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        win++;
        playerScore.innerHTML = win;
        alert("NYERTÉL!");
    }
    else if (playerChoice === "scissors" && computerChoice === "rock") {
        lose++;
        computerScore.innerHTML = lose;
        alert("VESZTETTÉL!");
    }
    else if (playerChoice === computerChoice) {
        draw++;
        drawScore.innerHTML = draw;
        alert("DÖNTETLEN!");
    }
    
}
playerPlay();