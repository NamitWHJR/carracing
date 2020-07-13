class Game{
    constructor(){}

    getState(){
        var stateRef = database.ref("gameState")
        stateRef.on("value",function(data){
            gameState = data.val()
        })
    }
    
    update(state){
    database.ref("/").update({
        gameState:state
    })
    }

    start(){
        if (gameState == 0){
            player = new Player()
            player.getCount()
            form = new Form()
            form.display();
        }

        car1 = createSprite(100,200);
        car2 = createSprite(300,200);
        car3 = createSprite(500,200);
        car4 = createSprite(700,200);

        car1.addImage(car1Image)
        car2.addImage(car2Image)
        car3.addImage(car3Image)
        car4.addImage(car4Image)

        cars = [car1,car2,car3,car4]
        

    }

play(){
    form.hide()
    textSize(30)
    text("Game Started",120,100)
   Player.getPlayerInfo()

if(allPlayers != undefined){

    background("#c68767");
    image(trackImage, 0, -displayHeight*9, displayWidth, displayHeight*10)

    //var displayPosition = 130 

    var index = 0

    var x = 250

    var y = 0    


    for(var plr in allPlayers){

        index = index + 1

        x = x + 280

        y = displayHeight - allPlayers[plr].distance

        cars[index - 1].x = x
        cars[index - 1].y = y

        if (index == player.index){
            //cars[index - 1].shapeColor = "blue"
        strokeWeight(4)            
            stroke("green")
            fill("Red")

            ellipse(x,y,80,80)


            camera.position.x = displayWidth/2
            camera.position.y = cars[index - 1].y

        }

        else{
            cars[index - 1].shapeColor = "red"
        }



        //displayPosition = displayPosition + 30

        //text(allPlayers[plr].name + ":" + allPlayers[plr].distance,120,displayPosition)

    }


}

if(keyIsDown(UP_ARROW) && player.index != null){
    player.distance = player.distance + 20
    player.update()

    console.log(player.distance);

}


if(player.distance > 10450){
    gameState = 2


}

    drawSprites()

}

end(){

    console.log("game ended")
        game.update(2)
}


}