var img;// declares variable 'img'

function setup() {
  createCanvas(1000, 700);// creates a 720*480 canvas
  img = loadImage("598hw1.png");// loads the img
}

function draw() {
  // displays the image at half size at point (width/2, height/8)
  image(img, width/2, height/8, img.width/2, img.height/2);
  
  // rectangle
  stroke(204, 171, 134, 95);// fills the color of the edge of the rectangle
  strokeWeight(1); // sets the thickness of the edge of the rectangle
  fill(224, 203, 188);// fills the color of the rectangle
  rect(90, 90, 390, 520);// draws the rectangle
  
  // green quad on the left corner
  stroke(0);// fills the color of the edge of the green quad
  strokeWeight(1);// sets the thickness of the edge of the green quad
  fill(206, 210, 168);// fills the color of the green quad
  quad(100, 130, 130, 115, 140, 140, 120, 150);// draws the green quad
  
  // two lines that intersect
  line(160, 140, 135, 200);// draws the first line
  line(148, 170, 200, 172);// draws the second line
  
  // blue quad right to the two lines
  fill(191, 207, 217);// fills the color of blue quad
  quad(200, 140, 300, 125, 320, 160, 195, 160)// draws the blue quad
  
  // green half ellipse on the top
  fill(206, 210, 168);// fills the color the green half ellipse
  arc(350, 105, 20, 20, 0, PI, CHORD);// draws the green half ellipse
  
  // purple object under the green half ellipse
  
  // top half ellipse
  fill(142, 150, 185);// fills the color of the top half ellipse
  arc(370, 180, 60, 60, HALF_PI, HALF_PI+PI, CHORD);// draws the top half ellipse
  
  // bottom half ellipse
  fill(142, 150, 185);// fills the color of the bottom half ellipse
  arc(370, 240, 60, 60, HALF_PI, HALF_PI+PI, CHORD);// draws the bottom half ellipse
  
  // rectangle
  noStroke();// disables the color of the edge of the rectangle
  fill(142, 150, 185);// fills the color of the rectangle
  rect(369, 150, 20, 120);// draws the rectangle
  
  // finishes the edge of the purple object
  stroke(0);// fills the color of the lines
  strokeWeight(1);// sets the thickness of the lines
  line(368, 149, 420, 149);// draws the first line
  line(369, 270, 389, 270);// draws the second line
  line(389, 149, 389, 270);// draws the third line
  
  // green-blue quad next to the purple object
  fill(178, 191, 181);// fills the color of the green-blue quad
  quad(440, 139, 455, 145, 450, 160, 435, 155);// draws the green-blue quad
  
  // a line on the top
  line(450, 100, 480, 150);// draws the line
  
  // blue star
  // quad
  fill(135, 165, 170);// fills the color of the quad
  quad(210, 180, 230, 200, 210, 220 ,190, 185);// draws the quad
  
  // triangle
  stroke(135, 165, 170);// fills the color of the edge of the triangle
  fill(135, 165, 170);// fills the color of the triangle
  triangle(185, 210, 191, 185, 211, 220);// draws the triangle
  
  // finishes the edge of the triangle
  stroke(0);// fills the color of the edge of the triangle
  line(190, 185, 185, 210);// draws the first line
  line(185, 210, 210, 220);// draws the second line
  
  // blue half ellipse on the right
  fill(188, 209, 212);// fills the color of the blue half ellipse
  arc(480, 200, 20, 20, HALF_PI+QUARTER_PI, HALF_PI+PI, CHORD);// draws the blue half ellipse
  
  // purple flag on the left
  
  // line
  line(160, 190, 170, 290);// draws the line
  
  // quad
  fill(142, 150, 185);// fills the color of the quad
  quad(168, 260, 170, 290, 148, 295, 140, 270);// draws the quad
  
  // ellipse
  noStroke();// disables the edge of the ellipse
  fill(224, 203, 188);// fills the color of the ellipse
  ellipse(140, 282, 30, 30);// draws the ellipse
  
  // tadpole
  stroke(0);// fills the color of the lines
  strokeWeight(1);// sets the thickness of the lines
  fill(191, 207, 217);// fills the color of the tadpole
  ellipse(220, 290, 25, 20);// draws the ellipse of the tadpole
  line(207, 290, 207, 380);// draws the line of the tadpole
  
  // two long curves
  
  // top long curve
  line(280, 300, 270, 380);// draws the line
  noFill();// disables to fill the color of the arc
  arc(320, 300, 80, 80, PI, TWO_PI);// draws the arc
  
  //bottom long curve
  line(155, 350, 170, 420);// draws the left line
  arc(186, 420, 30, 30, HALF_PI, PI);// draws the arc that connects the left and bottom lines
  line(185, 435, 290, 445);// draws the line at the bottom
  arc(290, 430, 30, 30, 0,HALF_PI);// draws the arc that connects the bottom and right lines
  line(320, 320, 305, 436);// draws the right line
  
  // blue triangle on the right
  fill(115, 149, 179);// fills the color of the blue triangle
  triangle(400, 350, 430, 260, 470, 320);// draws the blue triangle
  line(415, 230, 430, 260);// draws the top line
  line(400, 350, 380, 390);// draws the bottom line
  
  // blue rectangle on the left
  fill(191, 207, 217);// fills the color of the blue rectangle on the left
  rect(120, 430, 30, 30);// draws the blue rectangle on the left
  
  // big blue quad on the left
  fill(135, 165, 170);// fills the color of the big blue quad on the left
  quad(205, 460, 220, 530, 150, 550, 120, 500);// draws the big blue quad on the left
  
  // purple rectangle on the right
  fill(142, 150, 185);// fills the color of the purple rectangle on the right
  rect(400, 400, 40, 30);
  
  // blue flag on the left of the purple rectangle
  fill(191, 207, 217);// fills the color of the blue flag
  quad(350, 370, 400, 450, 360, 470, 330, 390);// draws the blue quad
  line(360, 470, 380, 520);// draws the line of the flag
  
  // green quad with four arms
  fill(140, 173, 158);// fills the color of the green quad
  quad(330, 480, 330, 520, 280, 520, 285, 490);// draws the green quad
  line(290, 470, 285, 490);// draws the top arm
  line(330, 480, 350, 470);// draws the right arm
  line(330, 520, 330, 540);// draws the bottom arm
  line(260, 520, 280, 520);// draws the left arm
  
  // yellow flag at the bottom
  fill(211, 221, 189); // fills the color of the yellow flag
  quad(435, 470, 445, 520, 415, 515, 400, 470);// draws the yellow flag
  line(415, 515, 425, 550);// draws the handle of the flag
  
  // purple flag at the bottom with two arms
  fill(142, 150, 185);// fills the color of the purple flag
  quad(400, 545, 400, 575, 350, 575, 360, 545);// draws the quad
  line(400, 520, 400, 545);// draws the top arm
  line(350, 575, 340, 600);// draws the bottom arm
  
  // curve + line
  noFill();// disable to fill the color of the curve
  arc(300, 550, 50, 50, 0, PI)// draws the curve
  line(300, 570, 300, 610);// draws the line
  
  // green object on the right of the curve + line
  line(200, 570, 200, 610);// draws the line of the green object
  fill(211, 221, 189);// fills the color of the green object
  triangle(200, 570, 230, 540, 220, 570);// draws the triangle
  stroke(224, 203, 188);// fills the color of the line
  strokeWeight(2);// sets the thickness of the line
  line(230, 540, 200, 570);// draws the line
  
  // blue object at the bottom right corner
  stroke(0);// fills the color of the edge of the blue object
  strokeWeight(1);// sets the thickness of the edge of the blue object
  fill(191, 207, 217);// fills the color of the triangle
  triangle(135, 580, 145, 550, 160, 575);// draws the triangle
  noFill();// disables the color of the arc
  arc(135, 560, 50, 50, 0, PI);// draws the arc
}