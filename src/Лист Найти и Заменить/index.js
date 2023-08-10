function findReplace() {
  const sheet = SpreadsheetApp.getActiveSheet();
  if (sheet.getName() !== 'Лист Найти и Заменить') return;
  const findTextRange = sheet.getRange('E3');
  const findText = findTextRange.getValue();
  const replaceTextRange = sheet.getRange('E4');
  const replaceText = replaceTextRange.getValue();
  const range = SpreadsheetApp.getActive().getRange("'Лист Найти и Заменить'!A8:Z"); // sheet.getParent().getRange(sheet.getRange('E5').getValue());
  const res = range.createTextFinder(findText).replaceAllWith(replaceText);
  if (res) {
    updateDVR_(findTextRange, findText);
    updateDVR_(replaceTextRange, replaceText);
  }
  // c;
  // SpreadsheetApp.newDataValidation();
}

/**
 *
 * @param {GoogleAppsScript.Spreadsheet.Range} range
 * @param {any} value
 */
function updateDVR_(range, value) {
  const dvr = range.getDataValidation();
  const list = [value];
  if (dvr && dvr.getCriteriaType() === SpreadsheetApp.DataValidationCriteria.VALUE_IN_LIST) {
    list.push(...dvr.getCriteriaValues());
  }
  const rule = SpreadsheetApp.newDataValidation().requireValueInList(
    list.filter((v, i, a) => a.indexOf(v) === i),
    true,
  );
  range.setDataValidation(rule);
}
