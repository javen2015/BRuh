function setup(){
    createCanvas(600,400);
    background(220);
}
let x = 0;
let y = 200;
function draw(){    
    square(x,y,50);
    x+=5;
    if (x - 50 <= 0 || x + 5 >= width) {
        fill(random(255),random(255),random(255));
        ball *= -1;
    }
}
