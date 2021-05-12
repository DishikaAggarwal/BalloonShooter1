var ball;
var bg;

function preload (){
 // bg=loadImage("images/background.jpg");
 blueimg=loadImage("images/blueball.png");
 greenimg=loadImage("images/greenball.png");
 pinkimg=loadImage("images/pinkball.png");
 purpleimg=loadImage("images/purpleball.png");
 yellowimg=loadImage("images/yellowball.png");
}

var xval=50;
var yval=50;

function setup() {
  createCanvas(1200,700);
  var bluegroup=new Group ();
  var greengroup=new Group ();
  var pinkgroup=new Group ();
  var purplegroup=new Group ();
  var yellowgroup=new Group ();

  var shooter=createSprite(280,500,10,10);
  
  for(var r=0;r<5;r++)
  {
    for(var c=0;c<10;c++)
    {
      ball=createSprite(xval,yval,50,50);
      var rand=Math.round(random(1,5));

     
      switch(rand)
      {
        case 1: ball.addImage(blueimg);
                ball.scale=0.15;
                bluegroup.add(ball);
                break;
        case 2: ball.addImage(greenimg);
                ball.scale=0.3;
                greengroup.add(ball);
                break;
        case 3: ball.addImage(pinkimg);
                ball.scale=0.35;
                pinkgroup.add(ball);
                break;
        case 4: ball.addImage(purpleimg);
                ball.scale=0.3;
                purplegroup.add(ball);
                break;
        case 5: ball.addImage(yellowimg);
                ball.scale=0.29;
                yellowgroup.add(ball);
                break;
                
      }
      xval=xval+55;
    }
    xval=50;
    yval=yval+55;
   }
//  createSprite(400, 200, 50, 50);
  
}

function draw() {
  background("lightblue");  
 
  drawSprites();
  fill("black");
  text(mouseX+" "+mouseY,mouseX,mouseY);
 
}