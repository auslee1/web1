let myCar = [];

function preload(){
  img1 = loadImage("resources/media/piza.jpeg")
}

function setup() {
createCanvas(800, 800);
  
//myCar = new Car[10];

for (let i = 0; i < 10; i++) {
  myCar[i] = new Car(color(255,0,0),random(width),random(height), i);
}
}

function draw() {
  background(200,225,255);
  //image(img1,mouseX,mouseY,200,200);
  
 
}