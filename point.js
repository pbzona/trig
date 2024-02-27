import { getTrigContext } from './util';

const DEFAULT_STYLES = {
  pointSize: 20,
  pointColor: 'black',
  textColor: 'white',
  fontSize: 15,
  strokeStyle: 'none',
  lineWidth: 0,
};

export class Point {
  constructor(x, y, label) {
    this.x = x;
    this.y = y;
    this.label = label;

    this.styles = DEFAULT_STYLES;
  }

  draw() {
    this.drawPoint();
    if (this.label) {
      this.drawText();
    }
  }

  drawPoint() {
    const ctx = getTrigContext();

    ctx.beginPath();
    ctx.fillStyle = this.styles.pointColor;
    ctx.arc(this.x, this.y, Math.floor(this.styles.pointSize / 2), 0, Math.PI * 2);
    ctx.fill();

    this.resetStyles();
  }

  drawText() {
    const ctx = getTrigContext();

    ctx.beginPath();
    ctx.fillStyle = this.styles.textColor;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = `normal ${this.styles.fontSize}px Courier`;
    ctx.strokeStyle = this.styles.strokeStyle;
    ctx.lineWidth = this.styles.lineWidth;
    ctx.strokeText(this.label, this.x, this.y);
    ctx.fillText(this.label, this.x, this.y);

    this.resetStyles();
  }

  resetStyles() {
    this.styles = DEFAULT_STYLES;
  }
}
