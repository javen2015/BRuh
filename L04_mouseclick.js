function setup() {
    createCanvas(1000, 1000);
    background(220);
    // noLoop(); // Stops continuous drawing
  }

let shapeColor ='blue';
let triangleValue = 
function draw(){
    triangleValue()
    fill(shapeColor);
}

function mousePressed(){
    shapeColor= color(random(255),random(255),random(255))
}

function mouseReleased(){
    shapeColor =color(random(255),random(255),random(255))
}