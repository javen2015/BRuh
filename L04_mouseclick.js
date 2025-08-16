function setup() {
    createCanvas(1000, 1000);
    background(220);
    // noLoop(); // Stops continuous drawing
  }

let shapeColor ='blue';
let x1 = random(1000);
let x2 = random(1000);
let x3 = random(1000);
let width = random(1000);
let height = random(1000);
function draw(){
    triangle(x1,x2,x3,width,height)
    fill(shapeColor);
}

function mousePressed(){
    shapeColor= color(random(255),random(255),random(255))
}

function mouseReleased(){
    shapeColor =color(random(255),random(255),random(255))
}