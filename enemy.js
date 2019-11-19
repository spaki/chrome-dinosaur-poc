class Enemy {
    constructor() {
        this.size = 150;
        this.x = width;
        this.y = height - this.size - 30;
        this.img = createImg('assets/enemy.gif');
        this.img.size(this.size, this.size);
    }
  
    move() {
        this.x -= 10;
    }
  
    show() {
        this.img.position(this.x, this.y);
    }
  }