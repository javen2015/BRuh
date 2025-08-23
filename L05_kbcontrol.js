function setup() {
    createCanvas(1000, 500);
    background(220);
    noStroke(); // no outline
  }
  
function draw(){

}

function mousePressed(){

    shapeColor = color(random(255), random(255),random(255))
    size = 5;

}

function mouseDragged(){


    fill(shapeColor);
    circle(mouseX,mouseY,50)
}