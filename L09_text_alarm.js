function setup(){
    createCanvas(600,400);
    textAlign(CENTER, CENTER);
}

function draw(){
    background(220);
    hour = nf(hour(),2);
    minute = nf(minute(),2);
    second = nf(second(),2);
    textSize(100);
    text(hour + ':' + minute + ':' + second,width/2,height/2);
}