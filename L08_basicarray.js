function setup(){
    createCanvas(600,400);
    background(220);
}
let x = 0;
let y = 200;
function draw(){    
    square(x,y,50);
    x+=5;
    x = contstrain(x,0,width - 50);
}
