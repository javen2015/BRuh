function setup() {
    createCanvas(1000, 1000);
    background(220);
    // noLoop(); // Stops continuous drawing
  }

let shapeColor = random(0,256);
function draw(){
    ellipse(500,500,80,80)
    fill(shapeColor);
}

function mousePressed(){
    shapeColor=random(0,256)
}

function mouseReleased(){
    shapeColor =random(0,256)
}