var player
var grass
var box
var boxImg
var boxesGroup
var acidrain
var acidGroup
var acidImg
var acidRaining=false
var gameover
var life, lifeImg, livesleft=3
var bgimg
 
function setup() {
  createCanvas(1350,1000);
  //objects creation

  player = createSprite(250, 200, 25, 45);
  player.shapeColor = "blue";
  grass = createSprite(400, 1000, 2000, 565);
  grass.shapeColor = "green";
  box1 = createSprite(700,0,50,50);
  box1.shapeColor = "tan";
  box2 = createSprite(600,0,50,50);
  box2.shapeColor = "tan";
  box3 = createSprite(120,0,90,90);
  box3.shapeColor = "tan";
  box4 = createSprite(987,0,90,90);
  box5 = createSprite(987,-50,90,90);
  box6 = createSprite(1007,0,90,90);
  life = createSprite(1300,50,90,90);

  //livesleft = 2
  //Group creation
  boxesGroup = createGroup();
  boxesGroup.add(box1);
  boxesGroup.add(box2);
  boxesGroup.add(box3);
  boxesGroup.add(box4);
  boxesGroup.add(box5);
  acidGroup = createGroup();
}

function preload(){
  bgimg = loadImage("Sunny.jpg");
  //acidRaining = false
  boxImg = loadImage("Block.jpg");
  lifeImg = loadImage("Life.png");
  acidImg = loadImage("Acid.png");
}

function draw() {
  background(bgimg);  
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
  box6.addImage(boxImg);
  box6.scale = 0.1
  life.addImage(lifeImg)
  life.scale = 0.15

  //give initial velocity to objects
  player.velocityY = player.velocityY+1
  box1.velocityY= box1.velocityY+1
  box2.velocityY= box2.velocityY+1
  box3.velocityY= box3.velocityY+1
  box4.velocityY= box4.velocityY+1
  box5.velocityY= box5.velocityY+1
  box6.velocityY= box6.velocityY+1

  fill(255);
  textSize(25);
  text(livesleft,1293,37,90,90)
  stroke("green");
  fill("lime");
  text("SHELTER SURVIVAL",625,800)
  text("FROM ACID RAIN",635,835)

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
  box6.collide(box1);
  box6.collide(box2);
  box6.collide(box3);
  box6.collide(box4);
  box6.collide(box5);
  box6.collide(grass);
  box6.collide(player);
  
  spawnAcidRain();
  acidGroup.setVelocityYEach(12);

  if(acidRaining === false){
    stroke("green");
    fill("lime");
    textSize(25);
    text("(Press Space To Start Acid Rain)",560,750)
  }
 //lives calculation
  if(acidGroup.isTouching(player)){
    livesleft = livesleft-1
    acidGroup.destroyEach();
    if(livesleft === 0){
      gameover = true
      player.y = 5555;
    }
  }
//player controls
  if(player.y > 694){
    if(keyDown("UP_ARROW")){
      player.velocityY = -15
    }
  }
  if(keyDown("LEFT_ARROW")){
    player.x = player.x - 7
  }
  if(keyDown("RIGHT_ARROW")){
    player.x = player.x + 7
  }
  //END STATE OF GAME
  if(gameover === true){
    stroke("black");
    fill("red");
    textSize(35);
    text("GAME OVER",675,400,90,90)
    
    acidRaining = false
  } 
}

function keyPressed(){
if(keyCode === 32){
  bgimg = loadImage("cloudy.jpg");
  acidRaining = true; 
//for(var i=0;i<2;i++){
  spawnAcidRain();
//}
}
}

function spawnAcidRain(){
  if(acidRaining === true){
    for(var i=0;i<2;i++){
      acidrain = createSprite(random(0,1400),random(-5,0),5,5);
      acidrain.lifetime = 63 
      acidrain.addImage(acidImg);
      acidrain.scale=0.02
      acidGroup.add(acidrain);
      acidGroup.collide(box1);
      acidGroup.collide(box2);
      acidGroup.collide(box3);
      acidGroup.collide(box4);
      acidGroup.collide(box5);
      acidGroup.collide(box6);
      if(frameCount % 2 ===0){
      stroke("red");
      fill("maroon");
      textSize(25)
      text("Warning: Acid Rain",655,100);
    }
  }
}
}