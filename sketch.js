const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backImg, backgroundImg, craft1Img, spaceCraft,spaceCraft1, bombImg, bomb, explosionImg, playImg;
var bombGroup, gameState = "start", craft2Img,craft3Img,craft4Img, finishImg, finish, homeP;
var homeImg, playB, boomS, feedback_img, feedback;
var clickS, explosion1Img, coinImg, coin, coinS;
var level = 1;
var finishGroup, CoinGroup;

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
    coinImg = loadImage("images/coin.png");
    feedback_img = loadImage("images/feedback1.jpg");
    boomS = loadSound("sound/boom.wav");
    clickS = loadSound("sound/click.mp3");
    coinS = loadSound("sound/coin.wav");

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
CoinGroup = new Group(); 

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

spaceCraft3 = createSprite(width/4,570,100,100);
spaceCraft3.addImage(craft3Img);
spaceCraft3.scale = 0.9;
spaceCraft3.rotation = 25;

spaceCraft4 = createSprite(width/1.3,570,100,100);
spaceCraft4.addImage(craft4Img);
spaceCraft4.scale = 0.6;
spaceCraft4.rotation = -25;
        
feedback = createSprite(width/2,height/2,100,100);
feedback.addImage(feedback_img);
feedback.scale = 1.3;
feedback.visible = false;
    }

function draw(){
    background("red");
    if(mousePressedOver(playB)&& gameState === "start"){
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
            spaceCraft.x = spaceCraft.x-30;
        }
       
        if(keyDown(RIGHT_ARROW)){
            spaceCraft.x = spaceCraft.x+30;
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
        spawnCoin();
        if(finishGroup.isTouching(spaceCraft)){
            level = 2;
            console.log("level 1 ended")
        }
        if(CoinGroup.isTouching(spaceCraft)){
            CoinGroup.destroyEach();
            coinS.play();
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
        spawnCoin();

        if(finishGroup.isTouching(spaceCraft)){
            level = 3;
            console.log("level 2 ended")
        }
        if(CoinGroup.isTouching(spaceCraft)){
            CoinGroup.destroyEach();
            coinS.play();
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
    if(gameState === "play" && level === 3){
        spaceCraft.changeImage("3");
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
        spawnCoin();

        if(finishGroup.isTouching(spaceCraft)){
            level = 4;
            console.log("level 3 ended")
        }
        if(CoinGroup.isTouching(spaceCraft)){
            CoinGroup.destroyEach();
            coinS.play();
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
    if(gameState === "play" && level === 4){
        spaceCraft.changeImage("4");
        if(keyDown(LEFT_ARROW)){
            spaceCraft.x = spaceCraft.x-50;
        }
       
        if(keyDown(RIGHT_ARROW)){
            spaceCraft.x = spaceCraft.x+50;
        }
        if(backgroundImg.y > 700){
            backgroundImg.y = backgroundImg.height/5;
        }
        if(spaceCraft.x < 50){
            spaceCraft.x = 50;
        }
        if(spaceCraft.x > width - 100){
            spaceCraft.x = width - 100;
        }
        //clickS.stop();
       //clickS.destroy();
        spawnBomb();
        spawnFinish();
        spawnCoin();

        // if(finishGroup.isTouching(spaceCraft)){
        //     level = 3;
        //     console.log("level 2 ended")
        // }
        if(CoinGroup.isTouching(spaceCraft)){
            CoinGroup.destroyEach();
            coinS.play();
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
    else if(gameState === "end"){
        bombGroup.destroyEach();
        finishGroup.destroyEach();
        CoinGroup.destroyEach();
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
    function spawnCoin(){
        if(frameCount %10 === 0){
            coin = createSprite(random(100,width-100),0,100);
            coin.addImage(coinImg);
            coin.scale = 0.02;
            coin.velocityY = 10;
            coin.lifetime = 500;
            CoinGroup.add(coin);
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
        






