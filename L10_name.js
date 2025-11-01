// // function setup(){
// //     createCanvas(600,400);
// //     textAlign(CENTER, CENTER);
// //     bgcolour = 220;
// // }

// // function draw(){
// //     background(220);
// //     h = nf(hour(),2);
// //     m = nf(minute(),2);
// //     s= nf(second(),2);
// //     textSize(100);
// //     text(h+ ':' + m+ ':' + s,width/2,height/2);
// // }
// let countdown = 5;
// let interval;
// let timerStarted = false;
// let bgcolor = 220;
// function setup(){
//     createCanvas(600,400);
//     textAlign(CENTER, CENTER);
//     bgcolor = color(220);
// }
// function draw(){

        
//     background(bgcolor);
//     textSize(100);
//     text(countdown,width/2,height/2);
//     textSize(20);
//     if(!timerStarted){
//         interval = setInterval(updateCountdown,1000);
//         timerStarted = true;
//     }
// }

// function updateCountdown(){
//     if(countdown > 0){
//         countdown-=1;
//         bgcolor =  color(random(255),random(255),random(255));
//     }else{
//         clearInterval(interval);
//         countdown = 5;
//         timerStarted = false;
       
//     }
// }
// let inputText;
// let userText = "Your Text Here";
// function setup(){
//     createCanvas(600,400);
//     inputText = createInput();
//     inputText.position(200, height -80);
//     inputText.size(200);
//     inputText.input(updateText);
// }
// function draw(){
//     background(220);
//     textSize(28);
//     textAlign(CENTER, CENTER);
//     text(userText,width/2,100);
// }
// function updateText(){
//     userText = this.value();
// }
let nameINnput;
let ageInput;
let colorPicker;

function setup(){
    createCanvas(600,400);
    colorPicker = createColorPicker('#ff0000');
    colorPicker.position(200,32);
}

function draw(){
    
    fill(255);
    rect(50,100,width/2,height/2);
    background(colorPicker.value());
    textSize(16);
    textAlign(LEFT);
    fill(0);
    text('Pick a background color',20,50);
}