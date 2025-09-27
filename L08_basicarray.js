function setup(){
    createCanvas(600,400);
}
let x = 100;
let y = 200;
let speedX = 1;
let direction = 5;
function draw(){    
    background(220);
    x+=speedX;
    if (x - 50/2 <= 0 || x + 50/2 >= width) {
        fill(random(255),random(255),random(255));
        speedX *= -1;
    }
    rect(x,y,50,50);
}
