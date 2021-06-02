var spaceCraft,spaceStation;
var spaceCraftImg,spaceCraftImgF,spaceCraftImgR,spaceCraftImgL,spaceStationImg;
var spaceImg;
var hasDocked = false;


function preload(){
  spaceCraftImg = loadImage("spacecraft1.png");
  spaceCraftImgF = loadImage("spacecraft2.png");
  spaceCraftImgL = loadImage("spacecraft3.png");
  spaceCraftImgR = loadImage("spacecraft4.png");
  spaceStationImg = loadImage("iss.png");
  spaceImg = loadImage("spacebg.jpg");
}

function setup() {
  createCanvas(800,800);
  spaceStation = createSprite(400, 200, 50, 50);
  spaceStation.addImage(spaceStationImg);

  spaceCraft = createSprite(400,400,50,50);
  spaceCraft.addImage(spaceCraftImg);
  spaceCraft.scale = 0.3

  
}

function draw() {
  background(spaceImg);  
  drawSprites();
  
 

  if(!hasDocked){
    if(keyCode === UP_ARROW){
      spaceCraft.y = spaceCraft.y-3;
      spaceCraft.addImage(spaceCraftImgF);
    }else

    if(keyCode === DOWN_ARROW){
      spaceCraft.addImage(spaceCraftImg);
      spaceCraft.y = spaceCraft.y+3;
    }else

    if(keyCode === LEFT_ARROW){
      spaceCraft.x = spaceCraft.x-3;
      spaceCraft.addImage(spaceCraftImgR);
    }else

    if(keyCode === RIGHT_ARROW){
      spaceCraft.x = spaceCraft.x+3;
      spaceCraft.addImage(spaceCraftImgL);
    } else

    spaceCraft.addImage(spaceCraftImg);
    
   
  }
  if(spaceCraft.x === 331 && spaceCraft.y === 298){
    hasDocked = true;
    spaceCraft.addImage(spaceCraftImg);
    }
    hasDockedCheck();
  
}
function hasDockedCheck(){
  if(hasDocked = true){
    textSize(30);
    stroke("yellow");
    text("Docking Sucessful",300,700);
  }
}

