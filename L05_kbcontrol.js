function setup() {
    createCanvas(1000, 500);
    background(220);
    noStroke(); // no outline
  }


function draw(){
for (let i = 0; i < 5; i++) {
    circle(width/(6-i),height/(6/i))
    
}
}


// a = 400,0
//c = 400,600
//b = 0,600
//w = 400,h = 600
//___________   a
//|          |
//|          |
//|          |
//|          | c
// -----------
//b