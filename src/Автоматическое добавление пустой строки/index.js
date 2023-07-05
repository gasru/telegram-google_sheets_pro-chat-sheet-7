/* exported triggerOnEditAppendNewRow */
/**
 *
 * @param {{range: GoogleAppsScript.Spreadsheet.Range}} e
 */
function triggerOnEditAppendNewRow(e) {
  const sheet = e.range.getSheet();
  if (sheet.getName() !== 'Автоматическое добавление пустой строки') return;
  const lr = sheet.getLastRow();
  const mr = sheet.getMaxRows();
  if (mr > lr + 1) sheet.deleteRows(lr + 2, mr - lr - 1);
  else if (mr === lr) sheet.appendRow(['']);
}
