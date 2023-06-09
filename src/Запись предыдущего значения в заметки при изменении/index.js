/* global updateHistNotesByRange_ */
/* exported onEditTrigger */
/**
 *
 * @param {{range: GoogleAppsScript.Spreadsheet.Range}} e
 */
function onEditTrigger(e) {
  const range = e.range;
  const sheet = range.getSheet();
  if (sheet.getName() !== 'Запись предыдущего значения в заметки при изменении') return;
  updateHistNotesByRange_(e.range);
}
