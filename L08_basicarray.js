function setup(){
    createCanvas(600,400);
    background(220);
}
let x = 0;
let y = 200;
let direction = 5;
function draw(){    
    square(x,y,50);
    x+=direction;
    if (x - 50 <= 0) {
        fill(random(255),random(255),random(255));
        direction = 5
    }
}
