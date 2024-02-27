import { Point } from './point';

export class Values {
  constructor(graph) {
    this.graph = graph;

    this._sin = new Point(-graph.offset.x / 2, graph.offset.y * 0.5, 'sin');
    this._cos = new Point(-graph.offset.x / 2, graph.offset.y * 0.6, 'cos');
    this._tan = new Point(-graph.offset.x / 2, graph.offset.y * 0.7, 'tan');
  }

  set sin(val) {
    this._sin.label = `sin θ = a/c = ${parseFloat(val).toFixed(5)}`;
  }

  set cos(val) {
    this._cos.label = `cos θ = b/c = ${parseFloat(val).toFixed(5)}`;
  }

  set tan(val) {
    this._tan.label = `tan θ = a/b = ${parseFloat(val).toFixed(5)}`;
  }

  draw() {
    this._sin.drawText();
    this._cos.drawText();
    this._tan.drawText();
  }
}
