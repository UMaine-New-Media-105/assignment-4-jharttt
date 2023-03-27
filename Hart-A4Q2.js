function setup() {
  createCanvas(400, 400);
  noStroke();
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
        fill: color(0, 255, 0),
        width: 30,
        height: 70,
        numPoints: 5
      };
      let shapeSet2 = {
        fill: color(255, 0, 0),
        width: 50,
        height: 50,
        numPoints: 5
      };
      drawShape(x - 50, y, shapeSet1);
      drawShape(x + 50, y, shapeSet2);
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
  for (let i = 0; i < numPoints; i++) {
    rotate(angle);
    ellipse(0, -h/2, w, h);
  }
  pop();
}
