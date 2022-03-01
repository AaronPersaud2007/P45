var bg,bgImg;
var player, carImg;
var gasoline, gasolineImg, gasolineGroup

function preload(){
  
  carImg = loadImage("car.png")

  bgImg = loadImage("bg.png")
  gasolineImg = loadImage("gasoline.png")
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(600,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 3
  

//creating the player sprite
player = createSprite(300, displayHeight-300, 50, 50);
 player.addImage(carImg)
   player.setCollider("rectangle",0,0,300,300)


}

function creategasoline(){
  if (frameCount % 120 === 0){
    gasoline = createSprite(width/2 + 900,800, 30,30);
    gasoline.addImage(gasolineImg)
    gasoline.scale = 0.2
  }
}

function draw() {
  background(0); 




  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of car to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(car_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(carImg)
}

creategasoline();
drawSprites();

}
