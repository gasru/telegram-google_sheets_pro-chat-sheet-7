/* exported sumWhiteCellsInColumnK */

function sumWhiteCellsInColumnK() {
  const sheet = SpreadsheetApp.getActive();
  const range = sheet.getRange('D2:D10');
  const values = range.getValues();
  const colors = range.getBackgrounds();

  return values.reduce((a, row, i) => {
    const [value] = row;
    const [color] = colors[i];
    if (color === '#ffffff') a += value;
    return a;
  }, 0);
}
