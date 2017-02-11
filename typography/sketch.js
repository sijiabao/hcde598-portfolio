/*  Written by Jessica Bao
    Last edited 02/11/2017
    A happy valentine message
    When the mouse is hovered over the text, it will start shaking
    When the user clicks the mouse, the text will change to a random color each time
    together with a random-colored heart
*/

var x_happy = 300; 
var y_happy = 300;
var textLength = 300;
var textHeight = 100;
var x_val = x_happy + 130
var y_val = y_happy;
 
function setup() {
  createCanvas(900, 600); // creates the canvas
  textSize(60); // sets the font size
  textFont("Permanent Marker");// sets the text font
  frameRate(20); // controls the frame rate of each shake
}

function draw() {
  background(255); // sets the background to white
  text("happy", x_happy, y_happy); // draws the text "happy" in x_happy and y_happy
  text("valentine", x_val, y_val); // draws the text "valentine" in x_val and y_val
  shake(); // allows the text to shake
  
  if (mouseIsPressed) { // when the mouse is pressed
    fill(random(255), random(255), random(255)); // the text will be filled with randomized colors
    heart(); // a heart with randomized color will appear as well
  }
}

// allows the text to shake when the mouse is hovered over the text
function shake() {
  if (mouseX >= x_happy && mouseX <= x_happy + textLength && mouseY >= y_val && mouseY <= y_val + textHeight) {
    x_happy = mouseX - random(100, 200);
    x_val = mouseX + random(50, 100);
    y_happy = mouseY + random(20, 30);
    y_val = mouseY - random(10, 20);
  }
}

// draws a heart with randomized color
function heart() {
  fill(random(255), random(255), random(255));
  noStroke();
  ellipse(200, 250, 100, 100);
  ellipse(300, 250, 100, 100);
  triangle(153, 270, 348, 270, 250, 400);
  rect(240, 250, 20, 20);
}
