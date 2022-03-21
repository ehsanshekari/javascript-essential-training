/*
1. draw simple shapes: ball, paddle, lives, score <-------
2. draw bricks
3. move the paddle
4. move the ball   
5. collision Detection
*/

var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');

var color = "#0095DD";
var score = 0;

var ball = {
  x: canvas.width / 2,
  y: canvas.height - 30,
  radius: 10
}

var paddle = {
  height: 10,
  width: 75,
  x: (canvas.width - 75) / 2,
  y: canvas.height - 10
}

var lives = {
  n: 3,
  x: canvas.width - 65,
  y: 20
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.closePath();
}

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddle.x, paddle.y, paddle.width, paddle.height);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.closePath();
}


function drawLives() {
  ctx.font = '16px Arial';
  ctx.fillStyle = color;
  ctx.fillText('Lives: ' + lives.n, lives.x, lives.y);
}

function drawScore() {
  ctx.font = '16px Arial';
  ctx.fillStyle = color;
  ctx.fillText('Score: ' + score, 8, 20);
}


function draw() {
  drawBall();
  drawPaddle();
  drawLives();
  drawScore();
}


draw();