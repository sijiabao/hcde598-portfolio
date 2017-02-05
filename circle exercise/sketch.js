function setup() {
  createCanvas(500, 500);
  background(244, 89, 66);
  fill(44);
}

function draw() {
  ellipse(mouseX, mouseY, 10, 10);
}

function mousePressed() {
  fill(random(255), random(255), random(255));
}