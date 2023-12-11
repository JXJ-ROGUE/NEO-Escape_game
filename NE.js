let ns;
let str;
let strx; //xpos
let strx2; //xpos
let cld;
let cldx2; 
let bul;
let bulx; //varible for the xpos
let bulx2;// xpos
let imgC;
let imgE;
let player, enemy;
let seconds = 100;
let score;
let startScore;

 
function setup() {
  new Canvas(800, 400);
  ns = loadImage('nightsky.png');
  str = loadImage('street.png');
  cld = loadImage('clouds.png');
  bul = loadImage('buildings.png');
  imgC = loadImage('Vhawk.png');
  imgE = loadImage('darkness.png');

  score = 0;
  startScore = millis(); //offscreen starting postion

  bulx = 0; //starting position 
  bulx2 = width; // starting position

  strx = 0; //starting position
  strx2 = width; //starting position
  
  // world.gravity.y = 10;
  player = new Sprite();
  player.img = imgC;
  player.x = 175;
  player.diameter = 40;
  player.scale = 1.25;

  enemy = new Group();
  enemy.img = imgE;
  enemy.diameter = 55;
  enemy.direction = 180;
  enemy.speed = 11; 
  enemy.scale = 1;

  
  
    //here we set up the first platform
  platform = new Sprite();
  platform.color = (13, 14, 12);
  platform.width = 800;
  platform.height = 5;
  platform.x = 400;
  platform.y = 400;
  platform.collider = "static"; //we make the colliders static so they don't fall due to gravity
}

function draw() {
  background(ns);

  image(str, strx, 0, width, height);
  image(str, strx2, 0, width, height);
  image(cld, 0, 0, width, height);
  image(bul, bulx, 0, width, height);
  image(bul, bulx2, 0, width, height);



  
  if (kb.pressing('up')) player.vel.y = -8;
  else if (kb.pressing('down')) player.vel.y = 8;
  else player.vel.y = 0;
  
  

    seconds--; 

    if (seconds <= 0) {
      new enemy.Sprite(width, random(height));
      seconds = 20; 
    }

    //Player Reset

    if(player.x >= width || player.x < 0){
      player.x = 175;
      player.vel.x = 0;
      player.vel.y = 0;
      player.rotation = 0; // resets player rotation
      player.rotationLock = true; //locks the player rotaion
    } else {
      player.rotationLock = false; //unlocks the player rotation once the player returns
    }

    //Start of Parallaxing
    bulx-= 8;
    bulx2 = bulx2 - 8;

    //reset bg1 off screen
     if (bulx <= 0 -width){
       bulx= width;
     }

     //reset bg2 off screen
     if (bulx2 <= 0 - width){
       bulx2= width;
     }

     //Street Parallaxing
     strx -= 20;
     strx2 = strx2 - 20;

     //reset strx screen
     if (strx <= 0 - width){
      strx = width;
     }
     //reset strx2 off screen
     if (strx2 <= 0 - width){
      strx2 = width;
     }




    

   
  

  //console.log(player.vel.y);

  if (player.y < 20) {
    player.y = 20;
  }

  if (player.y > 375) {
    player.y = 375;
  }
  //player.debug = mouse.pressing();
  //enemy.debug = mouse.pressing();

}
 
