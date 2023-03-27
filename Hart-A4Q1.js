function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(220);
  // ellipses to create custom leaf shape
  let x = width/2;
  let y = height/2;
  let numEllipses = 12;
  let shapeSet = { // parameters for shape
    fill: color(0, 255, 0),
    width: 50,
    height: 100,
    numPoints: numEllipses
  };

  drawleafCircle(x, y, shapeSet); //called function

  let shapeSet2 = {
    fill: color(255, 0, 0),
    width: 80,
    height: 50,
    numPoints: 8
  };

  drawleafCircle(x + 100, y + 100, shapeSet2);
}

function drawleafCircle(x, y, set) { // various parameters to vary for both
  let w = set.width;
  let h = set.height;
  let numPoints = set.numPoints;
  let angle = 360/numPoints;
  fill(set.fill);
  push();
  translate(x, y);
  for (let i = 0; i < numPoints; i++) { // drawn into loop
    rotate(angle);
    ellipse(0, -h/2, w, h);
  }
  pop();
}
