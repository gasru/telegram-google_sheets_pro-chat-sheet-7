/**
 *
 * @param {{range: GoogleAppsScript.Spreadsheet.Range}} e
 */
function triggerOnEditOrFormulaOrValue(e) {
  if (e.range.getSheet().getName() !== 'Или формула или значение (скрипт)') return;
  if (e.range.getA1Notation() !== 'J8') return;
  if (Object.prototype.hasOwnProperty.call(e, 'value')) e.range.getSheet().getRange('H8').setValue('EXEMPT');
  else e.range.getSheet().getRange('H8').setValue('');
}
