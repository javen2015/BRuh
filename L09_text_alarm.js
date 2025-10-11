function setup(){
    createCanvas(600,400);
    textAlign(CENTER, CENTER);
}

function draw(){
    background(220);
    hour = nf(hour(),2);
    console.log(hour);
}