let inputField;
let submitButton;

function setup() {
    createCanvas(400, 200);
    text
    textAlign(CENTER, CENTER);
    words = ["apple", "banana", "cherry", "date", "elderberry"];
    background(220);
    inputField = createInput(" ");
    inputField.position(300, 300);
    inputField.style("font-size","20px");
    submitButton = createButton("show");
    submitButton.position(width/2,height/2);
    submitButton.mousePressed(displayInput);
}
function displayInput(){
    text(inputField.value(),50,100);
}