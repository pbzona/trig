import { getTrigContext } from './util';

export class Line {
  constructor(p1, p2, label) {
    this.p1 = p1;
    this.p2 = p2;
    this.label = label;

    this.color = 'black';
  }

  draw() {
    const ctx = getTrigContext();

    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 2;
    ctx.moveTo(this.p1.x, this.p1.y);
    ctx.lineTo(this.p2.x, this.p2.y);
    ctx.stroke();
  }
}
