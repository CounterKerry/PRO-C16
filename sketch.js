// Variáveis

var bow, bow_image;
var arrow, arrow_image;
var backGround, backGround_image;
var pinkBalloon, pinkBalloon_image;
var greenBalloon, greenBalloon_image;
var blueBalloon, blueBalloon_image;
var redBalloon, redBalloon_image;
var rand
var gameState
var PLAY
var END
var score

function preload() {
// Carregar imagens
  
  bow_image = loadImage("bow0.png");
  arrow_image = loadImage("arrow0.png");
  backGround_image = loadImage("background0.png");
  pinkBalloon_image = loadImage("pink_balloon0.png");
  greenBalloon_image = loadImage("green_balloon0.png");
  blueBalloon_image = loadImage("blue_Balloon0.png");
  redBalloon_image = loadImage("red_balloon0.png");
}

function setup() {
  createCanvas(400, 400);

  gameState = PLAY;

  score = 0;

// Criando fundo

  backGround = createSprite(200, 200, 400, 400),
  backGround.addImage(backGround_image);
  backGround.scale = 1;
// Criando arco

  bow = createSprite(360, 200, 20, 50);
  bow.addImage(bow_image);
  bow.scale = 1.2;  

  pinkBalloonGroup = new Group();
  greenBalloonGroup = new Group();
  blueBalloonGroup = new Group();
  redBalloonGroup = new Group();
}

function draw() {
  background("white");

  if (gameState === PLAY) {
    
    bow.y = World.mouseY;

    if (keyDown("space")) {
      arrow = createSprite(0, 0, 40, 7);
      arrow.addImage(arrow_image);
      arrow.scale = 0.5;
      arrow.velocityX = -5;
      arrow.x = bow.x;
      arrow.y = bow.y;
      arrow.lifetime = 100;
    }
  
    if (frameCount%60 === 0) {
      
      rand = Math.round(random(1, 4));
      
      switch(rand)
      {
        case 1: spawnPinkBalloon();
        break;
        case 2: spawnGreenBalloon();
        break;
        case 3: spawnBlueBalloon();
        break;
        case 4: spawnRedBalloon();
        default:break;
      }
    }

    if (pinkBalloonGroup.isTouching(arrow)) {
      pinkBalloonGroup.destroyXEach;
      score = score +1;
    }
  
    if (greenBalloonGroup.isTouching(arrow)) {
      greenBalloonGroup.destroyXEach;
      score = score +1;
    }
  
    if (blueBalloonGroup.isTouching(arrow)) {
      blueBalloon.destroyXEach;
      score = score +1;
    }
  
    if (redBalloonGroup.isTouching(arrow)) {
      redBalloon.destroyXEach;
      score = score +1;
    }
    
    stroke("black");
    textSize(20);
    text("" + score, 100, 50);
  }

  else if(gameState === END) {

  }

  drawSprites();
}

function spawnPinkBalloon() {
  pinkBalloon = createSprite(0, 200, 50, 50);
  pinkBalloon.addImage(pinkBalloon_image);
  pinkBalloon.scale = 1.2;
  pinkBalloon.velocityX = 5;
  pinkBalloon.y = Math.round(random(50, 350));
  pinkBalloon.lifetime = 85;
  pinkBalloonGroup.add(pinkBalloon);
}

function spawnGreenBalloon() {
  greenBalloon = createSprite(0, 200, 50, 50);
  greenBalloon.addImage(greenBalloon_image);
  greenBalloon.scale = 0.1;
  greenBalloon.velocityX = 5;
  greenBalloon.y = Math.round(random(50, 350));
  greenBalloon.lifetime = 85;
  greenBalloonGroup.add(greenBalloon);
}

function spawnBlueBalloon() {
  blueBalloon = createSprite(0, 200, 50, 50);
  blueBalloon.addImage(blueBalloon_image);
  blueBalloon.scale = 0.1;
  blueBalloon.velocityX = 5;
  blueBalloon.y = Math.round(random(50, 350));
  blueBalloon.lifetime = 85;
  blueBalloonGroup.add(blueBalloon);
}

function spawnRedBalloon() {
  redBalloon = createSprite(0, 200, 50, 50);
  redBalloon.addImage(redBalloon_image);
  redBalloon.scale = 0.1;
  redBalloon.velocityX = 5;
  redBalloon.y = Math.round(random(50, 350));
  redBalloon.lifetime = 85;
  redBalloonGroup.add(redBalloon);
}