function setup() {
    createCanvas(1000, 500);
    background(220);
    noStroke(); // no outline
  }

let size = 5;
function draw(){

}

function keyPressed(){

    shapeColor = color(random(255), random(255),random(255))
    size = 5;

}

function keyReleased(){
    fill(shapeColor);
    circle(mouseX,mouseY,size)
    size += 0.3;
}

