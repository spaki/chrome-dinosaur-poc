class Player {
    constructor() {
      this.size = 125;
      this.x = 50;
      this.y = this.getFloorPos();
      this.vy = 0;
      this.gravity = 2;
      this.img = loadImage('assets/player.png');
    }

    getFloorPos() {
        return height - this.size - 70;
    }
  
    jump() {
        if (this.y == this.getFloorPos())  // -> prevents to jump in the air
            this.vy = -35;
    }
  
    hits(enemy) {
        let x1 = this.x + this.size * 0.5;
        let y1 = this.y + this.size * 0.5;
        let x2 = enemy.x + enemy.size * 0.5;
        let y2 = enemy.y + enemy.size * 0.5;
        return collideCircleCircle(x1, y1, this.size, x2, y2, enemy.size);
    }
  
    move() {
      this.y += this.vy;
      this.vy += this.gravity;
      this.y = constrain(this.y, 0, this.getFloorPos());
    }
  
    show() {
      image(this.img, this.x, this.y, this.size, this.size);
    }
  }