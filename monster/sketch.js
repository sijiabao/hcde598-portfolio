/*  Created by Jessica Bao
    Last edited 02/04/2017
    Program that draws a cute monster
    Uses functions and parameters
*/

var page = 0;
var eyeDirection = 0;
var jumpValue = 0;
var jumpDir = 1;

function setup() {
  createCanvas(550, 700); // creates a vertical rectangle canvas 
  background(255); // sets the background color to white
  noStroke();// disables the edge of all the shapes
}

// draws the monster with moving eyes and jumping interaction
function draw() {
  background(255);// sets the background color to white
  monster(250, 300 + jumpValue);// draws the monster at 250, 300 originally, and then adding jumping value
  if (page == 0) {// on the page of moving eyes
    if (mouseX > 250) {// moves the mouse towards the right of the screen
      eyeDirection = min(eyeDirection + 1, 30);// eyeball moves slowly towards the right but within the face
    } else {// moves the mouse towards the left of the screen
      eyeDirection = max(eyeDirection - 1, -30);// eyeball moves slowly towards the left but within the face
    }
  } else {// on the page of jumping interaction
    jumpValue = jumpValue + jumpDir;// updates the jumping value based on the jumping direction
    if (jumpValue > 230 || jumpValue < -160) {// when the monster reaches the top or the bottom of the canvas
      jumpDir = jumpDir * -1;// changes the direction of the jumping interaction
    }
  }
}

// switches pages between moving eyes and jumping interaction
function mousePressed() {
  page = 1 - page;
}

// draws a monster at the x,y location passed
// this monster includes a horn, body, and legs
function monster(x, y) {
  horn(x, y);
  body(x, y);
  legs(x, y);
}

// draws the horn of the monster at the x, y location
function horn(x, y) {
  fill(185);
  triangle(x - 50, y - 100, x - 50, y - 140, x - 30, y - 120);
  triangle(x + 30, y - 120, x + 50, y - 140, x + 50, y - 100);
}

// draws the body of the monster at the x, y location
function body(x, y) {
  fill(127, 96, 164);
  ellipse(x, y, 200, 250);
  mouth(x, y);
  eye(x, y);
}
  
// draws the mouth of the monster at the x, y location
function mouth(x, y) {
  fill(66);
  ellipse(x, y - 70, 120, 40);
  teeth(x, y);
}
  
// draws the teeth of the monster at the x, y location
function teeth(x, y) {
  fill(255);
  ellipse(x - 30, y - 62, 10, 15);
  ellipse(x + 10, y - 62, 15, 20);
  ellipse(x + 30, y - 62, 10, 15);
}

// draws the eye of the monster at the x, y location
function eye(x, y) {
  fill(245, 130, 25);
  ellipse(x, y + 20, 120, 120);
  fill(255);
  ellipse(x, y + 20, 110, 110);
  fill(0);
  ellipse(x + eyeDirection, y + 20, 30, 30);
  fill(255);
  ellipse(x + 10 + eyeDirection, y + 10, 20, 20);
}
  
// draws the legs of the monster at the x, y location
function legs(x, y) {
  fill(127, 96, 164);
  rect(x - 20, y + 120, 10, 50);
  rect(x + 20, y + 120, 10, 50);
  ellipse(x - 20, y + 170, 30, 15);
  ellipse(x + 30, y + 170, 30, 15);
}