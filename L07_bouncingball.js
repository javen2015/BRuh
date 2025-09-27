let ballX = 200;
let ballY = 300;
let ballSize = 30;
let ballSpeedX = 2;
let ballSpeedY = 2;
function setup() {
    createCanvas(600, 400);
    background(220);
}

function draw(){
    // background(220);
    // if(keyIsDown(RIGHT_ARROW)){
    //     ballX+=ballSpeedX;
    // }
    // if(keyIsDown(LEFT_ARROW)){
    //     ballX-=ballSpeedX;
    // }
    // x = constrain(ballX,0,width);
    // y = constrain(ballY,0,height);
    
    ballX += ballSpeedX;
    ballY += ballSpeedY;
    if (ballX - ballSize/2 <= 0 || ballX + ballSize/2 >= width) {
        fill(random(255),random(255),random(255));
        ballSpeedX *= -1;
    }
    if(ballY - ballSize/2 <= 0 || ballY + ballSize/2 >= height){
        fill(random(255),random(255),random(255));
        ballSpeedY *= -1;
    }
    noStroke();
    circle(ballX, ballY,ballSize);
}
function keyPressed(){
    if(keyCode === UP_ARROW){
        balllSpeedX*=1.2
        ballSpeedY*=1.2
    }
    if(keyCode === DOWN_ARROW){
        ballSpeedX*=0.8
        ballSpeedY*=0.8
    }
}
