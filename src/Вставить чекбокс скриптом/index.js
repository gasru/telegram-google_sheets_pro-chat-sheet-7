/* exported  userActionInsertCheckBoxes */

function userActionInsertCheckBoxes() {
  const sheet = SpreadsheetApp.getActive().getSheetByName('Вставить чекбокс скриптом');
  sheet.appendRow(['']);
  const lr = sheet.getLastRow() + 1;
  const range = sheet.getRange(`${lr}:${lr}`);
  insertCheckBoxesToRange_(range);
}

/**
 *
 * @param {GoogleAppsScript.Spreadsheet.Range} range
 * @returns
 */
function insertCheckBoxesToRange_(range) {
  return range.insertCheckboxes();
}
