function copyWithNotes() {
  const fromBook = SpreadsheetApp.openById('1YndpOGdNHmf1Ny9HyKMEwjp4rkkGP9x2-CB1FVda-ZY');
  const toBook = SpreadsheetApp.openById('1YvdI2yzKp2eWw5djpNlTS4vMER9bJrBa3gKHYcdDNpM');
  const fromSheet = fromBook.getSheetByName('Копирование примечаний');
  const toSheet = toBook.getSheetByName('Лист1');
  const fromRange = fromSheet.getRange('A:C');
  const toRange = toSheet.getRange('D:F');

  toRange.clearContent().setValues(fromRange.getValues()).setNote(fromRange.getNotes());
}
