var fixedRect,movingRect;

function setup() {
  createCanvas(1200,800);
fixedRect = createSprite(400,400,50,100);
movingRect = createSprite(600,400,100,50);

fixedRect.shapeColor = "blue";
movingRect.shapeColor = "blue";
}

function draw() {
  background(0); 
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  if(movingRect.width/2 + fixedRect.width/2 > movingRect.x - fixedRect.x &&
    movingRect.width/2 + fixedRect.width/2 > fixedRect.x - movingRect.x &&

    movingRect.height/2 + fixedRect.height/2 > movingRect.y - fixedRect.y &&
    movingRect.height/2 + fixedRect.height/2 > fixedRect.y - movingRect.y){
    fixedRect.shapeColor = "white";
    movingRect.shapeColor = "white";
  } 

  else{
    fixedRect.shapeColor = "blue";
movingRect.shapeColor = "blue";
  }
 drawSprites();
}