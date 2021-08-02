var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleImg
var orange, orangeImg


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png")
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


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x= mouseX
   console.log(frameCount);
  createApples();
  createLeaves();

 
  
  drawSprites();

}


function createApples() {
  if (frameCount % 70===0) {
    apple= createSprite(random(50,310),40,10,10)
  apple.addImage(appleImg)
  apple.scale= 0.09
  apple.velocityY=4
  
  }
  
  
}

function createLeaves() {
  if (frameCount % 140===0) {
    orange= createSprite(random(50,310),40,10,10)
  orange.addImage(orangeImg)
  orange.scale= 0.09
  orange.velocityY=8
  }
}

