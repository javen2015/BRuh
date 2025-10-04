// let favouriteFoods = ["Pizza","Sushi","Ice Cream","Hotpot","Pasta"];

// function setup(){
//     createCanvas(400,400);
//     background(220);
//     textSize(40);
//     textAlign(CENTER+200,CENTER+400);
//     text("favourite foods",100,30);
// }
// function draw(){
//     for (let i = 0; i < favouriteFoods.length; i++){
//         text((i+1)+ ". " + favouriteFoods[i], 50, 80 + i*30);
// }
// }
// let yPos;
// function setup(){
//     createCanvas(600,400);
//     yPos = height;`
//     fill(255,255,0);`
//     textSize(24);
//     textAlign(CENTER,CENTER);
// }
// function draw(){
//     background(0);
//     text("Moving Text",width/2,yPos);
//     yPos-=0.6;
// }

let yPos;
let storyText = [
    "A long time ago in a galaxy far,",
    "far away...",
    "",
    "EPISODE 1",
    "THE BEGINNING",
    "It is a period of learning...",
    "Students have begun their journey",
    "into the world of p5.js.",
    "With newfound powers, they",
    "create amazing visuals and",
    "animations...",
    "",
"May the Code be with you!"
];
function setup() {
    createCanvas(600, 400);
    yPos = height;
}
function draw() {
  createCanvas(600, 400);
  yPos = height;
  fill(255, 255, 0);
  textSize(24);
  textAlign(CENTER, CENTER);
  if(audioStarted){
      push();
  translate(width / 2, yPos);
  scale(1,3);

  for (let i = 0; i < storyText.length; i++) {
    let sentence = storyText[i];
    text(sentence, width / 2, yPos + i * 20);
  }
  pop();
    yPos -= 0.6;

  }else{
    text("Click to Start",width/2,height/2);
  }


}

