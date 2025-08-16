function setup() {
    createCanvas(1000, 1000);
    background(220);
    // noLoop(); // Stops continuous drawing
  }

let shapeColor ='blue';
function draw(){
    ellipse(500,500,80,80)
    fill(shapeColor);
}

function mousePressed(){
    shapeColor= color(random(255),random(255),random(255))
}

function mouseReleased(){
    shapeColor =color(random(255),random(255),random(255))
}