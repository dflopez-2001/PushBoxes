var player
var grass
var box
function setup() {
  createCanvas(800,400);
  player = createSprite(250, 200, 25, 45);
  player.shapeColor = "blue";
  grass = createSprite(400, 400, 800, 125);
  grass.shapeColor = "green";
  box1 = createSprite(700,0,50,50);
  box1.shapeColor = "tan";
  box2 = createSprite(600,0,50,50);
  box2.shapeColor = "tan";
  box3 = createSprite(120,0,90,90);
  box3.shapeColor = "tan";
}

function draw() {
  background(0,155,155);  
  drawSprites();

  player.velocityY = player.velocityY+1
  box1.velocityY= box1.velocityY+1
  box2.velocityY= box2.velocityY+1
  box3.velocityY= box3.velocityY+1
  player.collide(grass);
  box1.collide(grass);
  box1.collide(player);
  box2.collide(grass);
  box2.collide(player);
  box1.collide(box2);
  box2.collide(box1);
  box3.collide(grass);
  box3.collide(player);
  box3.collide(box1);
  box3.collide(box2);
  if(player.y > 305){

    if(keyDown("UP_ARROW")){
      player.velocityY = -15
    }

  }
  if(keyDown("LEFT_ARROW")){
    player.x = player.x - 5
  }
  if(keyDown("RIGHT_ARROW")){
    player.x = player.x + 5
  }
}