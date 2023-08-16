var path,police,cash,diamonds,jwellery,bomb;
var pathImg,policeImg,cashImg,diamondsImg,jwelleryImg,bombImg;
var treasureCollection = 0;
var gameOver ;
var cashGroup,diamondsGroup,jwelleryGroup,bombGroup;


var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("Road.png");
  policeImg = loadAnimation("police.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  bombImg = loadImage("bomb.png");

}



function setup(){
  

 createCanvas(windowWidth,windowHeight);


path=createSprite(width/2,200);
path.addImage("road",pathImg);
path.velocityY = 4;


//creating boy running
police = createSprite(width/2,height-20,20,20);
police.addAnimation("PoliceRunning",policeImg);
police.scale=0.38;
  
  
cashGroup=new Group();
diamondsGroup=new Group();
jwelleryGroup=new Group();
bombGroup=new Group();

}

function draw() {

  if(gameState===PLAY){
  background(0);
  police.x = World.mouseX;
  
  edges = createEdgeSprites();
  police.collide(edges);
  

   if(path.y > height ){
     path.y = height/2;
   }
  
    createCash();
    createDiamonds();
    createJwellery();
    createbomb();

    if (cashGroup.isTouching(police)) {
      cashGroup.destroyEach();
      treasureCollection=treasureCollection + 100;

    }
    else if (diamondsGroup.isTouching(police)) {
      diamondsGroup.destroyEach();
      treasureCollection=treasureCollection + 200;
      
    }else if(jwelleryGroup.isTouching(police)) {
      jwelleryGroup.destroyEach();
      treasureCollection= treasureCollection + 150;
      
    }else{
      if(bombGroup.isTouching(police)) {
        gameState=END;
      
       
        police.x=width/2;
        police.y=height/2;
        police.scale=0.6;
        
        cashGroup.destroyEach();
        diamondsGroup.destroyEach();
        jwelleryGroup.destroyEach();
        bombGroup.destroyEach();
        
        cashGroup.setVelocityYEach(0);
        diamondsGroup.setVelocityYEach(0);
        jwelleryGroup.setVelocityYEach(0);
        bombGroup.setVelocityYEach(0);
     
    }
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("FINE : "+ treasureCollection,width-150,30);
  }

}

function createCash() {
  if (World.frameCount % 200 == 0) {
  var cash = createSprite(Math.round(random(50, width-50),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 5;
  cash.lifetime = 200;
  cashGroup.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 320 == 0) {
  var diamonds = createSprite(Math.round(random(50, width-50),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 5;
  diamonds.lifetime = 200;
  diamondsGroup.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 410 == 0) {
  var jwellery = createSprite(Math.round(random(50, width-50),40, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=0.13;
  jwellery.velocityY = 5;
  jwellery.lifetime = 200;
  jwelleryGroup.add(jwellery);
  }
}

function createbomb(){
  if (World.frameCount % 530 == 0) {
  var bomb = createSprite(Math.round(random(50, width-50),40, 10, 10));
  bomb.addImage(bombImg);
  bomb.scale=0.13;
  bomb.velocityY = 4;
  bomb.lifetime = 200;
  bombGroup.add(bomb);
  }
}