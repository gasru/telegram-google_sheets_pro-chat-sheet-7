function Готовность_к_ОПЗ() {
  var spreadsheet = SpreadsheetApp.getActive();
  var sheet = spreadsheet.getActiveSheet();
  if (sheet.getName() !== 'Готовность к ОПЗ') return;
  sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns()).activate();
  spreadsheet.getActiveRange().removeDuplicates([1, 2, 3, 4, 5, 6, 7]).activate();
}
