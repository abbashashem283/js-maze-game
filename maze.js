var start = document.getElementById("start")
var end = document.getElementById("end")
var status_prompt = document.getElementById("status")
var boundaries = document.getElementsByClassName("boundary")
var game_container = document.getElementById("game")


var game_state = "initial"
var player_x , player_y, crossed_area=false;



function notTouching1(){
    return player_x > 152 || player_y > 201
}

function notTouching2(){
    return player_y < 235
}

function notTouching3(){
    return player_y > 50
}

function notTouching4(){
    return (player_x < 192 || player_x > 301) || player_y < 85
}

function notTouching5(){
    return  (player_x < 340 && crossed_area == false) || (crossed_area==false && player_y > 201)
}

function playerSafe(){
    return (notTouching1() && notTouching2() && notTouching3() 
             && notTouching4() && notTouching5())
}

function setCoordinates(x,y){
    if(Math.abs(player_x-x) > 50)
        crossed_area = !crossed_area;
    console.log("started"+crossed_area)    
    player_x = x;
    player_y = y;
}

function setupRound(){
    game_state = "set"
    crossed_area = false
    status_prompt.innerText = "Don't Touch the Lines!!!"
}

function startRound(){
    game_state = "started"
}

function winGame(){
    if(game_state == "started"){
        console.log("you win!!!")
        game_state = "finished"
        status_prompt.innerText = "YOU WIN!!!"
    }
}

function looseGame(){
    console.log("dead")
    game_state = "over" ;
    status_prompt.innerText = "YOU LOOSE!"
}

game_container.addEventListener("mousemove" , 
    function(e) {

        if(game_state == "started"){
            setCoordinates(e.offsetX , e.offsetY) //if game started only
            if(!playerSafe()){
                looseGame()
            }else{
                console.log("alive")
            }
        }
    }
)


start.addEventListener( "mouseenter" , 
  function(){  
     setupRound()
  }
)

start.addEventListener( "mouseleave" , 
  function(){  
     startRound()
  }
)


end.addEventListener("mouseenter" , 
  function(){
    winGame()
  }
)





