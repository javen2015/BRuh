let rectangleSize = 50;
function setup() {
    createCanvas(1000, 500);
    background(220);
  }


function draw(){
    rectangleSize(width/2 - rectangleSize/2 , height/2 - rectangleSize/2, rectangleSize, rectangleSize)
}

function keyPressed(){
    rectangleSize = 5
}

function keyReleased(){
}

