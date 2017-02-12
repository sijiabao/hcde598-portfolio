/*  Written by Jessica Bao
    Last edited 02/11/2017
    Draws hearts as the mouse moves
    with a background of gradient blue
*/


var heart;
var heartWidth = 191;
var aspectRadio = 225 / 191;

// loads the heart image from the web
function preload() {
  heart = loadImage("pink_heart.jpg");
}

function setup() {
  createCanvas(900, 700); // creates a canvas
  
  for (i = 0; i < 900; i++) { // draws 900 lines one at a time
    stroke(i * 0.054, i * 0.128, i * 0.193); // sets the color of the line as gradient color
    line(i, 0, i, 900); // draws one line at one time starting from the top of the canvas
  }
}

function draw() {
  image(heart, mouseX, mouseY, 50, 50 * aspectRadio); // draws the heart image as the mouse moves on the canvas
}