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
    circle(mouseX,mouseY,size)
    size += 0.3;
}
<marquee class="marq" bgcolor="Green" 
                 direction="left" loop="">
            <div class="geek1">
                GeeksforGeeks
            </div>
            <div class="geek2">
                A computer science portal for geeks
            </div>
        </marquee>