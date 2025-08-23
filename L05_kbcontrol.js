function setup() {
    createCanvas(1000, 500);
    background(220);
    // noLoop(); // Stops continuous drawing
    noStroke()
  }


function mousePressed(){

    shapeColor = color(random(255), random(255),random(255))
    fill(shapeColor);

}

function mouseDragged(){


    fill(shapeColor);
    circle(mouseX,mouseY,50)
}