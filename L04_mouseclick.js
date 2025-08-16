// function setup() {
//     createCanvas(1000, 1000);
//     background(220);
//     // noLoop(); // Stops continuous drawing
//   }

// let shapeColor ='blue';
// let x1 = 500;
// let y1 = 200;
// let x2 = 300;
// let y2 = 500;
// let x3 = 200;
// let y3 = 300;
// let height = 500;
// function draw(){
//     if (mouseIsPressed){
//         triangle(x1,y1,x2,y2,x3,y3);
//         fill(shapeColor);
//     }
// }

// function mousePressed(){
//     shapeColor= color(random(255),random(255),random(255))
//     let x1 = random(width);
//     let y1 = random(height);
//     let x2 = random(width);
//     let y2 = random(width);
//     let x3 = random(height);
//     let y3 = random(width);
// }

// function mouseReleased(){
//     shapeColor =color(random(255),random(255),random(255))
//     let x1 = random(width);
//     let y1 = random(height);
//     let x2 = random(width);
//     let y2 = random(width);
//     let x3 = random(height);
//     let y3 = random(width);
// }



// Cool circle code
// let shapeColor ="blue";
// let circleSize = 20


// function setup(){
//     createCanvas(400,400)
//     background(200);
// }

// function draw(){
//     fill(shapeColor);
//     ellipse(mouseX,mouseY,circleSize,circleSize) 
// }

// function mousePressed(){
//     shapeColor = color(random(255), random(255),random(255))
//     circleSize= 1
// }

// function mouseReleased(){
//     shapeColor = color(random(255), random(255),random(255))
// }

// function mouseMoved(){
//     circleSize +=2
// }

// let shapeColor ="blue";
// let circleSize = 20


// function setup(){
//     createCanvas(400,400);
//     background(200);
// }

// function draw(){
//     background(200);
//     fill(shapeColor);
//     ellipse(mouseX,mouseY,circleSize,circleSize);
// }

// function mousePressed(){
//     shapeColor = color(random(255), random(255),random(255))
//     circleSize= 1
// }

// function mouseReleased(){
//     shapeColor = color(random(255), random(255),random(255))
// }

// function mouseMoved(){
//     circleSize +=2
// }

let circleSize = 20;
let shapeColor= 'blue';

function setup(){
    createCanvas(400,400);
    background(200);
}

// function draw(){
//     background(200);
//     fill(shapeColor);
//     ellipse(mouseX,mouseY,circleSize,circleSize);
// }

function mouseDragged(){
    fill(shapeColor);
    ellipse(mouseX,mouseY,circleSize,circleSize);
}


function mousePressed(){
    shapeColor = color(random(255), random(255),random(255))
}

function mouseReleased(){
    shapeColor = color(random(255), random(255),random(255))
}

function mouseMoved(){
    circleSize +=2
}