function setup(){
    createCanvas(600,400);
}
let x = 0;
let y = 200;
let speedX = 1;
let direction = 5;
function draw(){    
    background(220);
    square(x,y,50);
    x+=direction;
    if (x - 50/2 <= 0) {
        fill(random(255),random(255),random(255));
        speedX *= -1;
    }
    if (x + 50/2 >= width){
        fill(random(255),random(255),random(255));
        direction = -5;
    }
}
