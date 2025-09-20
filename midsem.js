// function setup() {
//   createCanvas(600,400);
//   background(0);
  
// }

// function draw() {
//     stroke("red")
//     strokeWeight(10);
//     fill("black")
//     circle(150,200,100);
//     triangle(250,250,300,150,350,250);
//     rect(400,150,100,100);
// }
let d = 50;
function setup(){
    createCanvas(600,600);
}
function draw(){
    for (let i = 0; i < 10; i++) {
        circle(x,y,d);
        x+=50;
        y+=50
    }
}