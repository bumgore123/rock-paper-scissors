

let user_point = 0;
let computer_point = 0;


const result = document.getElementById("result");
const robot = document.getElementById("robot");
const up = document.getElementById("up");
const cp = document.getElementById("cp");

const ROCK_PNG = "./images/rock.png";
const PAPER_PNG = "./images/paper.png";
const SCISSORS_PNG = "./images/scissors.png";

function playGame(유저카드) {

    const choices = ["scissors", "rock", "paper"];
    const 컴퓨터카드 = choices[Math.floor(Math.random() * 3)];

    if (컴퓨터카드 === "rock") {
        robot.src = ROCK_PNG;
    } else if (컴퓨터카드 === "paper") {
        robot.src = PAPER_PNG;
    } else {
        robot.src = SCISSORS_PNG;
    }

    if (유저카드 === 컴퓨터카드) {
        result.innerText = "It's a draw";
    } else if (
        (유저카드 === "scissors" && 컴퓨터카드 === "paper") ||
        (유저카드 === "paper" && 컴퓨터카드 === "rock") ||
        (유저카드 === "rock" && 컴퓨터카드 === "scissors")
    ) {
        result.innerText = "User wins!";
        user_point = user_point + 1
        up.innerText = user_point;
    } else {
        computer_point = computer_point + 1
        result.innerText = "Computer wins!";
        cp.innerText = computer_point;
    }
}

function resetGame() {
    user_point = 0;
    computer_point = 0;
    up.innerText = "0";
    cp.innerText = "0";
}