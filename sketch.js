let juaFont;

function preload() {
  // Load the Jua font
  juaFont = loadFont('https://fonts.googleapis.com/css2?family=Jua&display=swap');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255, 206, 91);
  
  textAlign(CENTER, CENTER);
  textSize((width + height) / 32);

  // Set the font to Jua
  textFont(juaFont);

  text("tabby.cat", width / 2, height / 2 - 12);
  textSize((width + height) / 48);
  text("coming soon!!!", width / 2, height / 2 + 24);
}
