
var gameState="loading";
var game;
var loadingPng,groundPng;

function preload(){
loadingPng = loadImage("images/download.png")
groundPng = loadImage("images/stage-1.png")
}
function setup() {
  
  createCanvas(800,400);
  game= new Game()
}

var playButton;
var playButton2;
var boy,ground;


function draw() {
  background(255,255,255);  
  drawSprites();
  text(mouseX+","+mouseY,mouseX,mouseY)

   if (gameState==="loading") {
   	game.loading();
   }
   else if (gameState==="instruction") {
   	game.instruction();
   }

   else if (gameState==="play") {
    game.play();
   }
   function keyPressed() {
    if (keyCode===32) {
      boy.velocityY = -10
    }
     // body...
   }
}