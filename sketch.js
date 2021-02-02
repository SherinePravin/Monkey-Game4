var monkey;
var monkey_running;
var banana;
var bananaImage;
var obstacle;
var obstacleImage;
var FoodGroup;
var obstacleGroup;
var score;
var ground;

function preload(){
monkey_running =         loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")

bananaImage = loadImage("banana.png");
obstacleImage = loadImage("obstacle.png");
}

function setup() { 
createCanvas(600, 600);
     
monkey=createSprite(80,500,20,20)
monkey.addAnimation("running", monkey_running);
monkey.scale=0.2; 

ground=createSprite(400,560,900,10);
ground.velocityX=-4;
ground.x=ground.width/2
console.log(ground.x);

}
function draw() {
background(225);

if(ground.x>0){
ground.x=ground.width/2;
}

if(keyDown("space")){
monkey.velocityY = -12; 
}

monkey.velocityY = monkey.velocityY + 0.8;
monkey.collide(ground);

spawnObstacles();
spawnBananas();
  
drawSprites();
}


function spawnObstacles(){
if(frameCount%80===0){
var obstacle= createSprite(600,520,10,40);
var rand =Math.round(random(1,7));
obstacle.addImage(obstacleImage);
obstacle.scale = 0.2;
obstacle.velocityX=-4;
obstacle.lifetime = 300;
}
}

function spawnBananas(){
if(frameCount%80===0){
 var bananas= createSprite(600,120,40,10);
var rand = Math.round(random(80,120));
bananas.addImage(bananaImage);
bananas.scale = 0.2;
bananas.velocityX=-6;
bananas.lifetime = 300;
}
}


