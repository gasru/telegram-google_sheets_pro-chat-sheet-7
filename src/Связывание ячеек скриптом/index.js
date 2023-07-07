/* global base26ABCfrom10 */

/* exported triggerOnEditLinkedCells */
/**
 *
 * @param {{range:GoogleAppsScript.Spreadsheet.Range}} e
 * @returns
 */
function triggerOnEditLinkedCells(e) {
  const bgVal = '#d5a6bd';
  const sheet = e.range.getSheet();
  if (sheet.getName() !== 'Связывание ячеек скриптом') return;
  if (e.range.getBackground() === bgVal) {
    const ranges = sheet
      .getDataRange()
      .getBackgrounds()
      .reduce((a, row, i) => {
        row.forEach((cell, j) => {
          if (cell === bgVal) a.push(`${base26ABCfrom10(j + 1)}${i + 1}`);
        });
        return a;
      }, []);
    sheet.getRangeList(ranges).setValue(e.value);
  }
}
