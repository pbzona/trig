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
 * Returns the context for the trig canvas
 * @returns {CanvasRenderingContext2D}
 */
export function getTrigContext() {
  return document.getElementById('trigonometry_canvas').getContext('2d');
}

/**
 *
 * @param {Point} location Point coordinates
 * @param {number} size Diameter in pixels
 * @param {*} color
 */
export function drawPoint(location, size = 20, color = 'black') {
  const ctx = getTrigContext();

  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.arc(location.x, location.y, Math.floor(size / 2), 0, Math.PI * 2);
  ctx.fill();
}
