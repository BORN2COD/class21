
var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";

  rect3 = createSprite(500,300,50,50);

  rect4 = createSprite(300,100,50,50);
  
}

function draw() {
  background("yellow");  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,rect3)){
    movingRect.shapeColor = "blue";
    rect3.shapeColor = "blue";
  }
  
   else if (isTouching ( movingRect,rect4)){
     movingRect.shapeColor = "blue"
     rect4.shapeColor = "blue"
   }else {
    movingRect.shapeColor = "green";
    rect4.shapeColor = "green"
    rect3.shapeColor = "green"
    fixedRect.shapeColor = "green"
  }
  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
//bounceOff(movingRect,fixedRect)
  drawSprites();
}

function isTouching(movingRect,fixedRect){
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2) {
    
    return true;
  }
  else {
    return false;
  } 
}


