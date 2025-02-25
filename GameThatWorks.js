/*******************************************************/
// P5.play: t01_create_sprite
// Create a sprite
/// Written by ???
/*******************************************************/

var Score = 0;
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
	cnv = new Canvas (1000,1000);
	circle = new Sprite(width/2, height/2, 80, 'd');
	circle.color = 'cyan';
    world.gravity.y = 10;
// wall sprites
    wallLH  = new Sprite(0, 1000, 8, 2000, 'k');
	wallLH.color = 'black';
    wallLH.bounciness = 1;
	wallRH  = new Sprite(1000, 0, 8, 2000, 'k');
	wallRH.color = 'green';
    wallRH.bounciness = 1;
	wallTop = new Sprite(0, 1, 2000, 8, 'k');
	wallTop.color = 'red';
    wallTop.bounciness = 1;
	wallBot = new Sprite(0, 999, 2000, 8, 'k');
	wallBot.color = 'blue';
    wallBot.bounciness = 1;
    Coins();
}

function displayScore(){
textSize(35);
text("Score:"+Score ,50, 35);

}
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('gray');

    circle.moveTowards(mouseX, mouseY, 1);
    if (mouse.presses()) {
    cirlce.moveTo(xPos, yPos, 100);
   
    
    }
    textSize(35);
    text("Timer:"+ Math.floor(millis()/1000 ), 50, 70);
    fill('green');

    displayScore();
    
}

function Coins() {
    coinGroup = new Group();

	for (i = 0; i < 80; i++) {

		coin = new Sprite(900*Math.random(), 900*Math.random(), 20, 'd');
	  
		coin.vel.x = 3;
	  
		coin.vel.y = 4;
	  
		coin.bounciness = 1;
	  
		coin.friction = 0;

        coin.color = 'gold'

		coinGroup.add(coin);
	}

	// if any alien in alien group colides with rectangle call func2call
	coinGroup.collides(circle, func2call);

	function func2call(coin, circle) {
		// Delete the coin that gets hit
		coin.remove();
        Score++;
    }
}
/*******************************************************/
//  END OF APP
/*******************************************************/