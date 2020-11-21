var rect1;
var rect2;
var o1;
var o2;


function setup() {
  createCanvas(1200,800);
rect1 = createSprite(280, 300, 50, 100);
rect2 = createSprite(600, 400, 100, 50);

o1 = createSprite(100, 100, 50, 50);
o2 = createSprite(200, 100, 50, 50);

o1.shapeColor = "green";
o2.shapeColor = "green";

rect1.debug = true;
rect2.debug = true;
}

function draw() {
  background(0);
  rect1.shapeColor = "green";
  rect2.shapeColor = "green";

  rect2.x = World.mouseX;
  rect2.y = World.mouseY;
 
  if(isTouching(o1, rect2)){
  o1.shapeColor = "red";
  rect2.shapeColor = "red";
  }
else{ o1.shapeColor = "green";
      rect2.shapeColor = "green";
}
  console.log(rect2.x - rect1.x);

  drawSprites();
}