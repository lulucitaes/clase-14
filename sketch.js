var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var obstacle1;
var obstacle2;
var obstacle3;
var obstacle4;
var obstacle5;
var obstacle6;


function preload() {
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  trex_collided = loadImage("trex_collided.png");
  obstacle1 = loadImage("obstacle1.png");
  obstacle2 = loadImage("obstacle2.png");
  obstacle3 = loadImage("obstacle3.png");
  obstacle4 = loadImage("obstacle4.png");
  obstacle5 = loadImage("obstacle5.png");
  obstacle6 = loadImage("obstacle6.png");
  groundImage = loadImage("ground2.png")

}

function setup() {
createCanvas(600, 200);

//crear sprite de Trex
trex = createSprite(50,160,20,50);
trex.addAnimation("running", trex_running);
trex.scale = 0.5;
  
//crear sprite de suelo
ground = createSprite(200,180,400,20);
ground.addImage("ground",groundImage);
ground.x = ground.width /2;
ground.velocityX = -4;
 
//suelo invisible
invisibleGround=createSprite(200,190,400,10);
invisibleGround.visible=false;
}

function draw() {
background(220);
console.log(trex.y);
obstaculos();
nubes();
//hacer que el Trex salte al presionar la barra espaciadora
if (keyDown("space")&& trex.y>161) {
  trex.velocityY = -10;
}

trex.velocityY = trex.velocityY + 0.8

if (ground.x < 0) {
  ground.x = ground.width / 2;
}

trex.collide(invisibleGround);
drawSprites();
}
function nubes(){
  if (frameCount % 60 === 0) { cloud = createSprite(600,100,40,10);
     cloud.y = Math.round(random(10,60));
      cloud.addImage(cloudImage); 
      cloud.scale = 0.5;
       cloud.velocityX = -3;
        //asignar lifetime a la variable cloud.lifetime = 200; //ajustar la profundidad cloud.depth = trex.depth; trex.depth = trex.depth + 1; }

  
}
}
function obstaculos(){
  if (frameCount%60==0){
    var obstaculos=createSprites(600,165,10,40);
    obstaculos.velocityX=-6;
    var rand=Math.round(random(1,6));
    switch (rand) {
      case 1: obstaculos.addImage(obstacle1);
      break;
      case 2: obstaculos.addImage(obstacle2); 
        break;
        case 3:obstaculos.addImage(obstacle3);
        break;
        case 4: obstaculos.addImage(obstacle4);
      break;
      case 5: obstaculos.addImage(obstacle5);
      break;
      case 6: obstaculos.addImage(obstacle6);
      break;
      
      default:
        break;
    }
  }
}