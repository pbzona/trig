import { Graph } from './graph';
import { Point } from './point';

const A = new Point(0, 0, 'A');
const B = new Point(90, 120, 'B');
const C = new Point(B.x, 0, 'C');

const graph = new Graph([A, B, C]);
