
var gameState,game;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  gameState="instruction"
  game= new Game()
}

function draw() {
  background(255,255,255);  
  drawSprites();
   if (gameState==="loading") {
   	game.loading();
   }
   else if (gameState==="instruction") {
   	game.instruction();
   }
}