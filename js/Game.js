class Game {
	constructor(){
  
	}
	loading(){
		text("loading page",400,200)
	 playButton = createSprite(450,210,50,50)
	 playButton.addImage(loadingPng)
		drawSprites();
		if (mousePressedOver(playButton)) {
        gameState="instruction";
        playButton.visible=false;
	}
}
	instruction(){
		text("welcome to earn to live",400,200)
		playButton.visible=false;
		}
	
	play(){

	}

}