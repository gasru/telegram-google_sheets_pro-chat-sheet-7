/* exported userActionShowDateTimePicker */
function userActionShowDateTimePicker() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const cell = sheet.getActiveCell();
  const currentValue = cell.getValue();

  if (currentValue instanceof Date) {
    const date = Utilities.formatDate(currentValue, Session.getScriptTimeZone(), 'yyyy-MM-dd');
    const time = Utilities.formatDate(currentValue, Session.getScriptTimeZone(), 'HH:mm');
    const template = HtmlService.createTemplateFromFile('DateTimePicker');
    template.date = date;
    template.time = time;
    const html = template.evaluate().setWidth(300).setHeight(200);
    SpreadsheetApp.getUi().showModalDialog(html, 'Выбор даты и времени');
  } else {
    SpreadsheetApp.getUi().alert('Пожалуйста, выберите ячейку с датой и временем.');
  }
}

function setDateTimeFromPicker(date, time) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const cell = sheet.getActiveCell();
  const newDate = new Date(date + 'T' + time);
  cell.setValue(newDate);
}
