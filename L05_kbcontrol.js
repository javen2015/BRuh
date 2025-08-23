function setup() {
    createCanvas(400, 600);
    background(220);
    noStroke(); // no outline
  }

let size = 5;
function draw(){

}

function mousePressed(){

    shapeColor = color(random(255), random(255),random(255))
    size = 5;

}

function mouseDragged(){
    fill(shapeColor);
    circle(mouseX,mouseY,size)
    size += 0.3;
}
// a = 400,0
//c = 400,600
//b = 0,600
//w = 400,h = 600
//___________
//|          |
//|          |
//|
//|