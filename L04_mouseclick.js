function setup() {
    createCanvas(1000, 1000);
    background(220);
    // noLoop(); // Stops continuous drawing
  }

let shapeColor = 'blue';
function draw(){
    circle(500,500,100)
    fill(shapeColor);
}

function mousePressed(){
    shapeColor = 'red';
}

function mouseReleased(){
    shapeColor = 'blue';
}