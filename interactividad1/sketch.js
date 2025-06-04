let frase1 = "Presiona X";
let frase2 = "";
let frase3 = "";
let color1;
let color2;
let color3;
let colorb =0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  color1 = color(255); 
  color2 = color(255); 
  color3 = color(255);
//  fondo1 = background(0);
}

function draw() {
background(colorb);
 


  // Frase 1
  fill(color1);
  textSize(60);
  text(frase1, 800, 300);

  // Frase 2
  fill(color2);
  textSize(80);
  text(frase2, 500, 500);

    // Frase 3
  fill(color3);
  textSize(100);
  text(frase3, 900, 900); 
}

function keyPressed() {
  if (key === 'x') {
    frase1 = "Presiona P";
    color1 = color(255, 0, 0); 
    colorb = 255;
  }

  if (key === 'p') {
    frase2 = "Presiona W";

    frase1 = "Presiona P";
    color1 = color (0);

    color2 = color (0,255,0)
    colorb = 0;
  }

    if (key === 'w') {
    frase1 = "Presiona P";
    color1 = color (255);

    color1 = color(255, 0, 0); 
    colorb = 255;

  }
    if (key === 'w') {
    frase1 = "Presiona 3";
      frase3 = "Presiona S";
    color3 = color (0,0,255)
    colorb = (0,0,255);
}
}