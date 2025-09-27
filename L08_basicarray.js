function setup(){
    createCanvas(600,400);
    background(220);
}
let x = 0;
let y = 200;
function draw(){    
    square(x,y,50);
    x+=5;
    if (x - ballSize/2 <= 0 || ballX + ballSize/2 >= width) {
        fill(random(255),random(255),random(255));
        ballSpeedX *= -1;
    }
}
