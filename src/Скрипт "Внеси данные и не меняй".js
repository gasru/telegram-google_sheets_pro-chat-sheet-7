/* exported onedit */
function onedit(e) {
  if (
    e.range.getSheet().getName() === 'Скрипт "Внеси данные и не меняй"' &&
    e.range.rowStart > 1 &&
    e.range.columnStart === 1
  ) {
    const ofset = e.range.offset(0, 1);
    if (ofset.getValue() !== '') return;
    ofset.setValue(e.value);
  }
}
