var player
var grass
var box
var sunlight
var cloudy
var boxImg
var boxesGroup
var acidrain
var acidGroup
var acidImg
var acidRaining
var life, lifeImg
function setup() {
  createCanvas(1350,800);
  boxImg = loadImage("Block.jpg");
  player = createSprite(250, 200, 25, 45);
  player.shapeColor = "blue";
  grass = createSprite(400, 800, 2000, 125);
  grass.shapeColor = "green";
  box1 = createSprite(700,0,50,50);
  box1.shapeColor = "tan";
  box2 = createSprite(600,0,50,50);
  box2.shapeColor = "tan";
  box3 = createSprite(120,0,90,90);
  box3.shapeColor = "tan";
  box4 = createSprite(987,0,90,90);
  box5 = createSprite(987,-50,90,90);
  life = createSprite(1300,50,90,90);
  lifeImg = loadImage("Life.png");
  acidImg = loadImage("Acid.png");

  boxesGroup = createGroup();
  boxesGroup.add(box1);
  boxesGroup.add(box2);
  boxesGroup.add(box3);
  boxesGroup.add(box4);
  boxesGroup.add(box5);
  acidGroup = createGroup();
}
function preload(){
sunlight = loadImage("Sunny.jpg");
cloudy = loadImage("cloudy.jpg");






}

function draw() {
  background(sunlight);  
  drawSprites();
  box1.addImage(boxImg);
  box1.scale = 0.1
  box2.addImage(boxImg);
  box2.scale = 0.1
  box3.addImage(boxImg);
  box3.scale = 0.1
  box4.addImage(boxImg);
  box4.scale = 0.1
  box5.addImage(boxImg);
  box5.scale = 0.1
  life.addImage(lifeImg)
  life.scale = 0.1
  player.velocityY = player.velocityY+1
  box1.velocityY= box1.velocityY+1
  box2.velocityY= box2.velocityY+1
  box3.velocityY= box3.velocityY+1
  box4.velocityY= box4.velocityY+1
  box5.velocityY= box5.velocityY+1
  text("2",1295,45,90,90)
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
  box4.collide(box1);
  box4.collide(box2);
  box4.collide(box3);
  box4.collide(box5);
  box4.collide(grass);
  box4.collide(player);
  box5.collide(box1);
  box5.collide(box2);
  box5.collide(box3);
  box5.collide(box4);
  box5.collide(grass);
  box5.collide(player);
  acidGroup.setVelocityYEach(12);
  spawnAcidRain()
  keyPressed();
  if(player.y > 705){

    if(keyDown("UP_ARROW")){
      player.velocityY = -25
    }

  }
  if(keyDown("LEFT_ARROW")){
    player.x = player.x - 5
  }
  if(keyDown("RIGHT_ARROW")){
    player.x = player.x + 5
  }
}


function keyPressed(){

if(keyCode === 32){

  acidRaining = true; 
}

}

function spawnAcidRain(){
  if(acidRaining === true){

  acidrain = createSprite(random(0,1400),0,5,5);
  acidrain.lifetime = 63 
  acidrain.addImage(acidImg);
  acidrain.scale=0.02
  acidGroup.add(acidrain);
  acidGroup.collide(box1);
  acidGroup.collide(box2);
  acidGroup.collide(box3);
  acidGroup.collide(box4);
  acidGroup.collide(box5);
  }
  
}