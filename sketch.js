let mover;
let r, g, b;

function setup() {
  createCanvas(300, 400);
  background(255);
  mover = new Mover(200, 200);
  r = random(105);
  g = random(100);
  b = random(100);

  stroke(random(r, g), random(g, b), b);
  strokeWeight(5);
}
function draw() {
  if (mouseIsPressed) {
    background(0, 20, 50);
    mover.update();
    mover.show();
    mover.edges();
  }
}
