var canvas;
var backgroundImage, car1_img, car2_img, track;
var fuelImage, powerCoinImage, lifeImage;
var obstacle1Image, obstacle2Image;
var database, gameState;
var blastImage;
var form, player, playerCount;
var allPlayers, car1, car2, fuels, powerCoins, obstacles;
var cars = [];

function preload() {
  backgroundImage = loadImage("./assets/H/background.png");
  car1_img = loadImage("../assets/H/horse1.png");
  car2_img = loadImage("../assets/H/horse2.png");
  track = loadImage("../assets/H/track.png");
  fuelImage = loadImage("./assets/H/apple.png");
  powerCoinImage = loadImage("./assets/H/star.png");
  obstacle1Image = loadImage("./assets/H/rock.png");
  obstacle2Image = loadImage("./assets/H/fence.png");
  lifeImage = loadImage("./assets/H/life.png");
  blastImage = loadImage("./assets/H/blast.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

  if (gameState === 2) {
    game.showLeaderboard();
    game.end();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
