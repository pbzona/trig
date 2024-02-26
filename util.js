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
export function getTrigContext() {
  return getTrigCanvas().getContext('2d');
}
