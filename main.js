import { Point, drawPoint, drawText } from './util';

const A = new Point(0, 0);
const B = new Point(90, 120);
const C = new Point(B.x, 0);

drawPoint(A);
drawText('A', A);
drawPoint(B);
drawText('B', B);
drawPoint(C);
drawText('C', C);
