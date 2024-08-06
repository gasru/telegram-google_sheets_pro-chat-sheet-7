function moveDataDown_() {
  const sheet = SpreadsheetApp.getActive().getSheetByName('Сдвигать данные вниз');
  const values = sheet.getDataRange().getValues();

  const lastIndexFormula = values.findLastIndex((row) => row[0] !== '');
  const lastIndexData = values.findLastIndex((row) => row[1] !== '');

  if (lastIndexData >= lastIndexFormula) {
    return;
  }

  const range = sheet.getRange(2, 2, lastIndexData, 1);
  range.moveTo(range.offset(lastIndexFormula - lastIndexData, 0));
}

/* exported triggerActionMoveDown */
function triggerActionMoveDown() {
  moveDataDown_();
}
