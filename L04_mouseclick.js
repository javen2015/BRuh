function setup() {
    createCanvas(1000, 1000);
    background(220);
    // noLoop(); // Stops continuous drawing
  }

let shapeColor ='blue';
let x1 = 500;
let y1 = 200;
let x2 = 300;
let y2 = 500;
let x3 = 200;
let y3 = 300;
let height = 500;
function draw(){
    if (mouseIsPressed){
        triangle(x1,y1,x2,width,height);
        fill(shapeColor);
    }
}

function mousePressed(){
    shapeColor= color(random(255),random(255),random(255))
    let x1 = random(width);
    let y1 = random(height);
    let x2 = random(width);
    let y2 = random(width);
    let x3 = random(height);
    let y3 = random(width);
}

function mouseReleased(){
    shapeColor =color(random(255),random(255),random(255))
    let x1 = random(width);
    let y1 = random(height);
    let x2 = random(width);
    let y2 = random(width);
    let x3 = random(height);
    let y3 = random(width);
}