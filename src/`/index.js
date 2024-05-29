/* exported autoInsertDate */

/**
 *
 * @param {GoogleAppsScript.Events.SheetsOnEdit} e
 */
function autoInsertDate(e) {
  var range = e.range;
  var sheet = range.getSheet();
  var startRow = 7; // Начальная строка для вставки даты

  if (sheet.getName() === 'Автовставка даты' && range.getColumn() === 8 && range.getRow() >= startRow) {
    var row = range.getRow();
    var dateCell = sheet.getRange(row, 5);

    if (!dateCell.getValue()) {
      // Проверяем, что ячейка с датой пустая
      dateCell.setValue(Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'dd.MM.yyyy'));
      // getInfoUser(sheet, row, sheet.getRange(row, 2).getValue(), 2);
    }
  }
}

/* exported callAutoInserDate */
function callAutoInserDate() {
  const range = SpreadsheetApp.getActive().getSheetByName('Автовставка даты').getRange(12, 8);
  range.setValue('asdfasdf');
  const e = { range };
  autoInsertDate(e);
}
