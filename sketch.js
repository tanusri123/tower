 let value = 0;
 var ball,

 function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  
}

function draw() {
  background(255,255,255);
  let value = 0;
  fill(value);
  rect(25, 25, 50, 50);
  imageMode(Centre);
 function mousePressed() {
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }
  function mousePressed() {
    ellipse(mouseX, mouseY, 5, 5);
    // prevent default
    return false;

    function mousePressed(event) {
      console.log(event);
      function mouseDragged() {
        value = value + 5;
        if (value > 255) {
          value = 0;
        }
      }
      function mouseDragged() {
        value = value + 5;
        if (value > 255) {
          value = 0;
        }
      }

      function mouseDragged() {
        ellipse(mouseX, mouseY, 5, 5);
        // prevent default
        return false;
      }
      function mouseDragged(event) {
        console.log(event);
      }
  drawSprites();
}}}}



