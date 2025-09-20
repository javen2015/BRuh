let x =200;
let y = 200;
let colour = 1;
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
    x = constrain(x,0,width);
    y = constrain(y,0,height);
    circle(x, y,50);
}