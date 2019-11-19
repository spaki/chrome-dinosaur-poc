class Player {
    constructor() {
        this.size = 125;
        this.x = 50;
        this.y = this.getFloorPos();
        this.vy = 0;
        this.gravity = 2;
        this.image = this.getImage();
    }

    getImage() {
        var imageName;
        var imageIndex = this.getRandomInteger(1, 5);
        
        switch(imageIndex) {
            case 1:
                imageName = "player.png";
                break;
            case 2:
                imageName = "player2.gif";
                break;
            case 3:
                imageName = "player3.gif";
                break;
            case 4:
                imageName = "player4.gif";
                break;
        }

        var image = createImg('assets/' + imageName);
        image.size(this.size, this.size);
        
        return image;
    }

    getRandomInteger(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
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
        this.image.position(this.x, this.y);
    }
  }