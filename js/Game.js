class Game {
    constructor() {}

    getState() {
        database.ref("gameState").on("value", (data) => {
            gameState = data.val();
            
        });
    }

    updateState(state) {
        database.ref("/").update ({
            gameState : state
        });
    }

    async start() {
        if (gameState === 0) {
            player = new Player();
            var playerCountRef = await database.ref("playerCount").once("value");
            if (playerCountRef.exists()) {
                player.getCount();
            }
            form = new Form();
            form.display();

            car1 = createSprite(100, 200);
            car2 = createSprite(300, 200);
            car3 = createSprite(500, 200);
            car4 = createSprite(700, 200);
            cars = [car1, car2, car3, car4]
            
        }
    }

    play() {
        textSize(40);
        text ("game start", 100,100);

        player.getPlayerDetails();
        //var y=200; 3.
        if(allPlayersInfo!==undefined){
            background('white'); // 1.
            drawSprites();       // 2. 
    /* 3.
            for (var plr in allPlayersInfo) {
                if ("player"+player.index === plr) {
                    fill("red");
                } else {
                    fill("black");
                }

                text (allPlayersInfo[plr].name + " " +allPlayersInfo[plr].distance, 200, y);
                y=y+20;
            }
    */
            //4. 
            for(var i=1;i<=playerCount;i++){
                var playerIndex="player"+i;
                y=displayHeight-allPlayersInfo[playerIndex].distance;
                cars[i-1].y=y;
                if(i===player.index){
                    cars[i-1].shapeColor="red";
                    camera.position.x=cars[i-1].x;
                    camera.position.y=cars[i-1].y;
                } else{ }
            }
        }    
        if(keyIsDown(UP_ARROW)) {
            player.distance = player.distance + 50;
            player.updatePlayerDetails();
        }
    }
}