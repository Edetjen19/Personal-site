const gameContainer = document.getElementById("game-container");
const ball = document.getElementById("ball");
const obstacle = document.getElementById("obstacle");
const gameOver = document.getElementById("game-over");
const restartButton = document.getElementById("restart-button");

let ballLeft = 0;
let ballBottom = 0;
let obstacleLeft = gameContainer.offsetWidth - obstacle.offsetWidth;
let obstacleTop = 0;

const moveBall = () => {
ballLeft += 5;
ballBottom += 5;
ball.style.left = ballLeft + "px";
ball.style.bottom = ballBottom + "px";
};

const moveObstacle = () => {
obstacleLeft -= 5;
obstacle.style.left = obstacleLeft + "px";
};

const handleSpaceBar = event => {
if (event.keyCode === 32) {
ballBottom -= 50;
ball.style.bottom = ballBottom + "px";
}
};

const handleCollision = () => {
if (
ballLeft + ball.offsetWidth >= obstacleLeft &&
ballLeft <= obstacleLeft + obstacle.offsetWidth &&
ballBottom + ball.offsetHeight >= obstacleTop &&
ballBottom <= obstacleTop + obstacle.offsetHeight
) {
clearInterval(intervalId);
gameOver.style.display = "block";
}
};

const restart = () => {
gameOver.style.display = "none";
ballLeft = 0;
ballBottom = 0;
obstacleLeft = gameContainer.offsetWidth - obstacle.offsetWidth;
ball.style.left = ballLeft + "px";
ball.style.bottom = ballBottom + "px";
obstacle.style.left = obstacleLeft + "px";
intervalId = setInterval(() => {
moveBall();
moveObstacle();
handleCollision();
}, 100);
};

let intervalId = setInterval(() => {
moveBall();
moveObstacle();
handleCollision();
}, 100);

document.addEventListener("keydown", handleSpaceBar);
restartButton.addEventListener("click", restart);