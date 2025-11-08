let NounField;
let VerbField;
let AdjectiveField;
let AdverbField;
let PlaceField;
let submitButton;
let template;


function setup(){
    storyTemplate = ["The "]
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
    submitButton.position(width/2,height/2);
    submitButton.mousePressed(displayInput);
}

function displayInput(){
    // background(220);
    // textSize(24);
    // textAlign(CENTER, CENTER);
    console.log(NounField.value());
    console.log(VerbField.value());
    console.log(AdjectiveField.value());
    console.log(AdverbField.value());
    console.log(PlaceField.value());
}