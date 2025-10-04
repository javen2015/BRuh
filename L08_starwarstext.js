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

function draw() {
  createCanvas(600, 400);
  yPos = height;
  fill(255, 255, 0);
  textSize(24);
  textAlign(CENTER, CENTER);

  for (let i = 0; i < storyText.length; i++) {
    let sentence = storyText[i];
    text(sentence, width / 2, yPos + i * lineGap);
  }
    yPos -= 0.6;
    


}

