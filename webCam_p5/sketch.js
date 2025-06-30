let capture;
let posX, posY;



function setup() {
   createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO,{flipped:true}); 
  capture.size(800, 400);// tamaño del video
  capture.hide();   

  posX = width * 0.5;
  posY = height * 0.5;

  imageMode(CENTER)


              
}

function draw() {
  background(220);
  image(capture, posX, posY, 400, 700); 
}










