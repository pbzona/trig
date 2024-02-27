import { Graph } from './graph';
import { Point } from './point';
import { Line } from './line';

const A = new Point(0, 0, 'A');
const B = new Point(90, 120, 'B');
const C = new Point(B.x, 0, 'C');

const ab = new Line(A, B, 'c');
const ac = new Line(A, C, 'b');
const bc = new Line(B, C, 'a');

const graph = new Graph([A, B, C], [ab, ac, bc]);
