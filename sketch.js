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
var WideboxImg
var goal, goalImg, goalGroup
var winnertxt=false
var playerImg
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
  box7 = createSprite(800,0,120,120);
  box8 = createSprite(350,0,12,12);
  box9 = createSprite(650,0,12,12);
  life = createSprite(1300,50,90,90);

  //livesleft = 2
  //Group creation
  boxesGroup = createGroup();
  boxesGroup.add(box1);
  boxesGroup.add(box2);
  boxesGroup.add(box3);
  boxesGroup.add(box4);
  boxesGroup.add(box5);
  boxesGroup.add(box6);
  boxesGroup.add(box7);
  boxesGroup.add(box8);
  boxesGroup.add(box9);
  acidGroup = createGroup();
  goalGroup = createGroup();
}

function preload(){
  bgimg = loadImage("Sunny.jpg");
  //acidRaining = false
  boxImg = loadImage("Block.jpg");
  WideboxImg = loadImage("WideBlock.jpg");
  lifeImg = loadImage("Life.png");
  acidImg = loadImage("Acid.png");
  goalImg = loadImage("goal.png");
  playerImg = loadImage("YOU.png");
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
  box7.addImage(WideboxImg);
  box7.scale = 0.3
  life.addImage(lifeImg)
  life.scale = 0.15
  box8.addImage(boxImg);
  box8.scale = 0.1
  box9.addImage(boxImg);
  box9.scale = 0.1
  player.addImage(playerImg);
  player.scale = 0.2

  //give initial velocity to objects
  player.velocityY = player.velocityY+1
  box1.velocityY= box1.velocityY+1
  box2.velocityY= box2.velocityY+1
  box3.velocityY= box3.velocityY+1
  box4.velocityY= box4.velocityY+1
  box5.velocityY= box5.velocityY+1
  box6.velocityY= box6.velocityY+1
  box7.velocityY= box7.velocityY+1
  box8.velocityY= box8.velocityY+1
  box9.velocityY= box9.velocityY+1

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
  box7.collide(box6);
  box7.collide(box1);
  box7.collide(box2);
  box7.collide(box3);
  box7.collide(box4);
  box7.collide(box5);
  box7.collide(grass);
  box7.collide(player);
  box8.collide(box7);
  box8.collide(box6);
  box8.collide(box1);
  box8.collide(box2);
  box8.collide(box3);
  box8.collide(box4);
  box8.collide(box5);
  box8.collide(grass);
  box8.collide(player);
  box9.collide(box8);
  box9.collide(box7);
  box9.collide(box6);
  box9.collide(box1);
  box9.collide(box2);
  box9.collide(box3);
  box9.collide(box4);
  box9.collide(box5);
  box9.collide(grass);
  box9.collide(player);
  spawnGoal();
  spawnAcidRain();
  counterDiamond();
  acidGroup.setVelocityYEach(12);

  if(acidRaining === false){
    if(winnertxt === false){
    stroke("green");
    fill("lime");
    textSize(25);
    text("(Press Space To Start Acid Rain)",560,750)
    }
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
  if(player.y > 684){
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
    text("GAME OVER",645,400,355,90)
    textSize(20);
    text("Press space to restart",649  ,500,250,80);
    acidRaining = false
  } 



  if(goalGroup.isTouching(player)){
    acidRaining = false
    bgimg = loadImage("Sunny.jpg");
    winnertxt = true
  }

  if(winnertxt === true){
    stroke("black");
    fill("green");
    textSize(35);
    text("You did it!",605,400,250,90)
    textSize(15);
    text("The acid rain has finally stopped because of the diamond you collected!!",445,460,920,90)
    textSize(20);
    text("Press space to restart",605,500,250,80);
    acidGroup.destroyEach();
    goalGroup.destroyEach();
    livesleft = 3
  }

}

function keyPressed(){
if(keyCode === 32){
  if(gameover === true){
    acidGroup.destroyEach();
    goalGroup.destroyEach();
    livesleft = 3
    gameover = false
    player.y = 500;
    player.velocityY = 0;

  }
  bgimg = loadImage("cloudy.jpg");
  acidRaining = true; 
  winnertxt = false

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
      acidGroup.collide(box7);
      acidGroup.collide(box8);
      acidGroup.collide(box9);
      if(frameCount % 2 ===0){
      stroke("red");
      fill("maroon");
      textSize(25)
      text("Warning: Acid Rain",655,100);
    }
  }
}
}

function mouseDragged() {
  if(mouseIsOver(box1)){
    box1.position.x = mouseX;
    box1.position.y = mouseY;
    box1.velocityY = 0;
  }
  if(mouseIsOver(box2)){
    box2.position.x = mouseX;
    box2.position.y = mouseY;
    box2.velocityY = 0;
  }
  if(mouseIsOver(box3)){
    box3.position.x = mouseX;
    box3.position.y = mouseY;
    box3.velocityY = 0;
  }
  if(mouseIsOver(box4)){
    box4.position.x = mouseX;
    box4.position.y = mouseY;
    box4.velocityY = 0;
  }
  if(mouseIsOver(box5)){
    box5.position.x = mouseX;
    box5.position.y = mouseY;
    box5.velocityY = 0;
  }
  if(mouseIsOver(box6)){
    box6.position.x = mouseX;
    box6.position.y = mouseY;
    box6.velocityY = 0;
  }
  if(mouseIsOver(box7)){
    box7.position.x = mouseX;
    box7.position.y = mouseY;
    box7.velocityY = 0;
  }
  if(mouseIsOver(box8)){
    box8.position.x = mouseX;
    box8.position.y = mouseY;
    box8.velocityY = 0;
  }
  if(mouseIsOver(box9)){
    box9.position.x = mouseX;
    box9.position.y = mouseY;
    box9.velocityY = 0;
  }
}

function spawnGoal(){
  if(acidRaining === true){
    if(frameCount % 1000  === 0){
      goal = createSprite(random(100,1250), 0, 12, 12);
      goal.addImage(goalImg);
      goal.scale = 0.1;


      goalGroup.add(goal);

      goal.velocityY = 4
      
    }

  }
}

function counterDiamond(){
  if(goalGroup.isTouching(box1)){
    goalGroup.destroyEach();
  }
  if(goalGroup.isTouching(box2)){
    goalGroup.destroyEach();
  }
  if(goalGroup.isTouching(box3)){
    goalGroup.destroyEach();
  }
  if(goalGroup.isTouching(box4)){
    goalGroup.destroyEach();
  }
  if(goalGroup.isTouching(box5)){
    goalGroup.destroyEach();
  }
  if(goalGroup.isTouching(box6)){
    goalGroup.destroyEach();
  }
  if(goalGroup.isTouching(box7)){
    goalGroup.destroyEach();
  }
  if(goalGroup.isTouching(box8)){
    goalGroup.destroyEach();
  }
  if(goalGroup.isTouching(grass)){
    goalGroup.destroyEach();
  }
  if(goalGroup.isTouching(box9)){
    goalGroup.destroyEach();
  }

}