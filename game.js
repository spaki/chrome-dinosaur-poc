let player;
let enemies = [];

let bgImage;
var bgX1 = 0;
var bgX2;
var bgSpeed = 5;

function setup() {
    createCanvas(900, 600);
    
    player = new Player();
    
    bgImage = loadImage('assets/background.png');
    bgX2 = width;
}

function keyPressed() {
    if (key == ' ') 
        player.jump();
}

function draw() {
    renderBackground();

    if (random(1) < 0.005) 
        enemies.push(new Enemy());

    for (let enemy of enemies) {
        enemy.move();
        enemy.show();

        if (player.hits(enemy)) 
            noLoop();
    }

    player.show();
    player.move();
}

function renderBackground() {
    image(bgImage, bgX1, 0, width, height);
    image(bgImage, bgX2, 0, width, height);
  
    bgX1 -= bgSpeed;
    bgX2 -= bgSpeed;

    if (bgX1 < -width)
        bgX1 = width;
  
    if (bgX2 < -width)
        bgX2 = width;
}