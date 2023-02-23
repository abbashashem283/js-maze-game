var start = document.getElementById("start")
var status_prompt = document.getElementById("status")
var game_state = "initial"
var boundaries = document.getElementsByClassName("boundary")
var game_container = document.getElementById("game")

var playerX , playerY


function notTouching1(){
    return (playerX > 152 || playerY > 201)
}

function notTouching2(){
    return (playerY < 235)
}

function notTouching3(){
    return playerY > 50
}

function notTouching4(){
    return (playerX < 192 || playerX > 301) || playerY < 85
}

function notTouching5(){
    return (playerX < 340 && playerX < 200) || playerY > 201
}



game_container.addEventListener("mousemove" , 
    function(e) {
        playerX = e.offsetX;
        playerY = e.offsetY;
        if(notTouching2()){
            console.log("nt "+playerX+","+playerY)
        }else{
            console.log("t "+playerX+","+playerY)
        }
    }
)


start.addEventListener( "mouseenter" , 
  function(){  
     game_state = "started"
  }
)





