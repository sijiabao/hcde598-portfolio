/*  Created by Jessica Bao
    Last edited 02/25/2017
    This program displays a visualizations of the number of the winners of Miss World 
    by each country. When hovering over each particle, it will display the country
    name and the number of the winners of Miss World.
*/


var particleSystem = [];

function setup() {
  createCanvas(1000, 800); // sets the canvas size to 1000 * 800
  textAlign(CENTER); // sets the text in the center of each particle
  textSize(12); // sets the text to size 12
  //colorMode(RGB, 255, 255, 255, 255); // sets the color mode

  // Count the winners for each country
  // [
  //  "Country Name": {
  //      count: #,
  //      titles: [{}, {}, {}]
  //   }
  // ]
  var buckets = {}; // creates an initial empty bucket list
  for (i = 0; i < data.length; i++) { // loops through each data element
    if (!buckets[data[i]['Country']]) { // creates an empty bucket of an country if it does not exist 
      buckets[data[i]['Country']] = {
      count: 0, // initializes count in the bucket as 0 for a new country
      }
    }
    buckets[data[i].Country].count++; // increases the count when there is a match
  }

  for (var key in buckets) { // now loops through each bucket
    var p = new Particles(key, buckets[key].count); // creates a new particle element with its count numbers
    particleSystem.push(p); // adds the new particle that is just created to the particleSystem array
  }
}


function draw() {
  background(255); // sets the background

  // Adds some distance between each country circle
  // Refer: https://p5js.org/examples/simulate-particle-system.html
  // This helps avoiding collisions
  for (i = 0; i < particleSystem.length - 1; i++) { // loops each element in the particles
    var pa = particleSystem[i]; // makes the instance of first particle
    for (j = i + 1; j < particleSystem.length; j++) { // now compares it with all the other particles
      var pb = particleSystem[j]; // creates particle b
      var diff = p5.Vector.sub(pb.position, pa.position); // subtracts particle a position with particle b position
      var magnitude = diff.magSq(); // calculates the squared magnitude of the vector that is previously created
      if (magnitude <= sq(pa.radius + pb.radius)) { // if magnitude is less than square root of both radius then move them far
        var dist = sqrt(magnitude); // gets the distance which is squr to magnitude
        var overlap = (pa.radius + pb.radius) - dist; // gets the total over lap
        diff.div(dist); // divides the diff(position) with magnitude
        diff.mult(overlap * 0.5); // multiplies the diff(position) the half of overlap change this 0.5 to add more spacing
        pb.position.add(diff); // now moves the particle b position by diff(position) so it will move out of half of overlap
        pa.position.sub(diff); // now moves the particle a position by diff(position) in the opposite direction
        pa.vel.mult(0.97); // increases the velocity of particle a when doing this
        pb.vel.mult(0.97); // increases the velocity of particle b when doing this
      }
    }
  }
  //draws particles for each country
  particleSystem.forEach(function (d) {
    d.update(); 
    d.draw(); 
  })
}

// defines the particle element
var Particles = function (name, count) {
  this.name = name; // setups the name
  this.count = count; // setups the count

  var isMouseOver = false; // initializes that the mouse is no over

  // setups the relative radius
  this.radius = sqrt(count) * 15; // gets the radius

  var initialRadius = this.radius; // initializes radius
  var maxR = 70; // max radius doesn't go beyond that

  var tempAng = random(TWO_PI); // gets a temp random angle to place these particle

  this.position = createVector(cos(tempAng), sin(tempAng)); // uses sin and cos will make sure that we get a round cluster instance of a straight line
  this.position.div(this.radius); // now changes the position related to the radius
  this.position.mult(1000); 
  this.position.set(this.position.x + (width / 4) * 2, this.position.y + height / 2); 

  // sets initial acceleration to 0,0
  this.vel = createVector(0, 0); 

  this.update = function () {
    checkMouse(this); // When there is an update just check for Mouse over
  }

  // The draw method for the Particle element
  this.draw = function () { 
    noStroke(); 

    if (isMouseOver) { // If the mouse it on top of the particle
      fill(225, 225, 225); // Change the background to white
    } else {
      // Calculate the color based on the count of Miss Worlds
      // alpha is 1 when count is 5
      // alpha is 0.5 when count is 2.5 etc..
      alpha = this.count / 5;
      c = color("rgba(255, 0, 138, " + alpha +")"); 
      fill(c); 
    }

    // Make the ellipse with pos and radius
    ellipse(this.position.x, this.position.y, this.radius * 2, this.radius * 2);

    // When hover just make background white and then add the text
    if (this.radius == maxR) { 
      fill(0, 0, 0); 
      text(this.name, this.position.x, this.position.y - 5);
      text("won: " + nfc(this.count), this.position.x, this.position.y + 11); 
    }
  }

  // helps to hand the moves Hover events
  function checkMouse(instance) {
    var mousePos = createVector(mouseX, mouseY);
    if (mousePos.dist(instance.position) <= instance.radius) { 
      increaseRadius(instance); 
      isMouseOver = true;
    } else {
      decreaseRadius(instance); 
      isMouseOver = false; 
    }
  }

  // helps to increase the radius when hover
  function increaseRadius(instance) {
    instance.radius += 3;
    if (instance.radius > maxR) { 
      instance.radius = maxR;
    }
  }

  // helps to increase the radius when move leaves
  function decreaseRadius(instance) {
    instance.radius -= 3;
    if (instance.radius < initialRadius) { 
      instance.radius = initialRadius;
    }
  }
  // Function helps to check if the mouse is over
  this.getMouseOver = function () {
    return isMouseOver;
  }
}
