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
  fill(0,0,0);
  for (let i = 0; i < 6; i++) {
    let x = startX + i* circleDiameter
    circle(startX+i*circleDiameter,height/2,circleDiameter,circleDiameter)
    
  }
}

