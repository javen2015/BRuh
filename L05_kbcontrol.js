// let rectangleSize = 50;
// let showCircle = false;

// function setup() {
//     createCanvas(600, 400);
//         background(220);
// }
// function draw(){
//     background(220);
//     if(showCircle){
//         circle(width/2, height/2, 100);
//     noStroke();
//   }
// }
// function keyPressed(){
//     if (key === 'c') {
//         showCircle = !showCircle;
//     }
// }
// function draw(){
//     background(220);
//     rect(width/2 - rectangleSize/2 , height/2 - rectangleSize/2, rectangleSize, rectangleSize);
// }

// function keyPressed(){
//     rectangleSize = 100;
// }

// function keyReleased(){
//     rectangleSize = 50;
// }

// console.log("Hello World")
let rectangleSize = 50;
let showCircle = false;

function setup() {
    createCanvas(600, 400);
    background(220);
}
function keyPressed(){
    if (key === 'C') {
        showCircle = !showCircle;
    }
    if (key === 'S') {
        showCircle = !showCircle;
    }
    if (key === 'T') {
        showCircle = !showCircle;
    }
}
