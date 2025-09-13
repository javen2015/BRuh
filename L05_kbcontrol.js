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
// let rectangleSize = 50;
// let showCircle = false;

// function setup() {
//     createCanvas(600, 400);
// }
// function draw(){
//     background(220);
//     if (keyCode === 67) {
//         circle(width/2, height/2, 100);
//     }
//     if (key === 's') {
//         rect(width/2,height/2,100,100);
//     }
//     if (keyCode === UP_ARROW) {
//         triangle(300,150,250,250,350,250);
//     }
// }
// function keyPressed(){
//     console.log("key:",key);
//     console.log("keyCode:",keyCode);
// }
// let colourR = 0;
// let colourG = 0;
// let colourB = 0;
// function setup() {
//     createCanvas(600, 400);
// }
// function draw(){
//     background(220);
//     fill(colourR,colourG,colourB);
//     circle(width/2, height/2, 100);
//     if (key==='r') {
//         colourR = 255;
//         colourG = 0;
//         colourB = 0;
//     }
//     else if (key === 'w') {
//         colourR = 255;
//         colourG = 255;
//         colourB = 255;
//     }else if (key==='g') {
//         colourR = 0;
//         colourG = 255;
//         colourB = 0;
//     }else{
//         colourR = 255;
//         colourG = 255;
//         colourB = 0;
//     }
// }
// let colourR = 0;
// let colourG = 0;
// let colourB = 0;
// function setup() {
//     createCanvas(600, 400);
// }
// function draw(){
//     background(220);
//     fill(colourR,colourG,colourB);
//     circle(width/2, height/2, 100);
//     if (mouseX < 100) {
//         colourR = 255;
//         colourG = 0;
//         colourB = 0;
//     }
//     else if (key === 'w') {
//         colourR = 255;
//         colourG = 255;
//         colourB = 255;
//     }else if (mouseX>=100 
//         && mouseX < 200
//     ) {
//         colourR = 0;
//         colourG = 255;
//         colourB = 0;
//     }else if (mouseX>=200){
//         colourR = 0;
//         colourG = 0;
//         colourB = 255;
//     }
// }
let x =0;
let y = 0;
let speed = 1;
function setup() {
    createCanvas(400, 400);
}
function draw(){
    background(220);
    if(keyIsDown(RIGHT_ARROW)){
        x+=speed
    }
    if(keyIsDown(LEFT_ARROW)){
        x-=speed
    }
    if(keyIsDown(UP_ARROW)){
        y-=speed
    }
    if(keyIsDown(DOWN_ARROW)){
        y+=speed
    }
    if(keyIsDown(SHIFT)){
        speed+=1
    }
    x = constrain(x,0,width)
    y = constrain(y,0,height)
    circle(x, y, 50);
}