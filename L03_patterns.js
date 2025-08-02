let colourValue = 0;


function setup() {
    createCanvas(1000, 1000);
    background(220);
    // noLoop(); // Stops continuous drawing
  }
  
function draw() {

  // for (let i = 1; i < 10; i++) {
  //   if(i%2 === 0){
  //     fill(0); 
  //   }else{
  //     fill(255);
  //   }
 
  //    square(i*100,200,100);
  //    colourValue+=1;
  // }
  let circleDiameter = 30;
  let numOfCircles = 5;
  let totalWidth = circleDiameter* numOfCircles;
  let startX = (width - totalWidth)/2 + circleDiameter/2;
  let startY = (height - totalWidth)
  let colourR = 0;
  let colourG = 0;
  let colourB = 0;

  for (let i = 0; i < numOfCircles; i++) {
      fill(colourR,colourB,colourG);
    let x = startX + i* circleDiameter
    circle(x,height/2,circleDiameter,circleDiameter)
    colourR += 50
    colourG += 20
    colourB += 30
  }
}

