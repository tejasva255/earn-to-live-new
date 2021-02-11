class Game {
	constructor(){
  
	}
	loading(){
		text("loading page",400,200)
	 playButton = createSprite(450,210,50,50)
	 playButton.addImage(loadingPng)
		
		if (mousePressedOver(playButton)) {
       gameState="instruction";
        playButton.visible=false;
	}
	else{
		playButton.visible=true;
	}
}
	instruction(){
		text("welcome to earn to live",400,200)
		playButton2 = createSprite(487,309,50,50)
        if(mousePressedOver(playButton2)){
 	    gameState="play"
         }
		playButton.visible=false;
		}
	
	play(){
    boy = createSprite(100,300,10,10)
    ground = createSprite(400,370,800,40)
    ground.velocityX=-4
    ground.x=ground.width/2 

	}

}