/* exported userActionMakeCalculation */
function userActionMakeCalculation() {
  const sheet = SpreadsheetApp.getActive().getSheetByName('Расчет по кнопке из меню');
  const range = sheet.getRange('C1:2');
  const values = range.getValues();
  const data = values[0].map((cell, i) => cell / values[1][i] - 1);
  range.offset(2, 0, 1).setValues([data]).activate();
}
