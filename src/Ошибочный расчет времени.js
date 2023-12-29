// https://t.me/googleappsscriptrc/72586

/**
 * @typedef {{
 *   range: SpreadsheetApp.Range;
 * }} Event
 */

/**
 * @param {Event} e
 */
function ownerTriggerOnEditIncorrectTiming(e) {
  const range = e.range;
  if (range.getSheet().getName() !== 'Ошибочный расчет времени') return;
  const column = range.getColumn();
  const value = range.getValue();
  if (![1, 2].includes(column) || !value?.getTime) return;
  const date = new Date();
  date.setHours(value.getHours(), value.getMinutes(), 0, 0);
  range.setNumberFormat('dd.M HH:mm').setValue(date);
}
