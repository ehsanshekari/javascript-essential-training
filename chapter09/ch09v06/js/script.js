/*
1. draw simple shapes: ball, paddle, lives, score 
2. draw bricks
3. move the paddle
4. move the ball
5. collision Detection     <------- 
*/

var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');

var color = "#0095DD";
var score = 0;
var isRightPressed = false;
var isLeftPressed = false;
var ball = {
  x: canvas.width / 2,
  y: canvas.height - 30,
  radius: 10,
  dx: 2,
  dy: -2
}
var paddle = {
  height: 10,
  width: 75,
  x: (canvas.width - 75) / 2,
  y: canvas.height - 10,
  dx: 7
}
var lives = {
  n: 3,
  x: canvas.width - 65,
  y: 20
}
var bricksInfo = {
  cols: 5,
  rows: 3,
  width: 75,
  height: 20,
  padding: 10,
  topOffset: 30,
  leftOffset: 30
}
var bricks = [];
for (var i = 0; i < bricksInfo.cols; i++) {
  bricks[i] = [];
  for (var j = 0; j < bricksInfo.rows; j++) {
    bricks[i][j] = { x: 0, y: 0, status: 1 }
  }
}

document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);
function keyDownHandler(e) {
  if (e.keyCode === 39) {
    isRightPressed = true;
  }
  else if (e.keyCode === 37) {
    isLeftPressed = true;
  }
}
function keyUpHandler(e) {
  if (e.keyCode === 39) {
    isRightPressed = false;
  }
  else if (e.keyCode === 37) {
    isLeftPressed = false;
  }
}

function movePaddle() {
  if (isRightPressed && paddle.x < canvas.width - paddle.width) {
    paddle.x += paddle.dx;
  }
  else if (isLeftPressed && paddle.x > 0) {
    paddle.x -= paddle.dx;
  }
}

function drawBricks() {
  for (var c = 0; c < bricksInfo.cols; c++) {
    for (var r = 0; r < bricksInfo.rows; r++) {
      if (bricks[c][r].status === 1) {
        var brickX = (c * (bricksInfo.width + bricksInfo.padding)) + bricksInfo.leftOffset;
        var brickY = (r * (bricksInfo.height + bricksInfo.padding)) + bricksInfo.topOffset;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, bricksInfo.width, bricksInfo.height);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.closePath();
      }
    }
  }

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

function moveBall() {
  if (ball.x + ball.dx > canvas.width - ball.radius || ball.x + ball.dx < ball.radius) {
    ball.dx = - ball.dx;
  }

  if (ball.y + ball.dy < ball.radius) {
    ball.dy = -ball.dy;
  }
  else if (ball.y + ball.dy > canvas.height - ball.radius) {
    if (ball.x > paddle.x && ball.x < paddle.x + paddle.width) {
      ball.dy = -ball.dy;
    }
    else {
      lives.n--;
      if (!lives.n) {
        alert('Game Over');
        document.location.reload();
      }
      else {
        ball.x = canvas.width / 2;
        ball.y = canvas.height - 30;
        ball.dx = 2;
        ball.dy = -2;
        paddle.x = (canvas.width - paddle.width) / 2;
      }
    }
  }

  ball.x += ball.dx;
  ball.y += ball.dy;
}

function collisionDetection() {
  for (var c = 0; c < bricksInfo.cols; c++) {
    for (var r = 0; r < bricksInfo.rows; r++) {
      var b = bricks[c][r];
      if (b.status === 1) {
        if (ball.x > b.x && ball.x < b.x + bricksInfo.width && ball.y > b.y && ball.y < b.y + bricksInfo.height) {
          b.status = 0;
          ball.dy = -ball.dy;
          score++;
          if (score === bricksInfo.cols * bricksInfo.rows) {
            alert('YOU WON!');
            document.location.reload();
          }
        }
      }
    }
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawPaddle();
  drawLives();
  drawScore();
  drawBricks();
  collisionDetection();
  moveBall();
  movePaddle();

  requestAnimationFrame(draw);
}

draw();