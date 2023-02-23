var start = document.getElementById("start")
var status_prompt = document.getElementById("status")
var game_state = "initial"
var boundaries = document.getElementsByClassName("boundary")
var game_container = document.getElementById("game")

var player_x , player_y, crossed_area=false;



function notTouching1(){
    console.log("1 nttt")
    return player_x > 152 || player_y > 201
}

function notTouching2(){
    console.log("2 nttt")
    return player_y < 235
}

function notTouching3(){
    console.log("3 nttt")
    return player_y > 50
}

function notTouching4(){
    console.log("4 nttt")
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
    player_x = x;
    player_y = y;
}

game_container.addEventListener("mousemove" , 
    function(e) {
        setCoordinates(e.offsetX , e.offsetY) //if game started only
        if(playerSafe()){
           console.log("alive")
        }else{
            console.log("dead")
        }
    }
)


start.addEventListener( "mouseenter" , 
  function(){  
     game_state = "started"
  }
)





