/* exported userActionInsertFormulas */
function userActionInsertFormulas() {
  const sheet = SpreadsheetApp.getActive().getSheetByName('Вставка формул скриптами');

  sheet.getRange('A2:C5').setValue('=SUM(A3;B3;C3)');
  sheet.getRange('H2:H5').setValue('=IFERROR(VLOOKUP(G2;\'Вставка формул скриптами\'!$E$2:$F;2;0);"")');
}
