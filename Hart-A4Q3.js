function setup() {
  createCanvas(400, 400);
  noStroke();
  noLoop(); // added to prevent the sketch from updating continuously
}

function draw() {
  background(220);
  let numRows = 3;
  let numCols = 3;
  let spacing = 150;
  
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      let x = (j + 0.5) * spacing;
      let y = (i + 0.5) * spacing;
      let shapeSet1 = {
        fill: color(random(255), random(255), random(255)), // colors are now random
        width: 30,
        height: 70,
        numPoints: 5,
        rotation: random(PI/2) // rotation is random
      };
      let shapeSet2 = {
        fill: color(random(255), random(255), random(255)), // colors are now random
        width: 50,
        height: 50,
        numPoints: 5,
        rotation: random(PI/2) // rotation is random
      };
      let shapeSets = [shapeSet1, shapeSet2]; // array for shape sets
      let shapeSetIndex = Math.floor(random(shapeSets.length)); // select a random shape set from the 2 options
      drawShape(x - 50, y, shapeSets[shapeSetIndex]);
      drawShape(x + 50, y, shapeSets[shapeSetIndex]);
    }
  }
}

function drawShape(x, y, set) {
  let w = set.width;
  let h = set.height;
  let numPoints = set.numPoints;
  let angle = 360/numPoints;
  fill(set.fill);
  push();
  translate(x, y);
  rotate(set.rotation); // apply random rotation
  for (let i = 0; i < numPoints; i++) {
    rotate(angle);
    ellipse(0, -h/2, w, h);
  }
  pop();
}
