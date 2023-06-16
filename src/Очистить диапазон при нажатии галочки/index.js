const CLEAR_CONTENTS_BYCHECKBOX_RANGES = [
  {
    a1nota: 'Очистить диапазон при нажатии галочки!E5:E8',
  },
];

/* exported clearContentByCheckboxOnEditTrigger */
function clearContentByCheckboxOnEditTrigger(e) {
  if (
    e.range.getSheet().getName() === 'Очистить диапазон при нажатии галочки' &&
    e.range.getA1Notation() === 'A1' &&
    (e.value === 'TRUE' || e.value === true || e.value === 'ИСТИНА')
  ) {
    clearContents_(e.source);
    e.range.setValue(false);
  }
}

/**
 * @param {globalThis.SpreadsheetApp.Spreadsheet} book
 */
function clearContents_(book) {
  CLEAR_CONTENTS_BYCHECKBOX_RANGES.forEach((r) => book.getRange(r.a1nota).clearContent());
}
