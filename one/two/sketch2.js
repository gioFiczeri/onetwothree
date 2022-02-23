//GIO FICZERI
//Joy Division Album Cover Generator
//ART 151


//stores user input
var input;
var button;
//spacing for lines to make sure they dont overlap
let space=20;
//stores number of characters within a string
var nameLength;
f=0;
function setup() {
  createCanvas(240,b=500);
  v=vertex;
  f++;
  //creates text box used for user input
  input=createInput();
  //creates button with prompt that when clicked executes processName(); function
  button=createButton("What's your first name?");
  button.mousePressed(processName);
}

function draw() {
  background(0);
  fill(0);
  stroke(b);
  let numOfLines=nameLength;
  //for loop that arrays through the value assigned to numOfLines(length of name)//then draws that number of lines
 for (let y = 0; y < numOfLines; y++) {
   
//Perlin Noise Line Code by Craig S. Kaplan //https://openprocessing.org/sketch/683686
//The challenge with this bit of code was its unusual syntax that made it fly off screen or not take sum of letters, was fixed by slight modifications to sums and canvas size
    beginShape()
    for(x=0;x<b;x++)
      v(x,y+300/(1+pow(x-150,4)/8e6)*noise(x/30+f/50+y))
    v(x,1e4)
        endShape()
    
 }
//unfortunately lines are very small which make it difficult to see that its generated number of letters in name//good test to see in action is type and click button one letter at a time
  
}
function processName(){
  //assigns name as what was entered in input box
  name=input.value();
  //for loop to assign length of string to a variable
  for (var i=0; i<name.length;i++){
    //+1 accounts for array starting at 0
   nameLength=i+1;
  }  
  //used as test to make sure correct value is being returned, uncomment to use-----------> console.log(nameLength);
  //returns number needed for determining number of lines to be drawn
  return nameLength;
}