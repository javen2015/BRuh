function setup() {
    createCanvas(1000, 500);
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
    circle(600,mouseY,size)
    size += 0.3;
}
