export default class Canvas {

  width;
  height;
  canvasElement;

  constructor() {

    this.width  = 800;
    this.height = 600;
  }

  createCanvas() {

    var canvas = document.createElement("canvas");
    canvas.width = this.width;
    canvas.height = this.height;
    canvas.style.backgroundColor = "#ADADAD";
    
    var gameDiv = document.getElementById("game");
    gameDiv.appendChild(canvas);

    this.setCanvas(canvas);
  }

  setCanvas(canvasElement) {
    this.canvasElement = canvasElement;
  }

  getCanvas() {
    return this.canvasElement;
  }
}