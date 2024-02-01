/**
 * Возвращает имя текущей таблицы.
 * @customfunction
 */
function fileName() {
  const tableName = SpreadsheetApp.getActiveSpreadsheet().getName();
  return tableName;
}
