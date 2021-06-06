class Player {
    constructor() {
        this.index = null;
        this.name="";
        this.distance=0;
    }

    getCount() {
        database.ref("playerCount").on("value", (data) => {
            playerCount = data.val();
        });
    }

    updateCount(count) {
        database.ref("/").update ({
            playerCount : count
        });
    }

    getPlayerDetails() {
        database.ref("players").on("value", (data) => {
            allPlayersInfo = data.val();
        });
    }

    updatePlayerDetails() {
        database.ref("players/player"+this.index).update ({
            name : this.name,
            distance: this.distance
        });
    }
}