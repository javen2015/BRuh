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
    circle(600,0,size)
    size += 0.3;
}
