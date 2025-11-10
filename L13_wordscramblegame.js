// write your codes here

let hiddenwords = ["beach", "cloud", "mango","glove","plant","enter"];

let textInput;
let guessButton;

let message;
let selected;
let hints;
let hint2;

function setup() {
    createCanvas(600,600);
    background("lightblue");

    textInput = createInput();
    textInput.size(150,30);
    textInput.style("font-size", "20px");
    textInput.position(160,240);

    guessButton = createButton("Guess");
    guessButton.size(150,30);
    guessButton.style("background-color", "gold");
    guessButton.style("font-size", "20px");
    guessButton.position(340,240);
    guessButton.mousePressed(checkAnswer);

    selected = random(hiddenwords); // choose one from the array
    selected = selected.toUpperCase();
    generateHints();
}

function generateHints() {
    hints = selected[0] + " " + "_ ".repeat(selected.length-1);
}

function checkAnswer() {
    let userinput = textInput.value().toUpperCase();
    if (userinput === selected) {
        message = "You guessed it! The hidden word is " + selected.toLowerCase() + ".";
    }else{
        for (let i = 0; i < userinput.length; i++) {
            if (userinput[i] === selected[i]) {
                let hintcombined = " " +sel
            }
        }
        message = "Wrong! Try again.";
    }
}

function draw() {
    background("lightblue");

    fill("black");
    textAlign(CENTER, CENTER);
    textSize(30);
    text("Guess the hidden 5-letter word!", width/2, 80);
    text("Attempts: 0", width/2, 120);
    text("Hints: " + hints, width/2, 160);

    fill("red");
    textSize(24);
    text(message, width/2, height/2+100);
}