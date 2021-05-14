var storyMode
var FreePlay
var count=0

var backIMG,bluebackIMG

var storymodeyes,storymodeno

var freeplayyes,freeplayno

var gameState=0

var happymusic

function preload (){

happymusic = loadSound("sounds/gettingfreaky.mp3")

backIMG = loadImage("images/menuBG.png")

bluebackIMG = loadImage("images/menuBGBlue.png")

    storymodeno= loadAnimation("images/story mode animation 1.png","images/story mode animation 2.png","images/story mode animation 3.png")

storymodeyes= loadAnimation("images/selected story mode animation 1.png","images/selected story mode animation 2.png","images/selected story mode animation 3.png")

freeplayyes = loadAnimation("images/selected free play animation 1.png","images/selected free play animation 2.png","images/selected free play animation 3.png")

freeplayno = loadAnimation("images/freeplayanimation1.png","images/freeplayanimation2.png","images/freeplayanimation3.png")
}
function setup(){
createCanvas(1280,650)
storyMode=createSprite(640,210,20,20)
FreePlay=createSprite(640,400,20,20)
storyMode.addAnimation("animate",storymodeno)
storyMode.scale=0.7
FreePlay.addAnimation("animate",freeplayno)


}



function draw(){
    

drawSprites();

if(gameState===0){
    background(backIMG)
    drawSprites();


}

if (gameState===2){
    background(bluebackIMG)
     textSize(80)
     fill("yellow")
   text("text",200,210)
    text("text",200,310)
    text("text",200,410)
    text("text",200,510)

    function mousePressed(){
     

    }

}

}



function keyPressed(){

    
if(keyCode===38 && count===0){
    //storyMode.shapeColor="black"
    //FreePlay.shapeColor="grey"
    
    storyMode.addAnimation("animate",storymodeyes)
    storyMode.scale=0.9
    FreePlay.addAnimation("animate",freeplayno)
    count+=1


}

else if(keyCode===38 && count===1){
    
    storyMode.addAnimation("animate",storymodeno)
    storyMode.scale=0.7
    FreePlay.addAnimation("animate",freeplayyes)
    //storyMode.shapeColor="grey"
    //FreePlay.shapeColor="black"
    count=count-1
    


}

if(keyCode===13 && count===0){

    
    gameState=2
    
}

}


