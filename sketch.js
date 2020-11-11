
var monkey , monkey_running;
var bananaImage, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;
var S_Time=0;
var gameState = "PLAY";

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)
  ground=createSprite(0,370,800,5)
  monkey = createSprite(30,370)
  monkey.addAnimation("Monkey_Running",monkey_running);
  monkey.scale=0.1
  obstacleGroup=createGroup();
  FoodGroup=createGroup();

  
}


function draw() {
  background("White")
  if(gameState==="PLAY"){
  ground.velocityX=-4;
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  if(keyDown("space")&& monkey.y>=300){
    monkey.velocityY=-20;
  }
  monkey.velocityY=monkey.velocityY+1;
  monkey.collide(ground);
  S_Time=S_Time+Math.round(getFrameRate()/60);
  fill("Blue")
  textSize(18)
  text("Survival Time : "+S_Time,150,20)
  banana();
  obstacle();
  }
 drawSprites();

  
}
function banana(){
  if(frameCount%80===0){
    var banana = createSprite(400,Math.round(random(120,200)))
    banana.addImage("Food",bananaImage)
    banana.scale=0.1;
    banana.velocityX=-4;
    banana.lifetime=127;
    FoodGroup.add(banana);
  }
}

function obstacle(){
  if(frameCount%300===0){
    var obstacle = createSprite(400,330)
    obstacle.addImage("Rock",obstacleImage)
    obstacle.scale=0.2;
    obstacle.lifetime=110;
    obstacle.velocityX=-4;
    obstacleGroup.add(obstacle);
    
  }
}






