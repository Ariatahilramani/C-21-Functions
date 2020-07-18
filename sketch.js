var fixedRec, movingRec;

var gameObject1, gameObject2;

function setup() {
  createCanvas(800,400);
  fixedRec=createSprite(400, 200, 50, 50);
  movingRec=createSprite(400,200,50,50);

  gameObject1=createSprite(100,200,80,70);
  gameObject1.shapeColor="green";
  gameObject1.velocityX=2;

  gameObject2=createSprite(700,200,80,70);
  gameObject2.shapeColor="green";
  gameObject2.velocityX=-2;



  movingRec.shapeColor="green";
  fixedRec.shapeColor="green";
}

function draw() {
  background(255,255,255);  

  movingRec.x=mouseX;
  movingRec.y=mouseY;

  if(isTouching(movingRec,gameObject1)){
    movingRec.shapeColor="red";
    gameObject1.shapeColor="red";
  }
  else{
  movingRec.shapeColor="green";
  gameObject1.shapeColor="green";
  }

  bounceOff(gameObject1,gameObject2);
  

  
  drawSprites();
}

