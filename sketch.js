var forest,forestimg
var tom,jerry, tomimg1,tomimg2,tomimg3,
jerryimg1,jerryimg2,jerryimg3,jerryimg4;

function preload() {
forestimg = loadImage("garden.png")
    tomimg1 = loadImage("tomOne.png")
    tomimg2 = loadImage("tomTwo.png")
    tomimg3 = loadImage("tomThree.png")
    jerryimg1 = loadImage("jerryOne.png")
    jerryimg2 = loadImage("jerryTwo.png")
    jerryimg3 = loadImage("jerryThree.png")
}

function setup(){
    createCanvas(400,100);
forest = createSprite(200,180,400,100)
forest.addImage("forest",forestimg)
forest.x = forest.width /2;
tom = createSprite(50,180,380,50)
tom.addImage("tom",tomimg1)
tom.addImage("tom",tomimg2)
tom.addImage("tom",tomimg3)
jerry.addImage("jerry",jerryimg1)
jerry.addImage("jerry",jerryimg2)
jerry.addImage("jerry",jerryimg3)
jerry.addImage("jerry",jerryimg4)
}

function draw() {

    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){
if(keycode === LEFT_ARROW)
tom.velocityX = -5 
tom.addAnimation("tomrunning",tomimg2) 
tom.changeAnimation("tomrunning")
jerry.addAnimation("jerry",jerryimg3)
}
