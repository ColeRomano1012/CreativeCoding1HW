
var characterX = 100;
var characterY = 100;

var w = 87; 
var s = 83;
var a = 65;
var d = 68;

var shapeX = 30;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;

var shape2X = 60;
var shape2Y = 100;
var shape2XSpeed;
var shape2YSpeed;

var mouseShapeX;
var mouseShapeY;
function setup()
{
    createCanvas(500, 600);
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 10);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 10);
    createCharacter(200,350);
}

function draw()
{
    background(0,255,0);
    stroke(0);
    fill(0);
    
    createBorders(10);

    textSize(16);
    text("EXIT", width-50,height-50)

    drawCharacter();
    characterMovement();

    fill(0,255,255,)

    circle(shape2X, shape2Y, 50);

     shape2XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);
     shape2YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);

    shape2X += shape2XSpeed;
    shape2Y += shape2YSpeed;
    
    if(shape2X > width)
    {
        shape2X = 0;
    }
    if(shape2X < 0)
    {
        shape2X = width;
    }
    if(shape2Y > height)
    {
        shape2Y = 0;
    }
    if(shape2Y < 0)
    {
        shape2Y = height;
    }


    fill(0,255,255);
    
    circle(shapeX, shapeY, 25);

     
     shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    
    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;
    
    if(shapeX > width)
    {
        shapeX = 0;
    }
    if(shapeX < 0)
    {
        shapeX = width;
    }
    if(shapeY > height)
    {
        shapeY = 0;
    }
    if(shapeY < 0)
    {
        shapeY = height;
    }


    
    if(characterX > width && characterY > width-50)
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", width/2-50, height/2-50);
    }

    
    fill(255,255,255);
    circle(mouseShapeX, mouseShapeY, 25);
}

function characterMovement()
{
    
    if(keyIsDown(w))
    {
        characterY -= 5;   
    }
    if(keyIsDown(s))
    {
        characterY += 5;   
    }
    if(keyIsDown(a))
    {
        characterX -= 5;   
        console.log("movement: " + characterX);
    }
    if(keyIsDown(d))
    {
        characterX += 5;   
    }
}
function createCharacter(x,y)
{
    characterX = x;
    characterY = y;
    console.log(characterX);
    
    
   
}

function drawCharacter()
{
    fill(255,255,0);
    circle(characterX,characterY,25);
}
function createBorders(thickness)
{
    
    rect(0,0,width,thickness);
    
    rect(0,0,thickness,height);
    
    rect(0, height-thickness,width, thickness);
    
    rect(width-thickness,0,thickness,height-50);
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

