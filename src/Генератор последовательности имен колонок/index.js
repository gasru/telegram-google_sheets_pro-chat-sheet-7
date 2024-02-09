/* exported GETCOLSYMBOL */

/**
 * Определяет имя колонки по ее номеру
 *
 * @param Номер колонки (столбца).
 *
 * @customfunction
 */
function GETCOLSYMBOL(...args) {
  return getColSymbol_(...args);
}

function getColSymbol_(col) {
  const loopCount = Math.floor(col / 26);
  const colPosition = col % 26;
  let colSymbol;
  if (colPosition && loopCount) {
    colSymbol = String.fromCodePoint(64 + loopCount) + String.fromCodePoint(64 + colPosition);
  } else if (!colPosition && loopCount) {
    colSymbol = (String.fromCodePoint(64 + loopCount - 1) + String.fromCodePoint(65 + 25)).replace('@', '');
  } else {
    colSymbol = String.fromCodePoint(64 + colPosition);
  }
  return colSymbol;
}
