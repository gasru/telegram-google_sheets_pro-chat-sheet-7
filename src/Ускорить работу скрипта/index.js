/* exported userActionCopyValues */
function userActionCopyValues() {
  copyValues_('rg');
}

function copyValues_(e) {
  const sheet = SpreadsheetApp.getActive().getSheetByName('Ускорить работу скрипта');
  const dataRange = sheet.getDataRange();
  const values = dataRange.getValues();

  const lastValKMNOV = values.findLast((row) => row[11] === e);

  if (!lastValKMNOV) {
    console.warn(`lastValKMNOV ${lastValKMNOV}`);
    return;
  }

  const lastIndexBF = values.findLastIndex((row) => row.slice(1, 1 + 5).join(''));

  if (lastIndexBF === -1) {
    console.warn(`lastIndexBF ${lastIndexBF}`);
    return;
  }

  sheet
    .getRange(lastIndexBF + 2, 2, 1, 5)
    .setValues([[lastValKMNOV[10], lastValKMNOV[11], lastValKMNOV[12], lastValKMNOV[13], lastValKMNOV[21]]]);
}
