/**
 * @typedef {{
 *   range: SpreadsheetApp.Range;
 *   value: any;
 * }} Event
 */

/* exported onEdit__ */
/**
 * @param {Event} e
 */
function ownerTriggerOnEdit(e) {
  const { range } = e;
  const sheet = range.getSheet();
  if (sheet.getName() !== 'Лист для тестов и проверок гипотез') return;
  SpreadsheetApp.getActive().toast(`value: ${e.value}; getValue:${range.getValue()}`);
  if (range.getA1Notation() !== 'B2') return;
}
