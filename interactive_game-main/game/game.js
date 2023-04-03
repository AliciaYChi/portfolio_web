
var ballx = 25; // width/2 ?
var bally = 25;
var ballSize = 40;
var score =0;
var img1, img2, img3, img4;

function preload() {

  img1 = loadImage('ocean.png');
    img2 = loadImage('bag.png');
      img3 = loadImage('straw.png');  
        img4 = loadImage('bottle.png');
       
}

function setup() {
  createCanvas(1371, 771);
  textAlign(CENTER);
  textSize(20);
} // end of setup


function draw() {
  background(img1);
   if (gameState=="L1"){
  levelOne();
  } 
  if (gameState=="L2"){
   levelTwo(); 
  }
  if (gameState=="L3"){
   levelThree(); 
  }
  if (gameState=="L4"){
   levelFour(); 
  }
  if (gameState=="L5"){
   levelFive(); 
  }
  if(gameState=="L6"){
    levelSix();
  }
  
  text(("Score: " + score), width/2, 40);

} // end of draw

function levelOne(){
  text("level 1", width/2, height-20);
  var distToBall = dist(ballx+20, bally+20, mouseX, mouseY);
  if (distToBall<ballSize/2){
    ballx= random(width-5);
    bally = random(height-5);
    score = score +1;
  } // end if
  if (score>=5){
   gameState = "L2";
  }
  
  line(ballx+23, bally+20, mouseX, mouseY);
  
//  ellipse(ballx, bally, ballSize, ballSize);

   image(img2, ballx, bally);
  
} // end of level 1

function levelTwo(){
  text("level 2", width/2, height-20);
  var distToBall = dist(ballx+20, bally+20, mouseX, mouseY);
  if (distToBall<ballSize/2){
    ballx= random(width-5);
    bally = random(height-5);
    score = score +1;
  } // end if
  if (score>=10){
    gameState = "L3";
//    
  }
  
  line(ballx+23, bally+20, mouseX, mouseY);
  
  //ellipse(ballx, bally, ballSize, ballSize);

   image(img2, ballx, bally);
  
} // end of level 2

function levelThree(){
  text("level 3", width/2, height-20);
  var distToBall = dist(ballx+20, bally+20, mouseX, mouseY);
  if (distToBall<ballSize/2){
    ballx= random(width-5);
    bally = random(height-5);
    score = score +1;
  } // end if
  if (score>=20){
    gameState = "L4";
//    
  }
  
  //line(ballx+23, bally+20, mouseX, mouseY);
  
  //ellipse(ballx, bally, ballSize, ballSize);

   image(img4, ballx, bally);
  
} // end of level 3

function levelFour(){
  text("level 4", width/2, height-20);
  var distToBall = dist(ballx+20, bally+20, mouseX, mouseY);
  if (distToBall<ballSize/2){
    ballx= random(width-5);
    bally = random(height-5);
    score = score +1;
  } // end if
  if (score>=40){
    gameState = "L5";
//    
  }
  
  //line(ballx+23, bally+20, mouseX, mouseY);
  
  //ellipse(ballx, bally, ballSize, ballSize);

   image(img4, ballx, bally);
  
} // end of level 4

function levelFive(){
  text("level 5", width/2, height-20);
  var distToBall = dist(ballx+20, bally+20, mouseX, mouseY);
  if (distToBall<ballSize/2){
    ballx= random(width-5);
    bally = random(height-5);
    score = score +1;
  } // end if
  if (score>=50){
    gameState = "L6";
//    
  }
  
  //line(ballx+23, bally+20, mouseX, mouseY);
  
  //ellipse(ballx, bally, ballSize, ballSize);

   image(img3, ballx, bally);
  
} // end of level 5
function levelSix(){
    background(225);
  text("Winner", width/2, height/2);



  } // end if
