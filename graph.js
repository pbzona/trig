import { Values } from './values';
import { getTrigContext, getTrigCanvas } from './util';

export class Graph {
  constructor({ points = [], lines = [], angle }) {
    this.ctx = getTrigContext();
    this.canvas = getTrigCanvas();

    this.offset = {
      x: this.canvas.width / 2,
      y: this.canvas.height / 2,
    };

    this.points = new Map();
    if (points) {
      this.addPoints(points);
    }

    this.lines = new Map();
    if (lines) {
      this.addLines(lines);
    }

    this.values = new Values(this);
    this.angle = angle;

    this.#init();
  }

  #init() {
    this.ctx.translate(this.offset.x, this.offset.y);
    this.#drawCoordinateSystem();
    this.#update();

    if (this.points.size > 0) {
      this.makeInteractive();
    }
  }

  #drawCoordinateSystem() {
    this.ctx.beginPath();
    this.ctx.moveTo(-this.offset.x, 0);
    this.ctx.lineTo(this.canvas.width - this.offset.x, 0);
    this.ctx.moveTo(0, -this.offset.y);
    this.ctx.lineTo(0, this.canvas.height - this.offset.y);
    this.ctx.setLineDash([4, 2]);
    this.ctx.lineWidth = 1;
    this.ctx.strokeStyle = '#888';
    this.ctx.stroke();

    // Reset
    this.ctx.setLineDash([]);
  }

  #update() {
    const a = this.lines.get('a').getLength();
    const b = this.lines.get('b').getLength();
    const c = this.lines.get('c').getLength();

    this.values.sin = a / c;
    this.values.cos = b / c;
    this.values.tan = a / b;
    this.values.theta = (Math.asin(a / c) * 180) / Math.PI;

    this.ctx.clearRect(-this.offset.x, -this.offset.y, this.canvas.width, this.canvas.height);
    this.#drawCoordinateSystem();

    this.lines.forEach(l => l.draw());
    this.angle.drawText();
    this.values.draw();
  }

  addPoints(points) {
    for (const p of points) {
      this.points.set(p.label, p);
    }
  }

  addLines(lines) {
    for (const l of lines) {
      this.lines.set(l.label, l);
    }
  }

  makeInteractive() {
    document.onmousemove = event => {
      const B = this.points.get('B');
      const C = this.points.get('C');

      B.x = event.offsetX - this.offset.x;
      B.y = event.offsetY - this.offset.y;

      C.x = B.x;

      this.#update();
    };
  }
}
