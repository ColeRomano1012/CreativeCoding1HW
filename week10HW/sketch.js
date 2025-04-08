var headX = 200;
var headY = 100;
var headDirection = 1;

var bodyX = 310;
var bodyY = 350;
var bodyDirection = 3;

var eyeX = 180;
var eyeY = 100;
var eyedirection = 3;

var eye2X = 330;
var eye2Y = 340;
var eye2direction = 3;

var earX = 310;
var earY = 310;
var eardirection = 2;

var size = 22;
var count = 0;
var sizeDirection = 2;




function setup() {
    createCanvas(400, 400);
  }


  
  function draw() {
    background(220);
    square(153,50,95)

    // body
    fill(255, 204, 0);
    square(bodyX,bodyY,100);
    bodyX+=bodyDirection;
    if(bodyX >= 418 || bodyX <= 82)
    {
        bodyDirection *= -1;
    }



    square(320,325,40)

    // head
    fill(255, 204, 0);
    circle(headX,headY,100);
    headX+=headDirection;
    if(headX >= 418 || headX <= 82)
    {
        headDirection *= -1;
    }

    //ear
    fill(255, 204, 0);
    square(earX,earY,20);
    earX+=eardirection;
    if(earX >= 418 || earX <= 82)
    {
     eardirection *= -1;
    }
    earY+=eardirection;
    if(earY >= 418 || earY <= 82)
    {
     eardirection *= -1;
    }

    // eye
    fill(255, 204, 0);
    circle(eyeX,eyeY,20);
    eyeY+=eyedirection;
    if(eyeY >= 418 || eyeY <= 82)
    {
        eyedirection *= -1;
    }

    // eye2
    fill(255, 204, 0);
    circle(eye2X,eye2Y,10);
    eye2Y+=eye2direction;
    if(eye2Y >= 418 || eye2Y <= 82)
    {
        eye2direction *= -1;
    }



    circle(180,102,10)
    circle(220,100,20)
    circle(220,102,10)
    point(220,101)
    point(180,101)
    line(180,130,220,130)
    rect(150,50,100,30)
    square(140,50,40)
    square(220,50,40)
    rect(175,150,50,120)
    square(150,150,100)
    rect(125,150,25,150)
    rect(250,150,25,150)
    rect(160,250,30,250)
    rect(210,250,30,250)
    square(160,375,30)
    square(210,375,30)
    rect(125,150,25,80)
    rect(250,150,25,80)
    rect(150,150,30,110)
    rect(220,150,30,110)
  
    square(350,310,20)
    circle(350,340,10)
    triangle(260,300,275,275,280,300)
    line(280,300,320,350)

    

    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
    text("Walking the Dog",75,40 );

  
    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
    text("Cole Romano",25,370 );

    

  }