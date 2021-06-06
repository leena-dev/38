var playerCount, database, gameState=0, allPlayersInfo;

var game, player, form;


var cars, car1, car2, car3, car4; //1.
var y=0; //2. 
function setup(){
  database = firebase.database();
  createCanvas(displayWidth-20, displayHeight-20); //3.

  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  background("white");
  if (playerCount === 4) {
    game.updateState(1);
    clear();
    game.play();
  }
}