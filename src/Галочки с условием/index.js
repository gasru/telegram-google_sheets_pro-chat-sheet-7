function onEdit1(e) { // Подключите к триггеру события EDIT
  const range = e.range;
  const sheet = range.getSheet();
  if (range.getA1Notation() == 'A1' && sheet.getName() == 'Галочки с условием') {
    sheet.getRange(2, 1, sheet.getLastRow() - 1).setValue(e.value);
  }
}
