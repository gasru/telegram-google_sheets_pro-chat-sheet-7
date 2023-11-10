/* eslint-disable camelcase */
/* exported onEdit_Переименовать_Или_Загнать_В_Триггер */

/**
 * Триггер события EDIT
 *
 * Переименовать в onEdit, а лучше зарегистрировать от имени Владельца
 *
 * @param {GoogleAppsScript.Events.SheetsOnEdit} e
 */
function onEdit_Переименовать_Или_Загнать_В_Триггер(e) {
  const sheet = e.range.getSheet();
  if (sheet.getName() !== 'Добавить дату в строке при изменении ячейки') return;
  const column = e.range.getColumn();
  // var str = e.range.getRow();
  // var stolb = e.range.getColumn();

  if (column == 6 && e.value === 'Готово') {
    e.source.getActiveSheet().getRange(e.range.getRow(), 8).setValue(new Date());
  }
}
