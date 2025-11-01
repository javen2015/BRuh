let NounField;
let VerbField;
let AdjectiveField;
let AdverbField;
let PlaceField;
let submitButton;
let outputArea;

function setup(){
    createCanvas(600,400);
    background(220);
    NounField = createInput("Enter noun here");
    NounField.position(55, 20);
    VerbField = createInput("Enter verb here ");
    VerbField.position(55, 45);
    AdjectiveField = createInput("Enter adjective here ");
    AdjectiveField.position(55, 70);
    AdverbField = createInput("Enter adverb here ");
    AdverbField.position(55, 95);
    PlaceField = createInput("Enter place here ");
    PlaceField.position(55, 120);
    submitButton = createButton("Generate story");
    submitButton.position(inputField.x + inputField.width + 10, inputField.y);
    submitButton.mousePressed(displayInput);
}

function displayInput(){
    background(220);
    const inputValue = inputField.value();
    textSize(24);
    textAlign(CENTER, CENTER);
    text(inputValue, 200,100);
    console.log(NounField.value);
    console.log(VerbField.value);
    console.log(AdjectiveField.value);
    console.log(AdverbField.value);
    console.log(PlaceField.value);
}