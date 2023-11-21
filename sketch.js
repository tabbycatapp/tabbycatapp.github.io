let bmjua

function preload() {
  bmjua = loadFont("BMJua.otf")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255,206,91);
  
  textAlign(CENTER, CENTER)
  textSize((width + height) / 32)
  textFont(bmjua)
  text("tabby.cat", width / 2, height / 2 - 12)
  textSize((width + height) / 48)
  text("coming soon!!!", width / 2, height / 2 + 24)
}