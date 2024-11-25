/* exported  onEditTriggerActionAppendRow*/
/**
 *
 * @param {GoogleAppsScript.Events.SheetsOnEdit} e
 */
function onEditTriggerActionAppendRow(e) {
  const range = e.range;
  const sheet = range.getSheet();
  if (sheet.getName() !== 'Добавление строки сверху при редактировании ячейки') {
    return;
  }
  if (range.getA1Notation() !== 'A3') {
    return;
  }
  SpreadsheetApp.getActive().toast('Добавление строки ...');
  sheet.insertRowsBefore(3, 1);
  SpreadsheetApp.getActive().toast('Строка добавлена', 'Уведомление', -1);
}
