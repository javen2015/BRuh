let x =200;
let y = 200;
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
            colour+=1
            fill(50);
        }else{
            colour+=1
            fill(200);
        }
    }
    x = constrain(x,50,width-50)
    y = constrain(y,50,height-50)
    square(x, y, 50);
}