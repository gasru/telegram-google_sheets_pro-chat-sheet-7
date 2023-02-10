function userActionAutoFillSeries() {
  const range = SpreadsheetApp.getActiveRange();
  range.autoFillToNeighbor(SpreadsheetApp.AutoFillSeries.DEFAULT_SERIES);
}

function userActionAutoFillCurrent() {
  const range = SpreadsheetApp.getActiveRange();
  range.copyTo(range.offset(0, 0, range.getSheet().getLastRow()), SpreadsheetApp.CopyPasteType.PASTE_NORMAL);
}

function userActionAutoFillCurrentSheetEnd() {
  const range = SpreadsheetApp.getActiveRange();
  range.copyTo(range.offset(0, 0, range.getSheet().getMaxRows()), SpreadsheetApp.CopyPasteType.PASTE_NORMAL);
}
