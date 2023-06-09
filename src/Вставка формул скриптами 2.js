function userActionInsertFormulas2() {
  const sheet = SpreadsheetApp.getActive().getSheetByName('Вставка формул скриптами');

  sheet.getRange('H2:H').setValue("=IFERROR(VLOOKUP(G2;'Вставка формул скриптами'!$E$2:$F;2;0);  )");
}
