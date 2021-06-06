class Form {
    constructor() {
        this.input=createInput("Name");
        this.button=createButton("Play");
        this.heading=createElement("H1");
    }



    display() {
        this.input.position(displayWidth/2-40,displayHeight/2-80); //1. 
        this.button.position(displayWidth/2+30,displayHeight/2); //2. 
        this.heading.html("Car Race");
        this.heading.position(displayWidth/2-50,0); //3. 

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            this.welcomeMessage=createElement("H1");
            this.welcomeMessage.html("Welcome "+this.input.value());
            this.welcomeMessage.position(200,100);
            playerCount=playerCount+1;
            player.updateCount(playerCount);
            player.name=this.input.value();
            player.index=playerCount;
            player.updatePlayerDetails();
        });
    }
}