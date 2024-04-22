
function preload(){
  img1 = loadImage("resources/media/piza.jpeg")
}

function setup() {
createCanvas(800, 800);
  
}

function draw() {
  imageMode(CENTER);
  noCursor();
  background(200,225,255);
  image(img1,mouseX,mouseY,200,200);
  
 
}
