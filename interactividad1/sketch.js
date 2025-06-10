let color1;
let frase1 = "Presiona Q";
let texto1; 
let posX, posY;
let colorb;
let mostrarLineas = false;
let lineas = [];


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

  //lineas
  if (mostrarLineas) {
    stroke(color1);
    strokeWeight(2);
    for (let l of lineas) {
      line(l.x1, l.y1, l.x2, l.y2);
    }
    noStroke();
  }

//texto
  textAlign(CENTER, CENTER);
  fill(color1);
  textSize(texto1);
  text(frase1, posX, posY);
}


function generarLineas(angleDeg) {
  lineas = [];
  let a = radians(angleDeg);
  for (let i = 0; i < 50; i++) {
    let x = random(width);
    let y = random(height);
    let len = random(50, 200);
    lineas.push({ x1: x, y1: y, x2: x + cos(a) * len, y2: y + sin(a) * len });
  }
  mostrarLineas = true;
}

function keyPressed() {
  if (key === 'q') {
    frase1 = "Presiona W";
    colorb = color(255, 200, 200);
    color1 = color(50, 0, 100);
    texto1 = random(40, 100);
    posX = random (300,950);
    posY = random (100,590);
    generarLineas (90);



  } else if (key === 'w') {
    frase1 = "Presiona E";
    colorb = color(200, 255, 200);
    color1 = color(0, 100, 0);
    texto1 = random(30, 90);
    posX = random (300,950);
    posY = random (100,590);
    generarLineas (70);


  } else if (key === 'e') {
    frase1 = "Presiona R";
    colorb = color(200, 200, 255);
    color1 = color(0, 0, 200);
    texto1 = random(50, 120);
    posX = random (300,950);
    posY = random (100,590);
    generarLineas (60);


  } else if (key === 'r') {
    frase1 = "Presiona T";
    colorb = color(255, 255, 200);
    color1 = color(255, 128, 0);
    texto1 = random(60, 100);
    posX = random (300,950);
    posY = random (100,590);
    generarLineas (145)


  } else if (key === 't') {
    frase1 = "Presiona Y";
    colorb = color(100, 0, 200);
    color1 = color(255, 255, 255);
    texto1 = random(20, 80);
    posX = random (300,950);
    posY = random (100,590);
    generarLineas (0);


  } else if (key === 'y') {
    frase1 = "Presiona U";
    colorb = color(0, 200, 200);
    color1 = color(255, 0, 100);
    texto1 = random(30, 90);
    posX = random (300,950);
    posY = random (100,590);
    generarLineas (180);


  } else if (key === 'u') {
    frase1 = "Presiona I";
    colorb = color(255, 128, 0);
    color1 = color(0, 0, 0);
    texto1 = random(30, 100);
    posX = random (300,950);
    posY = random (100,590);
    generarLineas (120);


  } else if (key === 'i') {
    frase1 = "Presiona O";
    colorb = color(50, 50, 50);
    color1 = color(0, 255, 255);
    texto1 = random(30, 70);
    posX = random (300,950);
    posY = random (100,590);
    generarLineas (45);


  } else if (key === 'o') {
    frase1 = "Presiona P";
    colorb = color(255, 200, 255);
    color1 = color(100, 0, 100);
    texto1 = random(40, 100);
    posX = random (300,950);
    posY = random (100,590);
    generarLineas (165);


  } else if (key === 'p') {
    frase1 = "Presiona Q";
    colorb = color(0);
    color1 = color(255);
    texto1 = 60;
    posX = width * 0.5;
    posY = height * 0.5;
    generarLineas (0);
  }
}