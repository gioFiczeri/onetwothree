function setup() {
  createCanvas(400, 400);
}

function draw() {
  ellipse(200, 200, frameCount*3%500);
  if(frameCount*5%400==0){
    background(0);
  }
}
