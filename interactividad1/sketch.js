let color1;
let frase1 = "Presiona X";
let texto1; 
let posX, posY;
let colorb;


function setup() {
  createCanvas(windowWidth, windowHeight);
  color1 = color(255);
  texto1 = 60;  // tamaño inicial
  posX = width * 0.5;
  posY = height * 0.5;
 colorb = color(0);

}


function draw() {
  background(colorb);

  textAlign(CENTER, CENTER);
  fill(color1);
  textSize(texto1);
  text(frase1, posX, posY);



}

function keyPressed() {
  if (key === 'x') {
    frase1 = "Presiona P";
    colorb = color(237, 242, 244); // color fondo
    color1 = color(0, 0, 255); // color de texto
    texto1 = random(30, 100); // tamaño de texto 
    posX = 500; //posicion 
    posY = 100; 


  } else if (key === 'p') {
    frase1 = "Presiona W";
    colorb = color(229, 56, 59); // color fondo
    color1 = color(102, 7, 8);
    texto1 = random(30, 100);
    posX = random(100, 800); //posicion 
    posY = random(100, 800); 


  } else if (key === 'w') {
    colorb = color(217, 4, 41); // color fondo
    frase1 = "Presiona A";
    color1 = color(0, 255, 0);
    texto1 = random(30, 100);
    posX = 400; //posicion 
    posY = 400; 
    


  } else if (key === 'a') {
    colorb = color(141, 153, 174); // color fondo
    frase1 = "Presiona S";
    color1 = color(217, 4, 41);
    texto1 = random(30, 100);


  } else if (key === 's') {
    frase1 = "Presiona x";
    colorb = color(0);
    color1 = color(255);
    texto1 = (60);
    posX = width * 0.5;
    posY = height * 0.5;
  }
}