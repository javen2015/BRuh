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
    if(keyIsDown(SPACE)){
        if(colour%2==0){
            fill(50);
        }else{
            fill(200);
        }
    }
    x = constrain(x,50,width-50)
    y = constrain(y,50,height-50)
    circle(x, y, 50);
}