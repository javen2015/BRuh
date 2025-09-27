let favouriteFoods = ["Pizza","Sushi","Ice Cream","Hotpot","Pasta"];

function setup(){
    createCanvas(400,400);
    background(220);
    textSize(30);
    for (let i = 0; i < favouriteFoods.length; i++){
    text((i+1)+ ". " + favouriteFoods[i], 50, 80 + i*30);
}
}
