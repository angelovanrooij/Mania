var bool = new Boolean(false);
var LeftPosition = 100;
var circle = document.getElementById("circle-hit");
var circlefit = document.getElementById("circle-fit");
var lane1 = 100;
var lane2 = 300;
var score = 0;
var lane;
var moveby;
var interval;

function CheckButton() {
    if (bool == false) {
        bool = true;
    } else {
        bool = false;
        ResetGame();
    }
    Timer();
    console.log(bool);
}

function ChangePosition() {
    if (LeftPosition >= 600) {
        debugger;
        if (circle.offsetTop != circlefit.offsetTop) {
            GameOver();
            ResetGame();
            //moest zo anders telt ie weer 1 op als je game over bent
            score = -1;
        }
        score++;
        LeftPosition = 100
        ResetPosition();
        RandomLane();
        document.getElementById("score").innerHTML = "Score: " + score;
    } else {
        LeftPosition++;
        circle.style.left = LeftPosition + "px";
    }
}

function Timer() {
    if (bool == true) {
        //setInterval(function() {ChangePosition()}, 5)
        interval = setInterval(ChangePosition, 5);

    } else if (bool == false) {
        ResetPosition();
        clearInterval(interval);
    }
}
//lane 1 is 100, 2 is 300
function MoveCircle(key) {

    switch (key.code) {
        case "ArrowDown":
            circlefit.style.top = lane2 + "px";
            break;
        case "ArrowUp":
            circlefit.style.top = lane1 + "px";
            break;
    }
}

window.onkeydown = function (e) {
    MoveCircle(e);
}

function ResetPosition() {
    circle.style.left = LeftPosition + "px";
}

function GameOver() {
    alert("Game over");
    ResetGame();
}

function RandomLane() {
    lane = Math.floor(Math.random() * 2);
    console.log(lane);
    if (lane == 0) {
        circle.style.top = 100 + "px";
    } else if (lane == 1) {
        circle.style.top = 300 + "px";
    }
}

function ResetGame() {
    bool = false;
    score = 0;
    LeftPosition = 100;
    clearInterval(interval);
    document.getElementById("score").innerHTML = "Score: " + score;
}