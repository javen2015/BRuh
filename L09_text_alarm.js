function setup(){
    createCanvas(600,400);
    textAlign(CENTER, CENTER);
}

// function draw(){
//     background(220);
//     h = nf(hour(),2);
//     m = nf(minute(),2);
//     s= nf(second(),2);
//     textSize(100);
//     text(h+ ':' + m+ ':' + s,width/2,height/2);
// }

function draw(){
    background(220);
    textSize(100);
    text(timer,width/2,height/2);
}
function mousePressed(){
    timer = 5;
    setInterval(timeIt,1000);
}