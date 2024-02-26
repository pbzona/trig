/*
  ===========
  == Types ==
  ===========
*/

/**
 * Create a new point in 2d space
 * @param {number} x X coordinate
 * @param {number} y Y coordinate
 * @returns {Point}
 */
export function Point(x, y) {
  return {
    x,
    y,
  };
}

/*
  ===============
  == Functions ==
  ===============
*/

/**
 * Setup for the canvas and context:
 * - Moves origin to center
 */
export function init() {
  const canvas = getTrigCanvas();
  const offset = {
    x: canvas.width / 2,
    y: canvas.height / 2,
  };

  const ctx = getTrigContext();
  ctx.translate(offset.x, offset.y);

  drawCoordinateSystem(offset);
}

/**
 * Returns the trig canvas element
 * @returns {HTMLCanvasElement}
 */
function getTrigCanvas() {
  return document.getElementById('trigonometry_canvas');
}

/**
 * Returns the context for the trig canvas
 * @returns {CanvasRenderingContext2D}
 */
function getTrigContext() {
  return getTrigCanvas().getContext('2d');
}

/**
 * Draw the x and y axes on the graph
 * @param {Point} offset Point representing the offset from "real" 0, 0
 */
function drawCoordinateSystem(offset) {
  const ctx = getTrigContext();
  ctx.beginPath();
  ctx.moveTo(-offset.x, 0);
  ctx.lineTo(ctx.canvas.width - offset.x, 0);
  ctx.moveTo(0, -offset.y);
  ctx.lineTo(0, ctx.canvas.height - offset.y);
  ctx.stroke();
}

/**
 * Draw a given point on the canvas
 * @param {Point} location Point coordinates
 * @param {number} size Diameter in pixels
 * @param {string} color Color string
 */
export function drawPoint(location, size = 20, color = 'black') {
  const ctx = getTrigContext();

  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.arc(location.x, location.y, Math.floor(size / 2), 0, Math.PI * 2);
  ctx.fill();
}

export function drawText(text, location, color = 'white') {
  const ctx = getTrigContext();

  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = 'normal 15px Courier';
  ctx.fillText(text, location.x, location.y);
}
