import { Point } from './point';

export class Values {
  constructor(graph) {
    this.graph = graph;

    this._theta = new Point(-graph.offset.x / 2, graph.offset.y * 0.4, 'theta');
    this._sin = new Point(-graph.offset.x / 2, graph.offset.y * 0.5, 'sin');
    this._cos = new Point(-graph.offset.x / 2, graph.offset.y * 0.6, 'cos');
    this._tan = new Point(-graph.offset.x / 2, graph.offset.y * 0.7, 'tan');
  }

  set theta(val) {
    this._theta.label = `θ = ${this.#formatValue(val, 2)}`;
  }

  set sin(val) {
    this._sin.label = `sin θ = a/c = ${this.#formatValue(val)}`;
  }

  set cos(val) {
    this._cos.label = `cos θ = b/c = ${this.#formatValue(val)}`;
  }

  set tan(val) {
    this._tan.label = `tan θ = a/b = ${this.#formatValue(val)}`;
  }

  #formatValue(val, decimalPlaces = 4) {
    return parseFloat(val).toFixed(decimalPlaces);
  }

  draw() {
    this._theta.drawText();
    this._sin.drawText();
    this._cos.drawText();
    this._tan.drawText();
  }
}
