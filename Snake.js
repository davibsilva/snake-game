export default class Snake {

  width;
  height;
  x;
  y;
  walking;
  movementKeys;
  speed;
  head;
  body;

  constructor() {

    this.width   = 20;
    this.height  = 20;
    this.x       = 370;
    this.y       = 260;
    this.walking = null;
    this.movementKeys = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
    this.speed   = 70;
  }
  
  getWidth() {
    return this.width;
  }

  getHeight() {
    return this.height;
  }

  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }

  getWalking() {
    return this.walking;
  }

  getMovementKeys() {
    return this.movementKeys;
  }

  setWidth(width) {
    this.width = width;
  }
  
  setHeight(height) {
    this.height = height;
  }

  setX(x) {
    this.x = x;
  }

  setY(y) {
    this.y = y;
  }

  setWalking(walking) {
    this.walking = walking;
  } 
  
  setMovementKeys(key) {
    this.movementKeys.push(key);
  }

  createSnake(canvasObj) {
    
    var context = canvasObj.getContext("2d");
    context.fillStyle = "#D66B6B";
    context.fillRect(this.x, this.y, this.width, this.height);
  }

  move(canvasObj, direction) {

    if (this.getWalking) {
      clearInterval(this.getWalking());
    }

    this.updatePosition(canvasObj, direction);
  }

  updatePosition(canvasObj, direction) {

    this.walking = true;

    let initialX = this.getX();
    let initialY = this.getY();


    this.setWalking(setInterval(() => {
      
      let lastUpdatedX = this.getX();
      let lastUpdatedY = this.getY();

      let context = canvasObj.getContext("2d");

      switch (direction) {

        case "ArrowUp":
          this.setY(this.getY() - 20);
          break;

        case "ArrowDown":
          this.setY(this.getY() + 20);
          break;

        case "ArrowLeft":
          this.setX(this.getX() - 20);
          break;

        case "ArrowRight":
          this.setX(this.getX() + 20);
          break;
      }

      if (this.getX() > canvasObj.width) {
        this.setX(0);
      } else if (this.getX() < 0) {
        this.setX(canvasObj.width);
      }

      if (this.getY() > canvasObj.height) {
        this.setY(0);
      } else if (initialY < 0) {
        this.setY(canvasObj.height);
      }

      context.fillRect(this.getX(), this.getY(), this.getWidth(), this.getHeight());
      context.clearRect(lastUpdatedX, lastUpdatedY, this.getWidth(), this.getHeight());

    }, this.speed));
  }
}