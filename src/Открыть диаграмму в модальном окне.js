function showModalDialog() {
  SpreadsheetApp.getUi().showModalDialog(
    HtmlService.createHtmlOutputFromFile('Диаграмма в модальном окне'),
    'Диаграмма в модальном окне',
  );
}

function htmlServiceGetData() {
  return SpreadsheetApp.getActive()
    .getSheetByName('Открыть диаграмму в модальном окне')
    .getDataRange()
    .getValues()
    .map((row) => row.map((cell) => String(cell)));
}
