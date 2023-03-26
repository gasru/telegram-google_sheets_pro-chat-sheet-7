/**
 *
 * @param {GoogleAppsScript.Spreadsheet.Range} range
 */
function updateRange_(range) {
  range.setValue('ДОП');
}

function runIt() {
  const range = SpreadsheetApp.getActive()
    .getSheetByName('Заполнение массива по мере добавления строк')
    .getRange('A:B');
  updateRange_(range);
}
