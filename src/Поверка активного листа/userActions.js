/* exported userActionRunBenchmarkCurrentSheet */
function userActionRunBenchmarkCurrentSheet() {
  const book = SpreadsheetApp.getActive();
  const id = book.getId();
  const sheetname = SpreadsheetApp.getActiveSheet().getName();

  const template = HtmlService.createTemplateFromFile('Поверка активного листа/modalDialog');
  const url = `https://script.google.com/macros/s/AKfycbyjha5Ri1groX1FMmrGAyrIbbSoUF0JVlHTiE_L0nwteR4pJtANSjuhwDqGXVEJkyBlPA/exec?id=${id}&sheetname=${encodeURIComponent(
    sheetname,
  )}&self=1`;
  template.url = url;

  SpreadsheetApp.getUi().showModalDialog(
    template.evaluate().setHeight(400).setWidth(400),
    'Запущена поверка. Дождитесь ссобщения!',
  );
}
