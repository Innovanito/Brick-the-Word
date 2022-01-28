const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")


canvas.height = 500
canvas.width = 500

let speedX = 3
let speedY = -2

const ballRadius = 7

const paddleHeight = 10
const paddleWidth = 76
const paddleMargin = 15
  


let ball = {
  x: canvas.width / 2,
  y: canvas.height - 50,
  dx : speedX,
  dy: speedY,
  radius: ballRadius,
  draw: function() {
    ctx.beginPath() 
    ctx.fillStyle = '#373737'
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    ctx.closePath()
    ctx.fill()
  }
}

let paddle = {
  height: paddleHeight,
  width: paddleWidth,
  x: canvas.width / 2 - paddleWidth / 2,
  draw: function () {
    ctx.beginPath()
    ctx.rect(this.x, canvas.height - this.height- paddleMargin, this.width, this.height,)
    ctx.fillStyle = '#373737'
    ctx.closePath()
    ctx.fill()
  }
}

function play() {
  ctx.clearRect(0,0, canvas.width, canvas.height)
  ball.draw()
  paddle.draw()

  ball.x += ball.dx
  ball.y += ball.dy

  if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
    ball.dx *= -1
  } else if (ball.y - ball.radius < 0) {
    ball.dy *= -1
  } else if (ball.y + ball.radius +2 > canvas.height ) {
    ball.dx = 0
    ball.dy = 0
  }

  requestAnimationFrame(play)
}

play()
