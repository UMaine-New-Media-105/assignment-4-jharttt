function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(220); // tight spaced pattern akin to Akiyoshi Kitaoka works
  let numRows = 10;
  let numCols = 10;
  let spacing = 80;
  
  let gradientOrder = ["gradient1", "gradient2", "gradient3"]; // originally tried to have a larger gradient accross whole pattern
  let gradients = {
    gradient1: [color(255, 0, 0), color(0, 255, 0)],
    gradient2: [color(0, 0, 255), color(255, 255, 0)],
    gradient3: [color(255, 0, 255), color(0, 255, 255)]
  };
  
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      let x = (j + 0.5) * spacing;
      let y = (i + 0.5) * spacing;
      
      let shapeSet = { 
        gradient: gradientOrder[(i*numCols + j) % gradientOrder.length],
        width: 30,
        height: 70,
        numPoints: 5
      };
      
      drawShape(x, y, shapeSet, gradients);
    }
  }
}

function drawShape(x, y, set, gradients) { 
  let w = set.width;
  let h = set.height;
  let numPoints = set.numPoints;
  let angle = 360/numPoints;
  
  let gradient = gradients[set.gradient];
  let gradientStep = (1.0 / numPoints) * (gradient.length - 1);
  
  push();
  translate(x, y);
  for (let i = 0; i < numPoints; i++) {
    fill(lerpColor(gradient[0], gradient[1], i * gradientStep));
    rotate(angle);
    ellipse(0, -h/2, w, h);
  }
  pop();
}
