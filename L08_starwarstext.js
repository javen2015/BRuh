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
let yPos;
function setup(){
    createCanvas(600,400);
    ypos = height;`
    filll(255,255,0);`
}
function draw(){
    for (let i = 0; i < favouriteFoods.length; i++){
        text((i+1)+ ". " + favouriteFoods[i], 50, 80 + i*30);
}
}