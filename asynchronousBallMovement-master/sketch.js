var ball;
var sketch;
var anything;
function setup(){
    createCanvas(500,500);
    sketch = firebase.database();
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    sketch.ref("ball/position").on("value",readPosition)

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(a,b){
    sketch.ref("ball/position").update(
        {
            "x":anything.x+a,
            "y":anything.y+b
        }
    );
}

function readPosition(position){
    anything=position.val();
    ball.x =anything.x;
    ball.y =anything.y;
}