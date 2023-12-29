/**
 * @typedef{{
 *  colors: boolean,
 *  notes: boolean,
 *  leaveCopy: boolean,
 * }} Options
 */

/**
 * @param {globalThis.SpreadsheetApp.Sheet} frm
 * @param {globalThis.SpreadsheetApp.Sheet} to
 * @param {(data:any[], index:number, arr:any[][]) => boolean} condition
 * @param {Options} [options]
 */
function moveData_(frm, to, condition, options = {}) {
  const dataRange = frm.getDataRange();
  const frmData = dataRange.getValues();
  let dataColors;
  let dataNotes;
  const deleteRows = [];
  const data = frmData.filter((row, index, arr) => {
    const res = condition(row, index, arr);
    if (res) {
      deleteRows.push(index);
      return true;
    }
    return false;
  });
  if (options.colors) dataColors = dataRange.getBackgrounds().filter((_, index) => deleteRows.includes(index));
  if (options.notes) dataNotes = dataRange.getNotes().filter((_, index) => deleteRows.includes(index));
  if (data.length) {
    const lr = to.getLastRow();
    if (lr === to.getMaxRows()) to.appendRow(['']);
    const toRange = to.getRange(to.getLastRow() + 1, 1, data.length, data[0].length);
    toRange.setValues(data);
    if (options.colors) dataColors = toRange.setBackgrounds(dataColors);
    if (options.notes) dataNotes = toRange.setNotes(dataNotes);
    if (options.leaveCopy !== true)
      deleteRows.reverse().forEach((i) => {
        frm.deleteRow(i + 1);
      });
  }
}

function runMoveData() {
  // Лист-источник
  const frm = SpreadsheetApp.getActive().getSheetByName('Перенос или копирование строк. База');
  // Лист-приемник
  const to = SpreadsheetApp.getActive().getSheetByName('Перенос или копирование строк');
  // Проверка для каждой строки: если 3й элемент дата, то переноси
  const condition = (row) => !!row[2]?.getTime;
  moveData_(frm, to, condition, { colors: true, notes: true });
}

function runCopyData() {
  // Лист-источник
  const frm = SpreadsheetApp.getActive().getSheetByName('Перенос или копирование строк. База');
  // Лист-приемник
  const to = SpreadsheetApp.getActive().getSheetByName('Перенос или копирование строк');
  // Преобразователь в значение для сравнения
  const toValue = (data) => (data?.getTime ? data.getTime() : data);
  // Индекс приемника, то что в нем уже есть
  const toIndex = to
    .getDataRange()
    .getValues()
    .map((row) => toValue(row[2]));
  // Проверка для каждой строки: если третий элемент дата и такого значения нет в примнике, то копируй
  const condition = (row) => row[2]?.getTime && !toIndex.includes(toValue(row[2]));
  moveData_(frm, to, condition, { colors: true, notes: true, leaveCopy: true });
}
