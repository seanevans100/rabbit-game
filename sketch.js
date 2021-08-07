var garden,rabbit;
var gardenImg,rabbitImg;
var apple;
var appleImg;
var leaf;
var leafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
  leafImg = loadImage("leaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}
function createApple(){
  // add apple
apple = createSprite(random(50,350),40,10,10);
apple.addImage(appleImg);
apple.scale = 0.1;
apple.velocityY = +5;
if(apple.isTouching(rabbit)){
  apple.destroy();
}
if(apple.isTouching(bottomEdge)){
  text("game is over!",250,250);
 }
}
function createLeaf(){
  //add leaf
leaf = createtSprite(random(50,350),40,10,10);
leafe.addImage(leafImg);
leaf.scale = 0.1;
leaf.velocityY = +5;
if(leaf.isTouching(bottomEdge)){
  leaf.destroy();
}
if(leaf.isTouching(rabbit)){
  text("game is over!",250,250);
}
}
function draw() {
  background(0);
  rabbit.x = World.mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);
  drawSprites();
  var select_sprites = Math.round(random(1,2));
  if(frameCount%80===0){
    if(select_sprites==1){
      createApple();
    }
    else{
      createLeaf();
    }
  }
}