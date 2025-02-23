/*******************************************************/
// P5.play: t01_create_sprite
// Create a sprite
/// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
	cnv = new Canvas (1000,1000);
	circle = new Sprite(width/2, height/2, 50, 'd');
	circle.color = 'cyan';
    world.gravity.y = 10;
// wall sprites
    wallLH  = new Sprite(0, 1000, 8, 2000, 'k');

	wallLH.color = 'black';

	wallRH  = new Sprite(1000, 0, 8, 2000, 'k');

	wallRH.color = 'green';

	wallTop = new Sprite(0, 1, 2000, 8, 'k');

	wallTop.color = 'red';

	wallBot = new Sprite(0, 999, 2000, 8, 'k');

	wallBot.color = 'blue';

    for (i = 0; i < 100; i++) {

		alien = new Sprite(width/2, height/2, 10, 'd');
	  
		alien.vel.x = 3;
	  
		alien.vel.y = 4;
	  
		alien.bounciness = 10;
	  
		alien.friction = 0;

}
}
function displayScore(){
textSize(35);
text("Score",100, 35);
}
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('gray');

    if (kb.pressing('a')) {
        circle.vel.x = -5;
        // Set sprite's velocity to the left
    
    }
    else if (kb.pressing ('d')) {    
        circle.vel.x = 5;
        // Set sprite's velocity to the right
    }
    else if (kb.pressing ('w')) {
        circle.vel.y = -5;
        // set sprites velocity upwards
    }
    else if (kb.pressing ('s')){
        circle.vel.y = 5;
        //set sprites velocity downwards 
   
    
    }
    textSize(35);
    text(Math.floor(millis()/1000), 50, 35);
    fill('green');

    displayScore();
}
/*******************************************************/
//  END OF APP
/*******************************************************/