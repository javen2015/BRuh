let inputField;
let submitButton;
let outputArea;

function setup(){
    createCanvas(600,400);
    background(220);
    inputField = createInput("Enter text here ");
    inputField.position(55, 20);
    inputField = createInput("Enter text here ");
    inputField.position(55, 45);
    
    submitButton = createButton('show');
    submitButton.position(inputField.x + inputField.width + 10, inputField.y);
    submitButton.mousePressed(displayInput);
}

function displayInput(){
    background(220);
    const inputValue = inputField.value();
    textSize(24);
    textAlign(CENTER, CENTER);
    text(inputValue, 200,100);
}