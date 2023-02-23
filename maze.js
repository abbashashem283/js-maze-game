var start = document.getElementById("start")
var end = document.getElementById("end")
var status_prompt = document.getElementById("status")
var boundaries = document.getElementsByClassName("boundary")
var game_container = document.getElementById("game")
var score_board = document.getElementsByClassName("example")[0]


var game_state = "initial"
var player_x , player_y, crossed_area=false;
var score = 0;

function setScore(s){
    s = (s<0)?0:s
    console.log(score_board)
    score = s;
    score_board.innerHTML = "<h2>"+score+"</h2>"
}

setScore(0)

//styling
function setBorders(color){
    boundaries[0].style.borderRightColor = color;
    boundaries[0].style.borderBottomColor = color;
    boundaries[1].style.borderBottomColor = color;
    boundaries[2].style.borderLeftColor = color;
    boundaries[2].style.borderBottomColor = color;
    boundaries[3].style.borderTopColor = color;
    boundaries[4].style.borderRightColor = color;
    boundaries[4].style.borderTopColor = color;
    boundaries[4].style.borderLeftColor = color;
}


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

function resetPosition(){
    player_x = 0
    player_y = 0
}

function setupRound(){
    game_state = "set"
    crossed_area = false
    status_prompt.innerText = "Don't Touch the Lines!!!"
    setBorders("black")
}

function startRound(){
    crossed_area = false
    resetPosition()
    game_state = "started"
}

function winGame(){
    if(game_state == "started"){
        console.log("you win!!!")
        game_state = "finished"
        status_prompt.innerText = "YOU WIN!!!"
        setScore(score + 10)
        crossed_area = false
    }
}

function looseGame(){
    console.log("dead")
    game_state = "over" ;
    status_prompt.innerText = "YOU LOOSE!"
    setBorders("red")
    setScore(score - 10)
    crossed_area = false;
}

function haltGame(){
    if(game_state == "set" || game_state == "started"){ 
        game_state = "suspended"
        status_prompt.innerText = "ILLEGAL EXIT! Go back to S to restart";
    }
}


function resetGame(){
    game_state == "initial"
    crossed_area = false
    setScore(0)
    setBorders("black")
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


game_container.addEventListener("mouseleave" , haltGame)


start.addEventListener( "mouseenter" , setupRound)

start.addEventListener( "mouseleave" , startRound)

start.addEventListener("click" , resetGame)


end.addEventListener("mouseenter" , winGame)





