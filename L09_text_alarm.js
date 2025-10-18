// function setup(){
//     createCanvas(600,400);
//     textAlign(CENTER, CENTER);
//     bgcolour = 220;
// }

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
// let alarmSound;
// let alarmActive = false;
// let lastColourChange = 0;
// let lastSoundPlay = 0;
// let timerStarted = false;
// let bgcolour = 220;
// function preload(){
//     alarmSound = loadSound('assets/BossaNova.mp3');
// }
// function draw(){
//     if(countdown <= 0){
//         bgcolour = color(random(255),random(255),random(255))
//     }
//     background(bgcolour);
//     textSize(100);
//     text(countdown,width/2,height/2);
//     textSize(20);
//     text("Click me to start the timer",width/2,height - 50);
// }
// function mousePressed(){
//     if(!timerStarted){
//         userStartAudio();
//         interval = setInterval(updateCountdown,1000);
//         timerStarted = true;

// }

// function updateCountdown(){
//     if(countdown > 0){
//         countdown-=1;
//     }else{
//         clearInterval(interval);
//         if(!alarmActive){
//             alarmActive = true;
//             alarmSound.play();
//             lastSoundPlay = millis();
//         }
//         colour = random(255),random(255),random(255)
//     }
// }
// function keyPressed(){
//     if(keyCode == 32 && alarmActive){
//         alarmSound.stop();
//         alarmActive = false;
//         bgcolour = color(220);
//     }
