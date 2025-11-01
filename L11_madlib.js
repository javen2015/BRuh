let inputField;
let submitButton;
let outputArea;

function setup(){
    createCanvas(600,400);
    background(220);
    inputField = createInput("Enter text here ");
    inputField.position(55, 20);
    submitButton = createButton('show');
    submitButton.position(inputField.x + inputField.width + 10, inputField.y);
    submitButton.mousePressed(displayInput);
}

