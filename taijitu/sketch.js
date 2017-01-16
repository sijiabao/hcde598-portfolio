function setup() {
  createCanvas(720, 480);// creates a 720 * 480 canvas
}

function draw() {
  background(255);// sets the background color to white
  translate(mouseX - 200, mouseY - 200); // moves the taijitu as the mouse goes
  
  // main ellipse
  stroke(0);// sets the color of the edge of the main ellipse to black
  strokeWeight(5);// sets the thickness of the edge of the main ellipse to 5
  fill(255);// fills the color of the main ellipse to white
  ellipse(200, 200, 250, 250);// draws the main ellipse
  
  // rectangle for creating a black/white half ellipse
  fill(0);// fills the color of the rectangle to black
  rect(200, 75, 125, 250);// draws the rectangle
  
  // edge of the main ellipse
  stroke(255);// sets the color of the edge of the main ellipse to white
  strokeWeight(1);// sets the thickness of the edge of the main ellipse to 1
  fill(255, 255, 255, 0);// fills the color of the ellipse with transparency
  ellipse(200, 200, 250, 250);// draws the ellipse for creating the edge of the main ellipse
  
  // ellipse for covering part of the rectangle that is outside the main ellipse 
  strokeWeight(60);// sets the thickness of the edge of the ellipse to 60
  stroke(255);// sets the color of the edge of the ellipse to white
  fill(255, 255, 255, 0);// fills the color of the ellipse with transparency
  ellipse(200, 200, 310, 310);// draws the ellipse for covering part of the rectangle that is outside the main ellipse
  
  // big ellipse on the bottom
  noStroke();// disables the thickness of the edge of the big ellipse on the bottom
  fill(0);// sets the color of the big ellipse on the bottom to black
  ellipse(200, 262.5, 125, 125);// draws the big ellipse on the bottom
  
  // small ellipse on the bottom
  fill(255);// sets the color of the small ellipse on the bottom to white
  ellipse(200, 262.5, 35, 35);// draws the small ellipse on the bottom
  
  // big ellipse on the top
  noStroke();// disables the thickness of the edge of the big ellipse on the top
  fill(255);// sets the color of the big ellipse on the top to white
  ellipse(200, 138, 124, 124);// draws the big ellipse on the top
  
  // small ellipse on the top
  fill(0);// fills the color of the small ellipse on the top to black
  ellipse(200, 137.5, 35, 35);// draws the small ellipse on the top
}