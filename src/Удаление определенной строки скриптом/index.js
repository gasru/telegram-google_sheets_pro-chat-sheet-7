/* exported  removeSpecificRows */
function removeSpecificRows() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('Удаление определенной строки скриптом');
  const lr = sheet.getLastRow();
  const range = sheet.getRange(6, 1, lr - 5, 14).getValues();

  let index;

  do {
    index = range.findLastIndex((item) => item[13] == 'Отмена');
    console.log(index);
    if (index !== -1) {
      range[index][13] = '';
      sheet.deleteRow(index + 6);
    }
  } while (index !== -1);
}
