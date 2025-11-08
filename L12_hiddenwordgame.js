let inputField;
let submitButton;

function setup() {
    createCanvas(400, 200);
    background(220);
    inputField = createInput(" ");
    inputField.position(300, 300);
    submitButton = createButton("show");
    submitButton.position(width/2,height/2);
    submitButton.mousePressed(displayInput);
}
function displayInput(){
    Text(inputField.value(),50,100);
}