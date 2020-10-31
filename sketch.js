
var monkey, foodGroup, obstacleGroup
var banana, obstacle
var score, ground

function preload(){
  
  
  monkeyRunning =      loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
    
    foodGroup = new Group()
  
    obstacleGroup = new Group()
  
    createCanvas(600, 600)

    monkey = createSprite(100, 300, 10, 10)
    monkey.addAnimation("running", monkeyRunning)
    monkey.scale = 0.2
  
    ground = createSprite(100, 450, 650, 10)
    ground.x = ground.width /2;
  
    score = 0
}


function draw() {
    background("white")  
  
      if(frameCount%5 === 0){
        score=score+1
    }
       monkey.velocityY = monkey.velocityY + 0.8
      
    
  
       if(keyDown("space")&& monkey.y >= 50) {
        monkey.velocityY = -12;
    }

    text("Survival Time ="+ score, 200, 50)

    monkey.collide(ground)
  
    drawSprites()

    makeBanana()
  
    makeObstacle()
}
function makeBanana(){
 
    if(frameCount%120 === 0){
      var num = Math.round(random(120,220))
      banana = createSprite(650, num, 10, 10)
      banana.lifetime = 200
      banana.velocityX = -6
      banana.addImage(bananaImage)
      banana.scale = 0.1
      foodGroup.add(banana)
    }
    }
function makeObstacle(){
    if(frameCount%150 === 0){
      obstacle = createSprite(650, 410, 10, 10)
      obstacle.lifetime = 200
      obstacle.velocityX = -6
      obstacle.addImage(obstacleImage)
      obstacle.scale = 0.2
      obstacleGroup.add(obstacle)
      
    }
}


