function onEdit1(e) {
  const range = e.range;
  const sheet = range.getSheet();
  if (range.getA1Notation() == 'A1' && sheet.getName() == 'Галочки с условием в A1') {
    sheet.getRange(2, 1, sheet.getLastRow() - 1).setValue(e.value);
  }
}
