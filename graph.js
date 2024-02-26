import { getTrigContext, getTrigCanvas } from './util';

export class Graph {
  constructor() {
    this.ctx = getTrigContext();
    this.canvas = this.ctx.canvas;

    this.offset = {
      x: this.canvas.width / 2,
      y: this.canvas.height / 2,
    };

    this.points = new Map();

    this.#init();
  }

  #init() {
    this.ctx.translate(this.offset.x, this.offset.y);
    this.#drawCoordinateSystem();
  }

  #drawCoordinateSystem(offset) {
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

  addPoints(points) {
    for (const p of points) {
      this.points.set(p.label, p);
    }
  }
}
