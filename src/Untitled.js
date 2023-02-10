/**
 * Удаляет именованные диапазоны с ошибкой #REF!
 *
 * @param {globalThis.SpreadsheetApp.Sheet} sheet
 */
function removeNamedRangeWithREF_(sheet) {
  sheet.getNamedRanges().forEach((namedRange) => {
    if (namedRange.getRange().getA1Notation() === '#REF!') namedRange.remove();
  });
}

function run() {
  const sheet = SpreadsheetApp.getActive();
  removeNamedRangeWithREF_(sheet);
}
