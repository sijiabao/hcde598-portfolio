function setup() {
  createCanvas(720, 480);// creates a 720 * 480 canvas
  smooth();// draws all geometry with smooth edges
  strokeWeight(3);// sets thickness of lines to 3
}

function draw() {
  
  background(102, 190, 90);// sets the background color
  
  // When there is a background function here,
  // as the draw funtion is running within the setup function again and again
  // once I click the arrow to run the whole code,
  // the background covers the new robot as the translate function runs
  // because both background and the translate function are working together.
  // When there is no background function here,
  // only the translate function is working,
  // so I can see lots of robot because there is no background color covering.

  translate(mouseX - 266, mouseY - 257); 
  // moves the robot based on where the mouse goes 
  // without any off from where the mouse is
  
  // Neck
  stroke(255, 255, 255);// sets the color used to draw lines of the neck
  line(266, 257, 266, 162);// draws the first line of the neck
  line(276, 257, 276, 162);// draws the second line of the neck
  line(286, 257, 286, 162);// draws the third line of the neck
  
  // Anteenae
  line(276, 155, 246, 112);// draws the first line of the anteenae
  line(276, 155, 306, 56);// draws the second line of the anteenae
  line(276, 155, 342, 170);// draws the third line of the anteenae
  
  // Body
  stroke(255, 255, 255);// sets the color used to draw lines of the body
  fill(164, 198, 57); // fills the color of an ellipse of the body
  ellipse(264, 377, 66, 66); // draws an ellipse of the body
  fill(164, 198, 57); // fills the color of the first rectangle of the body
  rect(219, 257, 90, 120);// draws the first rectangle of the body
  fill(164, 198, 57);// fills the color of the second rectangle of the body
  rect(219, 274, 90, 6);// draws the second rectangle of the body
  
  // Head
  fill(164, 198, 57); // fills the color of the head
  ellipse(276, 155, 90, 90);// draws the head
  fill(164, 198, 57);// fills the color of the first ellipse of the nose
  ellipse(288, 150, 28, 28);// draws the first ellipse of the nose
  fill(255, 255, 255);// fills the color of the second ellipse of the nose
  ellipse(288, 150, 6, 6);//draws the second ellipse of the nose
  fill(255, 255, 255);// fills the color of the eyes and mouth
  ellipse(263, 148, 10, 10);// draws the first eye
  ellipse(296, 130, 8, 8);// draws the second eye
  ellipse(305, 162, 6, 6);// draws the mouth
  
  // Legs
  line(290, 400, 350, 450);// draws the first leg
  line(270, 410, 270, 450);// draws the second leg
}
