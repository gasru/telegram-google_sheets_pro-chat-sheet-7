/* exported  exactCopyRange */
function exactCopyRange() {
  const sourceSheet = SpreadsheetApp.openById('1_omaCQl19hIFdQmP6Dr4_yUKWOhNwg8X7RjZWBv0dj0').getSheetByName(
    'Шаблон для точного копирования'
  );
  const targetBook = SpreadsheetApp.getActive();
  const copySheet = sourceSheet.copyTo(targetBook);
  const sourceRange = copySheet.getRange('A1:C20');
  const targetSheet = targetBook.getSheetByName('Копирование форматирования скриптом');
  sourceRange.copyTo(targetSheet.getRange('E5'));
  targetBook.deleteSheet(copySheet);
}
