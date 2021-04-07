import Canvas from './Canvas.js';
import Snake from './Snake.js';

export default class Sketch {

  movementKeys;

  setup() {

    window.onload = () => {

      var canvasObj = new Canvas();
      var snakeObj  = new Snake();

      canvasObj.createCanvas();
      snakeObj.createSnake(canvasObj.getCanvas());

      document.addEventListener('keydown', function(event) {

        const key = event.key;
        if (snakeObj.getMovementKeys().indexOf(key) != -1) {
          event.preventDefault();
        }
        
        snakeObj.move(canvasObj.getCanvas(), key);
      });
    }
  }
}