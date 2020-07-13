class Player{
    constructor(){

this.index = null
this.name = null
this.distance = 0

    }

getCount(){
    var countRef = database.ref("playerCount")
    countRef.on("value",function(data){
        playerCount = data.val()
    })
}

updateCount(count){
database.ref("/").update({
    playerCount:count
})
}

update(){
    var playerIndex = "players/player" + this.index
    database.ref(playerIndex).set({
        name:this.name,
        distance:this.distance
    })
}

static getPlayerInfo(){
    var playerRef = database.ref("players")
    playerRef.on("value",(data) => {

        allPlayers = data.val()
    
    })
}

}