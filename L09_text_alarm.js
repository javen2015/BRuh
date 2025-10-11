function setup(){
    createCanvas(600,400);
    textAlign(CENTER, CENTER);
}

// function draw(){
//     background(220);
//     h = nf(hour(),2);
//     m = nf(minute(),2);
//     s= nf(second(),2);
//     textSize(100);
//     text(h+ ':' + m+ ':' + s,width/2,height/2);
// }
let countdown = 5;
let interval;
let colour = 220;
function draw(){
    background(colour,colour,colour);
    textSize(100);
    text(countdown,width/2,height/2);
    textSize(20);
    text("Click me to start the timer",width/2,height - 50);
}
function mousePressed(){
    interval = setInterval(updateCountdown,1000);
}

function updateCountdown(){
    if(countdown > 0){
        countdown-=1;
    }else{
        clearInterval(interval);
        colour = random(255),random(255),random(255)
    }
}

