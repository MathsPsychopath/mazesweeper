/**
 *
 * @param {Array<Number>} coordinate 2D tuple representing square
 * @param {String} initColor string representing css class of colour
 * @param {String} repColor string representing css class of colour
 */
export default function changeSquareColor(coordinate, initColor, repColor) {
  const square = document.getElementById(
    `row-${coordinate[0]}-col-${coordinate[1]}`
  );
  square.classList.remove(initColor);
  square.classList.add(repColor);
}
