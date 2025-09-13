let x =0;
let y = 0;
let colour = 1;
function setup() {
    createCanvas(400, 400);
}
function draw(){
    background(220);
    if(keyIsDown(RIGHT_ARROW)){
        x+=speed
    }
    if(keyIsDown(LEFT_ARROW)){
        x-=speed
    }
    if(keyIsDown(UP_ARROW)){
        y-=speed
    }
    if(keyIsDown(DOWN_ARROW)){
        y+=speed
    }
    if(keyIsDown(SHIFT)){
        speed+=1
    }
    x = constrain(x,0,width)
    y = constrain(y,0,height)
    circle(x, y, 50);
}