let favouriteFoods = ["Pizza","Sushi","Ice Cream","Hotpot","Pasta"];

function setup(){
    createCanvas(400,400);
    background(220);
    textSize(40);
    textAlign(CENTER+200,CENTER+400);
    text("favourite foods",200,50);
}
function draw(){
    for (let i = 0; i < favouriteFoods.length; i++){
        text((i+1)+ ". " + favouriteFoods[i], 50, 80 + i*30);
}
}