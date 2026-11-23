
let ballX = 200;
let ballY = 200;

let ballSize = 40;

let speedX = 3;
let speedY = 2;

let paused = false;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(20, 25, 45);

    fill(0, 200, 255);
    noStroke();
    circle(ballX, ballY, ballSize);

    if (!paused) {
        ballX += speedX;
        ballY += speedY;
    }

    if (ballX > width - ballSize / 2 || ballX < ballSize / 2) {
        speedX *= -1;
    }

    if (ballY > height - ballSize / 2 || ballY < ballSize / 2) {
        speedY *= -1;
    }

    fill(255);
    textSize(16);
    text("SPACE = Pause / Resume", 20, 30);
    text("UP = Faster | DOWN = Slower", 20, 55);
}

function keyPressed() {
    if (key === ' ') {
        paused = !paused;
    }

    if (keyCode === UP_ARROW) {
        speedX *= 1.2;
        speedY *= 1.2;
    }

    if (keyCode === DOWN_ARROW) {
        speedX *= 0.8;
        speedY *= 0.8;
    }
}