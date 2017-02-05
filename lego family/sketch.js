// Created by Jessica Bao
// Last edited Jan. 30, 2017
// This program was about an animation for a lego family
// Four the family members started at the corner of the screen
// and then all went to the center
// and then all went back their original corners again repeatedly

// initializes the starting points for all the lego family members
var x_topLeft = 100;
var y_topLeft = 50;
var x_bottomLeft = 30;
var y_bottomLeft = 550;
var x_topRight = 900;
var y_topRight = 70;
var x_bottomRight = 850;
var y_bottomRight = 550;

// changes the direction of each lego family member
var c1 = true, c2 = true, c3 = true, c4 = true; 

function setup() {
  noStroke();// disables the edge of all the shapes
  createCanvas(1000, 700);// creates a canvas sized 1000 * 700
  background(249, 242, 223);// sets the background color
}

function draw() {
  background(249, 242, 223);// makes sure that there is only one lego family member showing up without all the collection
  leftOne(15);// the first lego family member starts its own animation
  if(c1) {
    x_topLeft = x_topLeft + 1;
    y_topLeft = y_topLeft + 1;
  } else {
    x_topLeft = x_topLeft - 1;
    y_topLeft = y_topLeft - 1;
  }

  if(x_topLeft > 300 || y_topLeft < 50) {
    c1 = !c1
  }
  leftTwo(15);// the second lego family member starts its own animation
  if(c2) {
    x_bottomLeft = x_bottomLeft + 1;
    y_bottomLeft = y_bottomLeft - 1;
  } else {
    x_bottomLeft = x_bottomLeft - 1;
    y_bottomLeft = y_bottomLeft + 1;
  }

  if(y_bottomLeft < 275 || y_bottomLeft > 550) {
    c2 = !c2
  }
  rightTwo(15);// the third lego family member starts its own animation
  if(c3) {
    x_topRight = x_topRight - 1;
    y_topRight = y_topRight + 1;
  } else {
    x_topRight = x_topRight + 1;
    y_topRight = y_topRight - 1;
  }
  
  if(y_topRight > 275 || y_topRight < 70) {
    c3 = !c3
  }
  rightOne(15);// the fourth lego family member starts its own animation
  if(c4) {
    x_bottomRight = x_bottomRight - 1;
    y_bottomRight = y_bottomRight - 1;
  } else {
    x_bottomRight = x_bottomRight + 1;
    y_bottomRight = y_bottomRight + 1;
  }
  
  if(y_bottomRight < 275 | y_bottomRight > 550) {
    c4 = !c4
  }
}

// creates the first lego family member and its animation 
function leftOne(heightLeftOne) {
  fill(250, 199, 68);
  rect(x_topLeft, y_topLeft, 60, heightLeftOne);
  fill(151, 183, 189);
  rect(x_topLeft - 30, y_topLeft + 15, 120, heightLeftOne);
  fill(246, 189, 153);
  rect(x_topLeft - 30, y_topLeft + 30, 120, heightLeftOne + 35);
  fill(196, 57, 48);
  rect(x_topLeft - 30, y_topLeft + 80, 120, heightLeftOne + 25);
  fill(89, 49, 35);
  rect(x_topLeft - 30, y_topLeft + 120, 120, heightLeftOne);
  
  // if this family member just stops at the center of the screen
  // x_topLeft = x_topLeft + 1;
  // y_topLeft = y_topLeft + 1;
  // x_topLeft = min(x_topLeft, 300);
  // y_topLeft = min(y_topLeft, 275);
  
  // if(c1) {
  //   x_topLeft = x_topLeft + 1;
  //   y_topLeft = y_topLeft + 1;
  // } else {
  //   x_topLeft = x_topLeft - 1;
  //   y_topLeft = y_topLeft - 1;
  // }

  // if(x_topLeft > 300 || y_topLeft < 50) {
  //   c1 = !c1
  // }
}

