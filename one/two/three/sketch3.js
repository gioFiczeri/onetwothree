let color;
function setup() {
  frameRate(7);
  createCanvas(400, 400);
}

function draw() {
  color = random(["RED", "GREEN", "BLUE", "PURPLE", "BLACK"]);
  background(220);
  strokeWeight(4);
  stroke(255);
  
  var x=0;
  while (x<=width){
    fill(color);
    rect(mouseX,100,25,25);
    x=x+50;
  }
  for(var x=0; x<=width; x+=50){
    fill(color);
    ellipse(x,300,25,25);
    
  }
}