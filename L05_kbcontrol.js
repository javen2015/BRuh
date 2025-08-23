function setup() {
    createCanvas(1000, 500);
    background(220);
    // noLoop(); // Stops continuous drawing
  }


function mousePressed(){

    shapeColor = color(random(255), random(255),random(255))
    fill(shapeColor);
    circle(mouseX,mouseY,20)
}

function mouseDragged(){


    fill(shapeColor);
    circle(mouseX,mouseY,20)
}