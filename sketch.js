const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backImg, backgroundImg, craft1Img, spaceCraft,spaceCraft1, bombImg, bomb, explosionImg, playImg;
var bombGroup, gameState, craft2Img,craft3Img,craft4Img, finishImg, finish, homeP, homeImg, playB, boomS;
var clickS, explosion1Img;
var level = 1;
var finishGroup;

function preload(){
    backImg = loadImage("images/background.jpg");
    craft1Img = loadImage("images/craft1.png");
    bombImg = loadImage("images/bomb.png");
    explosionImg = loadImage("images/explosion.png");
    explosion1Img = loadImage("images/explosion.png");
    craft2Img = loadImage("images/craft2.png");
    craft3Img = loadImage("images/craft3.png");
    craft4Img = loadImage("images/craft4.png");
    finishImg = loadImage("images/finish.png");
    playImg = loadImage("images/play.png");
    homeImg = loadImage("images/homeP.jpg");
    boomS = loadSound("sound/boom.wav");
    clickS = loadSound("sound/click.mp3");
}

function setup(){
    createCanvas(windowWidth/2.5, windowHeight-10);
    
backgroundImg = createSprite(windowWidth/4.4,height/2,100,100);
backgroundImg.addImage(backImg);
backgroundImg.velocityY = 10;

    spaceCraft = createSprite(width/2,600,100,100);
    spaceCraft.addImage(craft1Img);
    spaceCraft.scale = 0.4;
spaceCraft.addImage("2",craft2Img);
spaceCraft.addImage("3",craft3Img);
spaceCraft.addImage("4",craft4Img);
spaceCraft.addImage("explosion", explosionImg);
//spaceCraft.rotation = -90;
bombGroup = new Group();
finishGroup = new Group(); 

homeP = createSprite(width/2,height/2,100,100);
homeP.addImage(homeImg);
//homeP.scale = 0.3;
playB = createSprite(width/2,height/2,100,100);
playB.addImage(playImg);
playB.scale = 0.5;

spaceCraft1 = createSprite(width/4.5,150,100,100);
spaceCraft1.addImage(craft1Img);
spaceCraft1.scale = 0.4;
spaceCraft1.rotation = 25;

spaceCraft2 = createSprite(width/1.3,150,100,100);
spaceCraft2.addImage(craft2Img);
spaceCraft2.scale = 0.6;
spaceCraft2.rotation = -25;

spaceCraft3 = createSprite(width/4.5,600,100,100);
spaceCraft3.addImage(craft3Img);
spaceCraft3.scale = 0.8;
spaceCraft3.rotation = 25;

spaceCraft4 = createSprite(width/1.3,600,100,100);
spaceCraft4.addImage(craft4Img);
spaceCraft4.scale = 0.6;
spaceCraft4.rotation = -25;
        
    }

function draw(){
    background("red");
    if(mousePressedOver(playB)){
        homeP.destroy();
        spaceCraft1.destroy();
        spaceCraft2.destroy();
        spaceCraft3.destroy();
        spaceCraft4.destroy();
        gameState = "play";
        clickS.play();
        playB.destroy();

    }

    if(gameState === "play" && level === 1){
        
        if(keyDown(LEFT_ARROW)){
            spaceCraft.x = spaceCraft.x-50;
        }
       
        if(keyDown(RIGHT_ARROW)){
            spaceCraft.x = spaceCraft.x+50;
        }
        if(backgroundImg.y > 700){
            backgroundImg.y = backgroundImg.height/5;
        }
        if(spaceCraft.x < 100){
            spaceCraft.x = 100;
        }
        if(spaceCraft.x > width - 100){
            spaceCraft.x = width - 100;
        }
        //clickS.stop();
       //clickS.destroy();
        spawnBomb();
        spawnFinish();
        if(finishGroup.isTouching(spaceCraft)){
            level = 2;
            console.log("level 1 ended")
        }
        if(bombGroup.isTouching(spaceCraft)){
            spaceCraft.changeAnimation("explosion");
            spaceCraft.scale = 1.5;
            boomS.play();
            //boomS.hide();
            //spaceCraft.scale = 1;
              // spaceCraft.changeImage( explosionImg);
            gameState = "end";
        }
        
    }

    if(gameState === "play" && level === 2){
        spaceCraft.changeImage("2")
        if(keyDown(LEFT_ARROW)){
            spaceCraft.x = spaceCraft.x-50;
        }
       
        if(keyDown(RIGHT_ARROW)){
            spaceCraft.x = spaceCraft.x+50;
        }
        if(backgroundImg.y > 700){
            backgroundImg.y = backgroundImg.height/5;
        }
        if(spaceCraft.x < 100){
            spaceCraft.x = 100;
        }
        if(spaceCraft.x > width - 100){
            spaceCraft.x = width - 100;
        }
        //clickS.stop();
       //clickS.destroy();
        spawnBomb();
        spawnFinish();
        if(bombGroup.isTouching(spaceCraft)){
            spaceCraft.changeAnimation("explosion");
            spaceCraft.scale = 1.5;
            boomS.play();
            //boomS.hide();
            //spaceCraft.scale = 1;
              // spaceCraft.changeImage( explosionImg);
            gameState = "end";
        }
        
    }
    else if(gameState === "end"){
        bombGroup.destroyEach();
        backgroundImg.velocityY = 0;
        
    }

    
    
    drawSprites();
}
    function spawnBomb(){
       if(frameCount %80 === 0){
        bomb = createSprite(random(100,width-50),0,100);
        bomb.addImage(bombImg);
        bomb.scale = 0.2;
        bomb.velocityY = 10;
        bomb.lifetime = 500;
        bombGroup.add(bomb);
       }    
    }
    function spawnFinish(){
        if(frameCount %100 === 0){
        finish = createSprite(width/2,height/7,150,100);
        finish.addImage(finishImg);
        finish.scale = 1.2;
        finish.lifetime = 500;
        finish.velocityY = 10;
        finishGroup.add(finish);





















        }
    }






