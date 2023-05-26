const LIST_OF_RANGE = [{ a1Nota: "'Очистка диапазона по триггеру'!C5:F10" }];

/* exported triggerCleanRanges */
function triggerCleanRanges() {
  const book = SpreadsheetApp.getActive();
  LIST_OF_RANGE.forEach((range) => book.getRange(range.a1Nota).clearContent());
}
