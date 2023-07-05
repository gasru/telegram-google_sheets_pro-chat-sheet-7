/* exported triggerOnEditHideColumnsByValue */
/**
 *
 * @param {{range: GoogleAppsScript.Spreadsheet.Range}} e
 */
function triggerOnEditHideColumnsByValue(e) {
  const range = e.range;
  const sheet = range.getSheet();
  if (sheet.getName() !== 'Скрываем колонки по значению') return;
  if (e.range.getColumn() !== 2) return;
  const rangeHide = sheet.getRange('C:C');
  const check = rangeHide.getValues().some((row) => row[0] === 'hide');
  if (check) sheet.hideColumns(3);
  else sheet.showColumns(3);
}
