let ballX = 200;
let ballY = 200;
let ballSize = 30;
let ballSpeedX = 2;
let ballSpeedY = 2;
function setup() {
    createCanvas(400, 400);
}
function draw(){
    background(220);
    if(keyIsDown(RIGHT_ARROW)){
        x+=10;
    }
    if(keyIsDown(LEFT_ARROW)){
        x-=10;
    }
    if(keyIsDown(UP_ARROW)){
        y-=10;
    }
    if(keyIsDown(DOWN_ARROW)){
        y+=10;
    }
    x = constrain(ballX,0,width);
    y = constrain(ballY,0,height);
    circle(ballSpeedX, ballSpeedY,50);
}