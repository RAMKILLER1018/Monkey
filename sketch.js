var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score=0;
var survivalTime = 0;

function preload(){
  createCanvas(400,400);
  
  monkey_running=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("monkey_",monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
  FoodGroup = createGroup();
}


function draw() {
background("white")
  
  food();
  obstacles();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+survivalTime,100,50);
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY=-12;
  }
  
  monkey.velocityY= monkey.velocityY+0.8;
  
  monkey.collide(ground);
      
  drawSprites();
}

function food(){
  if(World.frameCount%80===0){
    banana = createSprite(400,120,5,5);
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.velocityX=-4;
    
    banana.y=Math.round(random(120,200));
    banana.lifetime=120;
    
    FoodGroup.add(banana);
  }
}

function obstacles(){
  if(World.frameCount%300===0){
    obstacle = createSprite(400,330,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.1;
    obstacle.velocityX=-4;
    obstacle.lifetime=120;
  }
}
