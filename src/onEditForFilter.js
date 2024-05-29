/* exported onEdit1 */

/**
 * Изменяет фильтр при изменении ячейки
 *
 * @param {GoogleAppsScript.Events.SheetsOnEdit} e
 */
function onEdit1(e) {
  const sheet = e.range.getSheet();
  if (sheet.getName() == 'Глобальный фильтр по значению из ячейки' && e.range.getA1Notation() == 'F1') {
    const filter = sheet.getFilter();
    const filterCriteria = filter.getColumnFilterCriteria(1).copy().build();
    filter.setColumnFilterCriteria(1, filterCriteria);
  }
}