// creates the second lego family member and its animation
function leftTwo(heightLeftTwo) {
  fill(155, 159, 72);
  rect(x_bottomLeft, y_bottomLeft, 60, heightLeftTwo);
  fill(45, 101, 60);
  rect(x_bottomLeft, y_bottomLeft + 15, 60, heightLeftTwo);
  fill(246, 189, 153);
  rect(x_bottomLeft, y_bottomLeft + 30, 60, heightLeftTwo + 35);
  fill(205, 94, 57);
  rect(x_bottomLeft, y_bottomLeft + 80, 60, heightLeftTwo + 25);
  fill(0);
  rect(x_bottomLeft, y_bottomLeft + 120, 60, heightLeftTwo);
  
  // if this family member just stops at the center of the screen
  // x_bottomLeft = x_bottomLeft + 1;
  // y_bottomLeft = y_bottomLeft - 1;
  // x_bottomLeft = min(x_bottomLeft, 430);
  // y_bottomLeft = max(y_bottomLeft, 275);
  
  // if(c2) {
  //   x_bottomLeft = x_bottomLeft + 1;
  //   y_bottomLeft = y_bottomLeft - 1;
  // } else {
  //   x_bottomLeft = x_bottomLeft - 1;
  //   y_bottomLeft = y_bottomLeft + 1;
  // }

  // if(y_bottomLeft < 275 || y_bottomLeft > 550) {
  //   c2 = !c2
  // }
}

// creates the third lego family member and its animation
function rightTwo(heightRightTwo) {
  fill(67, 81, 116);
  rect(x_topRight, y_topRight, 60, heightRightTwo);
  fill(196, 57, 48);
  rect(x_topRight, y_topRight + 15, 60, heightRightTwo);
  fill(246, 189, 153);
  rect(x_topRight, y_topRight + 30, 60, heightRightTwo + 35);
  fill(89, 49, 35);
  rect(x_topRight, y_topRight + 80, 60, heightRightTwo + 25);
  fill(67, 81, 116);
  rect(x_topRight, y_topRight + 120, 60, heightRightTwo);
  
  // if this family member just stops at the center of the screen
  // x_topRight = x_topRight - 1;
  // y_topRight = y_topRight + 1;
  // x_topRight = max(x_topRight, 530);
  // y_topRight = min(y_topRight, 275);
  
  // if(c3) {
  //   x_topRight = x_topRight - 1;
  //   y_topRight = y_topRight + 1;
  // } else {
  //   x_topRight = x_topRight + 1;
  //   y_topRight = y_topRight - 1;
  // }
  
  // if(y_topRight > 275 || y_topRight < 70) {
  //   c3 = !c3
  // }
}

// creates the fourth lego family member and its animation
function rightOne(heightRightOne) {
  fill(205, 94, 57);
  rect(x_bottomRight, y_bottomRight, 60, heightRightOne * 2);
  fill(89, 49, 35);
  rect(x_bottomRight, y_bottomRight + 30, 60, heightRightOne);
  fill(246, 189, 153);
  rect(x_bottomRight, y_bottomRight + 45, 60, heightRightOne);
  fill(89, 49, 35);
  rect(x_bottomRight, y_bottomRight + 60, 60, heightRightOne);
  fill(205, 94, 57);
  rect(x_bottomRight, y_bottomRight + 75, 60, heightRightOne * 4);
  
  // if this family member just stops at the center of the screen
  // x_bottomRight = x_bottomRight - 1;
  // y_bottomRight = y_bottomRight - 1;
  // x_bottomRight = max(x_bottomRight, 630);
  // y_bottomRight = max(y_bottomRight, 275);
  
  // if(c4) {
  //   x_bottomRight = x_bottomRight - 1;
  //   y_bottomRight = y_bottomRight - 1;
  // } else {
  //   x_bottomRight = x_bottomRight + 1;
  //   y_bottomRight = y_bottomRight + 1;
  // }
  
  // if(y_bottomRight < 275 | y_bottomRight > 550) {
  //   c4 = !c4
  // }
}