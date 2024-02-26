import { Point, drawPoint, drawText, init } from './util';

init();

const A = new Point(0, 0);
const B = new Point(90, 120);
const C = new Point(B.x, 0);

drawPoint(A);
drawText('A', A);
drawPoint(B);
drawText('B', B);
drawPoint(C);
drawText('C', C);
