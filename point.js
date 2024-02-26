import { getTrigContext } from './util';

export class Point {
  constructor(x, y, label) {
    this.x = x;
    this.y = y;
    this.label = label;

    this.pointSize = 20;
    this.pointColor = 'black';
    this.textColor = 'white';
  }

  draw() {
    this.#drawPoint();
    if (this.label) {
      this.#drawText();
    }
  }

  #drawPoint() {
    const ctx = getTrigContext();

    ctx.beginPath();
    ctx.fillStyle = this.pointColor;
    ctx.arc(this.x, this.y, Math.floor(this.pointSize / 2), 0, Math.PI * 2);
    ctx.fill();
  }

  #drawText() {
    const ctx = getTrigContext();

    ctx.beginPath();
    ctx.fillStyle = this.textColor;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = 'normal 15px Courier';
    ctx.fillText(this.label, this.x, this.y);
  }
}
