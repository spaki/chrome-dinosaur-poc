class Enemy {
    constructor() {
        this.size = 150;
        this.x = width;
        this.y = height - this.size - 30;
        this.image = createImg('assets/enemy.gif');
        this.image.size(this.size, this.size);
    }
  
    move() {
        this.x -= 10;
    }
  
    show() {
        this.image.position(this.x, this.y);
    }
  }