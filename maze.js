var start = document.getElementById("start")
var status_prompt = document.getElementById("status")
var game_state = "initial"
var boundaries = document.getElementsByClassName("boundary")
var game_container = document.getElementById("game")


function notTouching1(x , y){
    return (x > 152 || y > 201)
}

function notTouching2(x , y){
    return (y < 235)
}

function notTouching3(x,y){
    return y > 50
}

function notTouching4(x,y){
    return (x < 192 || x > 301) || y < 85
}

function notTouching5(x,y){
    return (x < 340 && y < 200) || y>201
}

game_container.addEventListener("mousemove" , 
    function(e) {
        var x = e.offsetX;
        var y = e.offsetY;
        if(notTouching4(x,y)){
            console.log("nt "+x+","+y)
        }else{
            console.log("t "+x+","+y)
        }
    }
)


start.addEventListener( "mouseenter" , 
  function(){  
     game_state = "started"
  }
)





