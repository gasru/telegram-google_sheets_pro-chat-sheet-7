/**
 * @typedef {{
 *   range: SpreadsheetApp.Range
 * }} Event
 */

/**
 * @param {Event} e
 */
function ownerTriggerOnEditAutoChangeList(e) {
  const sheet = e.range.getSheet();
  if (sheet.getSheetName() !== "Автоматическое изменение значения списка")
    return;
  if (e.range.getColumn() !== 2 || e.range.getNumColumns() > 1) return;
  const values = e.range.getValues().map(row => {
    const [value] = row;
    if (value === 'Отсутствует') return ['Отсутствует'];
    if (value === '') return ['Да'];
    return ['Нет'];
  });

  e.range.offset(0, -1).setValues(values);
}
