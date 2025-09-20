// let x =200;
// let y = 200;
// let colour = 1;
// function setup() {
//     createCanvas(400, 400);
// }
// function draw(){
//     background(220);
//     if(keyIsDown(RIGHT_ARROW)){
//         x+=10;
//     }
//     if(keyIsDown(LEFT_ARROW)){
//         x-=10;
//     }
//     if(keyIsDown(UP_ARROW)){
//         y-=10;
//     }
//     if(keyIsDown(DOWN_ARROW)){
//         y+=10;
//     }
//     if(keyIsDown(SPACE)){
//         if(colour%2==0){
//             colour+=1;
//             fill(50,0,0);
//         }else{
//             colour+=1;
//             fill(200,0,0);
//         }
//     }
    // x = constrain(x,50,width-50);
    // y = constrain(y,50,height-50);
//     square(x, y, 50,50);
// }
let x = 0;
let y = 0;
let width = 100;
let height = 100;
let soundEffect, backgroundSound,staticImage;
function preload(){
    staticImage = loadImage('assets/pico-a.png');
    soundEffect = loadSound('assets/DunDunDunnn.mp3');
    backgroundSound = loadSound('assets/Win.mp3');
}
function draw(){
    if(keyIsDown(RIGHT_ARROW)){
        x+=10;
    }
    if(keyIsDown(LEFT_ARROW)){
        x-=10;
    }
    if(keyIsDown(UP_ARROW)){
        y-=10;
    }
    if(keyIsDown(DOWN_ARROW)){
        y+=10;
    }
    x = constrain(x,50,);
    y = constrain(y,50,height-50);
    image(staticImage,x,y,width,height);
}
function setup() {
    createCanvas(200,200);
    background('lightblue');
    backgroundSound.loop();
}
function keyPressed(){
    if(keyCode===32){
        soundEffect.play();
        width = 50
        height = 50
    }
}
function keyReleased(){
    width = 100;
    height = 100;
}
