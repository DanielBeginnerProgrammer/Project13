//segure espaço para Atirar
var bow , arrow,  background1;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

var scoreNum=0;

function preload(){
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  red_balloonImage = loadImage("red_balloon0.png");
}
  // red_balloonImage = loadImage("red_balloon0.png");
  // red_balloonImage = loadImage("redballoon0.png");
  // red_balloonImage = loadImage("red_balloon0");
  //red_balloonImage = loadImage("red_balloon0.png");
  function setup(){
    createCanvas(400,400);
    bow = createSprite(390,200);
    bow.addImage(bowImage);
    background1 = createSprite(200,200);
    background1.addImage(backgroundImage);
    background1.depth = 1;
    bow.depth = 2;
  }
  function draw(){
    bow.y = World.mouseY;
    drawSprites();
    score();
  }



 

 function score(){
    if (frameCount%100 === 0) {
      var BlueBalloon = createSprite(-20,Math.round(random(0,400)),0,0);
      BlueBalloon.addImage(blue_balloonImage);
      BlueBalloon.scale = 0.1;
      BlueBalloon.velocityX = 2;
      BlueBalloon.depth = bow.depth;
      bow.depth = bow.depth + 1;
     BlueBalloon.lifeTime = 100;
      if (frameCount%30 === 0) {
        var RedBalloon = createSprite(-20,Math.round(random(0,400)),0,0);
        RedBalloon.addImage(red_balloonImage);
        RedBalloon.scale = 0.1;
        RedBalloon.velocityX = 2;
        RedBalloon.depth = bow.depth;
        bow.depth = bow.depth + 1;
        RedBalloon.lifeTime = 100;
        if (frameCount%10 === 0) {
          var GreenBalloon = createSprite(-20,Math.round(random(0,400)),0,0);
          GreenBalloon.addImage(green_balloonImage);
          GreenBalloon.scale = 0.1;
          GreenBalloon.velocityX = 2;
          GreenBalloon.lifeTime = -10;
          GreenBalloon.depth = bow.depth;
          bow.depth = bow.depth + 1;
          GreenBalloon.lifeTime = 100;
          if (frameCount%10 === 0) {
            var PinkBalloon = createSprite(-20,Math.round(random(0,400)),0,0);
            PinkBalloon.addImage(pink_balloonImage);
            PinkBalloon.scale = 1;
            PinkBalloon.velocityX = 2;
            PinkBalloon.depth = bow.depth;
            bow.depth = bow.depth + 1;
            PinkBalloon.lifeTime = 100;
            } 
          }
        }
      }
      if (keyDown("space")&&Math.round(random(1,5))===1) {
        arrow = createSprite(bow.x,bow.y);
        arrow.velocityX = -20;
        arrow.addImage(arrowImage);
        arrow.scale = 0.1;
        if (arrow.x < 0) {
          arrow.destroy();
        }
      }
    }