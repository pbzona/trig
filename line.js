import { Point } from './point';
import { getTrigContext } from './util';

export class Line {
  constructor(p1, p2, label) {
    this.p1 = p1;
    this.p2 = p2;
    this.label = label;

    this.color = 'black';
  }

  getLength() {
    this.length = Math.round(Math.hypot(this.p1.x - this.p2.x, this.p1.y - this.p2.y));
    return this.length;
  }

  getMidpoint() {
    this.midpoint = new Point((this.p1.x + this.p2.x) / 2, (this.p1.y + this.p2.y) / 2, this.label);
    return this.midpoint;
  }

  draw() {
    this.drawLine();
    if (this.label) {
      this.getMidpoint();
      this.midpoint.styles.textColor = 'black';
      this.midpoint.styles.strokeStyle = '#bbb';
      this.midpoint.styles.lineWidth = 7;
      this.midpoint.styles.fontSize = 18;
      this.midpoint.drawText();
    }
  }

  drawLine() {
    const ctx = getTrigContext();

    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 2;
    ctx.moveTo(this.p1.x, this.p1.y);
    ctx.lineTo(this.p2.x, this.p2.y);
    ctx.stroke();
  }
}
